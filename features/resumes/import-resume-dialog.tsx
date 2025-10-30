'use client';

import { Button } from '@/components/ui/button';
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { IconFolderPlus } from '@tabler/icons-react';
import { useState } from 'react';

export default function ImportResumeDialog() {
  const [isImportDialogOpen, setIsImportDialogOpen] = useState<boolean>(false);

  const toggleDialog = () => setIsImportDialogOpen((prev) => !prev);

  return (
    <Dialog open={isImportDialogOpen} onOpenChange={toggleDialog}>
      <DialogTrigger asChild>
        <Button
          variant='ghost'
          className='border-2 border-dashed rounded-lg flex flex-col items-center justify-center aspect-video sm:aspect-auto h-full w-full'>
          <IconFolderPlus className={'size-4 md:size-6 lg:size-8'} />
          Import Resume
        </Button>
      </DialogTrigger>
      <DialogContent className=''>
        <DialogHeader>
          <DialogTitle>Atlantic Blue</DialogTitle>
          <DialogDescription>
            Each template has been crafted with care to make designing your
            resume an absolute breeze for you.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4'>
          <div className='grid gap-3'>
            <Label htmlFor='name-1'>Name</Label>
            <Input id='name-1' name='name' defaultValue='Pedro Duarte' />
          </div>
          <div className='grid gap-3'>
            <Label htmlFor='username-1'>Username</Label>
            <Input id='username-1' name='username' defaultValue='@peduarte' />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DialogClose>
          <Button type='submit'>Use this template</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
