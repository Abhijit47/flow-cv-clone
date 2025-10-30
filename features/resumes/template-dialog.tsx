'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { templates } from '@/constants';
import { IconArrowsDiagonal } from '@tabler/icons-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function TemplateDialog({
  template,
  idx,
}: {
  template: (typeof templates)[0];
  idx: number;
}) {
  const [isTemlateDialogOpen, setIsTemplateDialogOpen] =
    useState<boolean>(false);

  const router = useRouter();

  // const toggleDialog = () => setIsTemplateDialogOpen((prev) => !prev);

  return (
    <Card className={'gap-2 py-2'}>
      <CardContent className={'px-2'}>
        <Dialog
          open={isTemlateDialogOpen}
          onOpenChange={setIsTemplateDialogOpen}>
          <DialogTrigger asChild>
            <Button variant='outline' className={'w-full h-full px-2 relative'}>
              <Image
                src={template.image}
                alt={`temaplate-${idx + 1}`}
                width={500}
                height={500}
                className={'w-full h-full rounded-lg'}
              />
              <span
                className={
                  'inset-0 w-full h-full absolute bg-foreground/50 flex items-center justify-center opacity-0 hover:opacity-100 transition rounded-md hover:cursor-pointer'
                }>
                <IconArrowsDiagonal
                  className={'size-4 md:size-6 lg:size-8 text-background'}
                />
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent className='min-w-11/12 mx-auto size-full overflow-y-scroll p-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <Image
                  src={template.image}
                  alt={`temaplate-${idx + 1}`}
                  width={500}
                  height={500}
                  className={'w-full h-full rounded-lg'}
                />
              </div>

              <div className={'flex flex-col gap-4'}>
                <DialogHeader>
                  <DialogTitle>#Template {idx + 1}</DialogTitle>
                  <DialogDescription>{template.description}</DialogDescription>
                </DialogHeader>
                <Separator />
                <ul className={'list-disc list-inside'}>
                  {template.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant='outline'>Cancel</Button>
                  </DialogClose>
                  <Button
                    onClick={() => {
                      setIsTemplateDialogOpen(false);
                      router.push('/resume/content');
                    }}
                    className={buttonVariants({
                      variant: 'default',
                    })}>
                    Use this template
                  </Button>
                </DialogFooter>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
      <CardFooter className={'w-full'}>
        <p className={'text-center text-xs w-full'}>Temaplate #{idx + 1}</p>
      </CardFooter>
    </Card>
  );
}
