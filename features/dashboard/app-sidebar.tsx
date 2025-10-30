'use client';

import type { Route } from 'next';
import Link from 'next/link';
import * as React from 'react';

import {
  type Icon,
  IconBriefcase2,
  IconCamera,
  IconDatabase,
  IconDots,
  IconFileAi,
  IconFileDescription,
  IconFileText,
  IconFileWord,
  IconFlagPlus,
  IconInnerShadowTop,
  IconReceiptRupee,
  IconReport,
  IconTextCaption,
} from '@tabler/icons-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { NavMain } from '@/features/dashboard/nav-main';
import { NavUser } from './nav-user';

import { NavSecondary } from './nav-secondary';

type NavItem<T extends string = string> = {
  navMain: {
    title: string;
    url: T;
    icon?: Icon;
  }[];
  navClouds: {
    title: string;
    icon: Icon;
    isActive?: boolean;
    url: T;
    items: {
      title: string;
      url: T;
    }[];
  }[];
  navSecondary: {
    title: string;
    url: T;
    icon: Icon;
  }[];
  documents: {
    title: string;
    url: T;
    icon: Icon;
  }[];
};

const data: NavItem<Route> = {
  navMain: [
    {
      title: 'Resume',
      url: '/resumes',
      icon: IconTextCaption,
    },
    {
      title: 'Cover Letter',
      url: '/cover-letter',
      icon: IconFileText,
    },
    {
      title: 'Job Tracker',
      url: '/job-tracker',
      icon: IconBriefcase2,
    },
    {
      title: 'More',
      url: '/discover',
      icon: IconDots,
    },
  ],
  navClouds: [
    {
      title: 'Capture',
      icon: IconCamera,
      isActive: true,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Proposal',
      icon: IconFileDescription,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Prompts',
      icon: IconFileAi,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Plan & Pricing',
      url: '/pricing',
      icon: IconReceiptRupee,
    },
    {
      title: 'Student Benifit',
      url: '/student-benefits',
      icon: IconFlagPlus,
    },
  ],
  documents: [
    {
      title: 'Data Library',
      url: '#',
      icon: IconDatabase,
    },
    {
      title: 'Reports',
      url: '#',
      icon: IconReport,
    },
    {
      title: 'Word Assistant',
      url: '#',
      icon: IconFileWord,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className='data-[slot=sidebar-menu-button]:p-1.5!'>
              <Link href='/resumes'>
                <IconInnerShadowTop className='size-5!' />
                <span className='text-base font-semibold'>Flow CV Clone</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} /> */}
        <NavSecondary items={data.navSecondary} className='mt-auto' />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
