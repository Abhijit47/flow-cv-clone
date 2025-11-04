'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { toast } from 'sonner';

import { Card } from '@/components/ui/card';
import { FieldGroup } from '@/components/ui/field';
import { resumeForm, ResumeFormValues } from '@/lib/zodSchemas/resume-schemas';
import { LazyResumeForm, LazyResumePreview } from '.';

export default function ResumePanel() {
  'use no memo';
  const form = useForm<ResumeFormValues>({
    resolver: zodResolver(resumeForm),
    defaultValues: {
      firstName: 'jhon',
      lastName: 'doe',
      email: 'someone@gmail.com',
      objective: 'Hello! I am using FlowCV to create my resume.',
      address: '123 Main St, Anytown, USA',
      location: 'California, USA',
      phone: '9999911111',
      website: 'https://yourwebsite.com',
    },
    mode: 'onChange',
  });

  const errorHandler: SubmitErrorHandler<ResumeFormValues> = (data) => {
    console.log('Form Error:', data);
  };

  const onSubmit: SubmitHandler<ResumeFormValues> = (data) => {
    console.log('Form Data:', data);
    toast.success(
      <pre className='max-h-96 overflow-auto bg-background p-4'>
        {JSON.stringify(data, null, 2)}
      </pre>
    );
  };

  return (
    <Card className={'p-2 gap-4'}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, errorHandler)}>
          <div className={'grid grid-cols-1 md:grid-cols-2 gap-6'}>
            <FieldGroup className={'gap-4'}>
              <LazyResumeForm />

              {/* <ResumeSettings /> */}
            </FieldGroup>
            <LazyResumePreview />
          </div>
          {/* <DevTool control={form.control} /> */}
        </form>
      </FormProvider>
    </Card>
  );
}
