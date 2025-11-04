import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { templates } from '@/constants';
import { IconCircleDashedPlus } from '@tabler/icons-react';

import { buttonVariants } from '@/components/ui/button';
import ImportResumeDialog from '@/features/resumes/import-resume-dialog';
import TemplateDialog from '@/features/resumes/template-dialog';
import { requireAuth } from '@/lib/auth/requireAuth';
import Link from 'next/link';

export default async function ResumesPage() {
  await requireAuth();

  return (
    <div className='flex flex-1 flex-col'>
      <div className='@container/main flex flex-1 flex-col gap-2'>
        <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
          <Card>
            <CardHeader>
              <CardTitle>Start building your resume</CardTitle>
              <CardDescription>
                Your first resume – 100% free, all design features, unlimited
                downloads – yes really.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div
                className={
                  'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                }>
                <div className={'grid grid-cols-subgrid gap-4'}>
                  <Link
                    href={'/resume/content'}
                    className={buttonVariants({
                      variant: 'ghost',
                      className:
                        'border-2 border-dashed rounded-lg flex flex-col items-center justify-center aspect-video sm:aspect-auto h-full w-full',
                    })}>
                    <IconCircleDashedPlus
                      className={'size-4 md:size-6 lg:size-8'}
                    />
                    New Blank
                  </Link>

                  <ImportResumeDialog />
                </div>
                {templates.map((template, idx) => (
                  <TemplateDialog
                    key={template.id}
                    template={template}
                    idx={idx}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
