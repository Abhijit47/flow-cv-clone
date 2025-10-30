'use client';

import { signOut, useSession } from '@/lib/auth/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { buttonVariants } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Skeleton } from '../ui/skeleton';

export default function UserButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data } = useSession();
  const router = useRouter();

  if (!data) {
    return <Skeleton className='size-8 md:size-9 rounded-full animate-pulse' />;
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div className='relative'>
          <Avatar>
            <AvatarImage
              src={data.user.image || 'https://github.com/shadcn.png'}
              alt={data.user.name}
            />
            <AvatarFallback>
              {data.user.email?.charAt(0).toUpperCase() || 'U'}
            </AvatarFallback>
          </Avatar>
          <span className='absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 border-background bg-emerald-500'>
            <span className='sr-only'>Online</span>
          </span>
        </div>
      </PopoverTrigger>

      <PopoverContent
        className={
          'w-[200px] space-y-2 p-2 ring-1 ring-background/10 shadow-lg'
        }
        align='end'
        alignOffset={10}
        arrowPadding={5}>
        <Link
          href={'#'}
          onClick={() => setIsOpen(false)}
          className={buttonVariants({
            variant: 'ghost',
            className: 'w-full justify-start bg-accent/50',
          })}>
          Profile
        </Link>
        <Link
          href={'#'}
          onClick={() => setIsOpen(false)}
          className={buttonVariants({
            variant: 'ghost',
            className: 'w-full justify-start bg-accent/50',
          })}>
          Settings
        </Link>
        <Link
          href={'#'}
          onClick={() => {
            signOut({
              fetchOptions: {
                onSuccess: () => {
                  toast.success('Logged out successfully');
                  router.push('/login');
                },
              },
            });
            setIsOpen(false);
          }}
          className={buttonVariants({
            variant: 'destructive',
            className: 'w-full justify-start bg-accent/50',
          })}>
          Logout
        </Link>
      </PopoverContent>
    </Popover>
  );
}
