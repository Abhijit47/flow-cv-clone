import { Button, buttonVariants } from '@/components/ui/button';
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
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { fontFamily, ResumeFormValues } from '@/lib/zodSchemas/resume-schemas';
import { CheckCircle2Icon, CogIcon } from 'lucide-react';
import { Controller, useFormContext } from 'react-hook-form';

export default function ResumeSettings() {
  const form = useFormContext<ResumeFormValues>();

  return (
    <Card className={'p-2'}>
      <CardContent className={'p-2'}>
        <FieldGroup className={'gap-4'}>
          <FieldSet className={'gap-4'}>
            <FieldLegend variant='legend' className={'flex items-center gap-2'}>
              <CogIcon className={'size-4'} />
              Resume Settings
            </FieldLegend>
            <FieldDescription>
              Configure your resume settings below.
            </FieldDescription>
            <FieldSeparator />
            <FieldGroup className={'gap-4'}>
              <Controller
                name='themeColor'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name} className={'capitalize'}>
                      {field.name}
                    </FieldLabel>
                    <Input
                      id={field.name}
                      placeholder='#000000'
                      aria-invalid={fieldState.invalid}
                      {...field}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <div className={'flex flex-wrap gap-4'}>
                {Array.from({ length: 10 }).map((_, index) => (
                  <Button
                    type='button'
                    size={'icon-sm'}
                    variant={'outline'}
                    key={index}
                    className={'rounded-full p-0.5'}>
                    <CheckCircle2Icon />
                  </Button>
                ))}
              </div>

              <Field className={'gap-2'}>
                <FieldLabel>Font Family</FieldLabel>
                <FieldDescription>
                  Select the font family for your resume.
                </FieldDescription>
                <Controller
                  name='fontFamily'
                  control={form.control}
                  render={({ field, fieldState }) => (
                    // <Field data-invalid={fieldState.invalid}>
                    //   <FieldLabel htmlFor={field.name} className={'capitalize'}>
                    //     {field.name}
                    //   </FieldLabel>
                    <RadioGroup
                      data-invalid={fieldState.invalid}
                      // value={field.value}
                      onValueChange={field.onChange}
                      className={'flex flex-wrap'}>
                      {fontFamily.map((font) => (
                        <span
                          className={buttonVariants({
                            variant: 'outline',
                            size: 'sm',
                          })}
                          key={font}>
                          <RadioGroupItem
                            aria-invalid={fieldState.invalid}
                            value={field.value}
                            id={font}
                          />
                          <Label htmlFor={font}>{font}</Label>
                        </span>
                      ))}
                    </RadioGroup>
                    // </Field>
                  )}
                />
              </Field>

              {/* <div className={'grid grid-cols-2 gap-4'}>
                  <Controller
                    name='firstName'
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel
                          htmlFor={field.name}
                          className={'capitalize'}>
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
                        <FieldLabel
                          htmlFor={field.name}
                          className={'capitalize'}>
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
                /> */}
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </CardContent>
    </Card>
  );
}
