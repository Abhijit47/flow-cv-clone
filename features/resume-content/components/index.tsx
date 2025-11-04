'use client';

import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';

export const LazyDownloadButton = dynamic(() => import('./download-button'), {
  ssr: false,
  loading: () => <Skeleton className='h-9 w-full animate-pulse' />,
});

export const LazyResumeForm = dynamic(() => import('./resume-form'), {
  ssr: false,
  loading: () => (
    <Card className={'p-4 gap-4'}>
      <Skeleton className={'h-3 w-4/12 animate-pulse'} />
      <Skeleton className={'h-3 w-6/12 animate-pulse'} />
      <Separator />
      <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
        <div className={'space-y-2'}>
          <Skeleton className={'h-3 w-3/12 animate-pulse'} />
          <Skeleton className={'h-9 w-full animate-pulse'} />
        </div>
        <div className={'space-y-2'}>
          <Skeleton className={'h-3 w-3/12 animate-pulse'} />
          <Skeleton className={'h-9 w-full animate-pulse'} />
        </div>
      </div>
      <div className={'space-y-2'}>
        <Skeleton className={'h-3 w-2/12 animate-pulse'} />
        <Skeleton className={'h-9 w-full animate-pulse'} />
      </div>
      <div className={'space-y-2'}>
        <Skeleton className={'h-3 w-2/12 animate-pulse'} />
        <Skeleton className={'min-h-[100px] w-full animate-pulse'} />
      </div>
      <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
        <div className={'space-y-2'}>
          <Skeleton className={'h-3 w-3/12 animate-pulse'} />
          <Skeleton className={'h-9 w-full animate-pulse'} />
        </div>
        <div className={'space-y-2'}>
          <Skeleton className={'h-3 w-3/12 animate-pulse'} />
          <Skeleton className={'h-9 w-full animate-pulse'} />
        </div>
      </div>
      <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
        <div className={'space-y-2'}>
          <Skeleton className={'h-3 w-3/12 animate-pulse'} />
          <Skeleton className={'h-9 w-full animate-pulse'} />
        </div>
        <div className={'space-y-2'}>
          <Skeleton className={'h-3 w-3/12 animate-pulse'} />
          <Skeleton className={'h-9 w-full animate-pulse'} />
        </div>
      </div>
    </Card>
  ),
});

export const LazyResumePreview = dynamic(() => import('./resume-preview'), {
  ssr: false,
  loading: () => <Skeleton className='h-full w-full animate-pulse' />,
});
