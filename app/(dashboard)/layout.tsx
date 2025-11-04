import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/features/dashboard/app-sidebar';
import { SiteHeader } from '@/features/dashboard/site-header';
import StoreProvider from '@/providers/store-provider';
import { Suspense } from 'react';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <StoreProvider>
        <SidebarProvider
          style={
            {
              '--sidebar-width': 'calc(var(--spacing) * 72)',
              '--header-height': 'calc(var(--spacing) * 12)',
            } as React.CSSProperties
          }>
          <AppSidebar variant='inset' />
          <SidebarInset>
            <SiteHeader />
            <div className='px-4 lg:px-6'>{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </StoreProvider>
    </Suspense>
  );
}
