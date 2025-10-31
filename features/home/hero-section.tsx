import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import UserAvatars from '@/components/user-avatars';
import { IconSparkles } from '@tabler/icons-react';
import { ArrowUpRight, CirclePlayIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className='min-h-screen flex items-center justify-center overflow-hidden'>
      <div className='max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0'>
        <div className='my-auto'>
          <Badge
            variant='secondary'
            className='rounded-full py-1 border-border'
            asChild>
            <Link href='/'>
              Free Online Resume Builder{' '}
              <ArrowUpRight className='ml-1 size-4' />
            </Link>
          </Badge>
          <h1 className='mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[4.75rem] xl:text-[5.25rem] font-semibold leading-[1.2]! tracking-tighter'>
            Build a job-winning resume for free
          </h1>
          <p className='mt-6 max-w-[60ch] text-lg xl:text-xl text-foreground/80'>
            Your first resume is 100% free forever. Unlimited downloads. No
            hidden fees. Yes, really 🚀
          </p>

          <UserAvatars />
          <div className='mt-12 flex items-center gap-4'>
            <Link
              href={'/resumes'}
              className={buttonVariants({
                size: 'lg',
                className: 'rounded-full text-base shadow-none',
              })}>
              Get Started <IconSparkles className='h-5! w-5!' />
            </Link>
            <Button
              variant='outline'
              size='lg'
              className='rounded-full text-base shadow-none'>
              <CirclePlayIcon className='h-5! w-5!' /> Watch Demo
            </Button>
          </div>
        </div>
        <div className='w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-screen rounded-xl lg:rounded-none'>
          <Image
            src={
              'https://prod.flowcvassets.com/resume-templates/wk78myowij2vvh1gy8l-s/2560.webp'
            }
            alt='Demo Image'
            width={1000}
            height={600}
            className='w-full h-full object-contain rounded-xl lg:rounded-none'
          />
        </div>
      </div>
    </section>
  );
}
