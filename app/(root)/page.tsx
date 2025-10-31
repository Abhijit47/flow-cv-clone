import FaqSection from '@/features/home/faq-section';
import FeaturesSection from '@/features/home/features-section';
import HeroSection from '@/features/home/hero-section';
import HowItWorksSection from '@/features/home/how-it-works-section';
import Services from '@/features/home/services-section';
import TemplateCarousel from '@/features/home/template-carousel-section';
import TestimonialSection from '@/features/home/testimonial-section';

export default function HomePage() {
  return (
    <div className={'container mx-auto max-w-[85em] px-4 2xl:px-0'}>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TemplateCarousel />
      <Services />
      <TestimonialSection />
      <FaqSection />
    </div>
  );
}
