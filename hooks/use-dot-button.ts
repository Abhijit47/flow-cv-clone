import { EmblaCarouselType } from 'embla-carousel';
import { useCallback, useEffect, useState } from 'react';

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    let rafId = 0;
    rafId = requestAnimationFrame(() => {
      onInit(emblaApi);
      onSelect(emblaApi);
    });

    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);

    return () => {
      cancelAnimationFrame(rafId);
      if (emblaApi && typeof emblaApi.off === 'function') {
        emblaApi
          .off('reInit', onInit)
          .off('reInit', onSelect)
          .off('select', onSelect);
      }
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};
