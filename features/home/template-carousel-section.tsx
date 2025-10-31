'use client';

import * as React from 'react';

import {
  SectionHeading,
  SectionHeadingGroup,
  SectionSubHeading,
} from '@/components/shared/section-headings';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { templates } from '@/constants';
import { useDotButton } from '@/hooks/use-dot-button';
import { cn } from '@/lib/utils';
import AutoPlay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';

export default function TemplateCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  // console.log('current :', current);
  //  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slides: String(templates.length),
  });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className='py-12 space-y-12'>
      <SectionHeadingGroup>
        <SectionHeading align='left'>
          Choose from 50+ Resume Templates
        </SectionHeading>
        <SectionSubHeading>
          Our{' '}
          <Link
            href={'/resume-templates'}
            className={'underline underline-offset-2'}>
            free resume templates
          </Link>{' '}
          help you create a professional resume that stands out.
        </SectionSubHeading>
      </SectionHeadingGroup>
      <Carousel
        plugins={[AutoPlay({ delay: 3000 })]}
        setApi={setApi}
        className='w-full'
        opts={{ loop: true }}>
        <CarouselContent className='py-3'>
          {templates.map((template, index) => (
            <CarouselItem key={index} className={cn('basis-[33%]', {})}>
              <Card
                className={cn(
                  'p-2 gap-4',
                  'transition-transform duration-500',
                  {
                    'scale-[0.6]': index !== current - 1,
                  }
                )}>
                <CardContent className='flex aspect-square items-center justify-center p-2'>
                  <Image
                    src={template.image}
                    alt={template.name}
                    width={500}
                    height={500}
                    className='w-full h-full object-cover rounded-md'
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </section>
  );
}

type PropType = React.ComponentPropsWithRef<'button'>;

export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type='button' {...restProps}>
      {children}
    </button>
  );
};
