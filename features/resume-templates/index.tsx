'use client';

import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';

export const ResumeTemplateFilter = dynamic(
  () => import('./resume-template-filter'),
  {
    ssr: false,
    loading: () => <Skeleton className='max-w-5xl mx-auto w-full h-9' />,
  }
);
