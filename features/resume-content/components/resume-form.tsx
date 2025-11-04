'use client';

import { InfoIcon } from 'lucide-react';
import { Controller, useFormContext } from 'react-hook-form';

import { Card, CardContent } from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ResumeFormValues } from '@/lib/zodSchemas/resume-schemas';

export default function ResumeForm() {
  const form = useFormContext<ResumeFormValues>();

  return (
    <Card className={'p-2'}>
      <CardContent className={'p-2'}>
        <FieldSet className={'gap-4'}>
          <FieldLegend variant='legend' className={'flex items-center gap-2'}>
            <InfoIcon className={'size-4'} />
            Introduction Form
          </FieldLegend>
          <FieldDescription>
            Fill out the form to create your resume.
          </FieldDescription>
          <FieldSeparator />
          <FieldGroup className={'gap-4'}>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
              <Controller
                name='firstName'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name} className={'capitalize'}>
                      {field.name}
                    </FieldLabel>
                    <Input
                      id={field.name}
                      placeholder='Evil'
                      aria-invalid={fieldState.invalid}
                      {...field}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='lastName'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name} className={'capitalize'}>
                      {field.name}
                    </FieldLabel>
                    <Input
                      aria-invalid={fieldState.invalid}
                      id={field.name}
                      placeholder='Rabbit'
                      {...field}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
            <Controller
              name='email'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className={'capitalize'}>
                    {field.name}
                  </FieldLabel>
                  <Input
                    aria-invalid={fieldState.invalid}
                    type='email'
                    id={field.name}
                    placeholder='someone@gmail.com'
                    {...field}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name='objective'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className={'capitalize'}>
                    {field.name}
                  </FieldLabel>
                  <Textarea
                    aria-invalid={fieldState.invalid}
                    id={field.name}
                    placeholder='A brief statement about your career goals and aspirations.'
                    {...field}
                    className={'min-h-[100px] resize-none'}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
              <Controller
                name='address'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name} className={'capitalize'}>
                      {field.name}
                    </FieldLabel>
                    <Input
                      type='text'
                      aria-invalid={fieldState.invalid}
                      id={field.name}
                      placeholder='1234 Main St, City, Country'
                      autoComplete='address-level1'
                      {...field}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='location'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name} className={'capitalize'}>
                      {field.name}
                    </FieldLabel>
                    <Input
                      type='text'
                      aria-invalid={fieldState.invalid}
                      id={field.name}
                      placeholder='City, State, ZIP'
                      {...field}
                      autoComplete='address-level2'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
              <Controller
                name='phone'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name} className={'capitalize'}>
                      {field.name}
                    </FieldLabel>
                    <Input
                      type='tel'
                      aria-invalid={fieldState.invalid}
                      id={field.name}
                      placeholder='A brief statement about your career goals and aspirations.'
                      {...field}
                      autoComplete='tel-country-code'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='website'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name} className={'capitalize'}>
                      {field.name}
                    </FieldLabel>
                    <Input
                      type='url'
                      aria-invalid={fieldState.invalid}
                      id={field.name}
                      placeholder='https://yourwebsite.com'
                      {...field}
                      autoComplete='url'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
          </FieldGroup>
        </FieldSet>
      </CardContent>
    </Card>
  );
}
