import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/features/dashboard/app-sidebar';
import { SiteHeader } from '@/features/dashboard/site-header';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
  );
}
