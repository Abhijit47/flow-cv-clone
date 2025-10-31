'use client';

import Logo from '@/components/shared/logo';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { signOut, useSession } from '@/lib/auth/client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ThemeToggle } from './theme-toggle';

import { cn } from '@/lib/utils';
import type { Route } from 'next';

type NavItem<T extends string = string> = {
  href: T;
  label: string;
  active?: boolean;
}[];

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks: NavItem<Route> = [
  { href: '/', label: 'Home', active: true },
  { href: '/resume-templates', label: 'Resume Templates' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data } = useSession();
  const router = useRouter();
  const pathName = usePathname();

  return (
    <header className='border-b px-4 md:px-6 sticky top-0 z-40 bg-background/95 backdrop-blur-sm'>
      <div className='flex h-16 justify-between gap-4'>
        {/* Left side */}
        <div className='flex gap-2'>
          {/* Mobile menu trigger */}
          <MobileMenu />

          {/* Main nav */}
          <div className='flex items-center gap-6'>
            <Link href='/' className='text-primary hover:text-primary/90'>
              <Logo />
            </Link>
            {/* Navigation menu */}
            <NavigationMenu className='h-full *:h-full max-md:hidden'>
              <NavigationMenuList className='h-full gap-2'>
                {navigationLinks.map((link, index) => {
                  return (
                    <NavigationMenuItem key={index} className='h-full'>
                      <NavigationMenuLink
                        active={link.href === (pathName as Route)}
                        asChild
                        className={cn(
                          'h-full justify-center rounded-none border-y-2 border-transparent py-1.5 font-medium text-muted-foreground hover:border-b-primary hover:bg-transparent hover:text-primary data-active:border-b-primary ',
                          // 'data-active:bg-transparent!',
                          'data-active:bg-primary/10',
                          'hover:bg-primary/10',
                          link.href === (pathName as Route)
                            ? 'border-b-primary text-primary'
                            : ''
                        )}>
                        <Link href={link.href}>{link.label}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right side */}
        <div className='flex items-center gap-2'>
          <ThemeToggle />
          {data ? (
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
          ) : (
            <>
              <Button asChild variant='ghost' size='sm' className='text-sm'>
                <Link href='/login'>Sign In</Link>
              </Button>
              <Button asChild size='sm' className='text-sm'>
                <Link href='/signup'>Get Started</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <div className='flex items-center md:hidden'>
      <Popover>
        <PopoverTrigger asChild>
          <Button className='group size-8' variant='ghost' size='icon'>
            <svg
              className='pointer-events-none'
              width={16}
              height={16}
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M4 12L20 12'
                className='origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315'
              />
              <path
                d='M4 12H20'
                className='origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45'
              />
              <path
                d='M4 12H20'
                className='origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135'
              />
            </svg>
          </Button>
        </PopoverTrigger>
        <PopoverContent align='start' className='w-36 p-1 md:hidden'>
          <NavigationMenu className='max-w-none *:w-full'>
            <NavigationMenuList className='flex-col items-start gap-0 md:gap-2'>
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index} className='w-full'>
                  <NavigationMenuLink
                    href={link.href}
                    className='py-1.5'
                    active={link.active}>
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </PopoverContent>
      </Popover>
    </div>
  );
}
