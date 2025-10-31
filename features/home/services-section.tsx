import {
  SectionHeading,
  SectionHeadingGroup,
  SectionSubHeading,
} from '@/components/shared/section-headings';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  IconBoxMultiple,
  IconDatabase,
  IconFileSmile,
  IconGift,
  IconHandClick,
  IconLanguage,
} from '@tabler/icons-react';
import Link from 'next/link';

const services = [
  {
    id: crypto.randomUUID(),
    title: 'Free forever',
    description:
      'Your first CV remains free forever. No strings attached. No hidden fees, no watermarks. Download it as a high-quality PDF whenever you need.',
    icon: IconGift,
    iconForeground: 'text-green-700',
    iconBackground: 'bg-green-50 dark:bg-green-950/30',
    ringColorClass: 'ring-green-700/30',
  },
  {
    id: crypto.randomUUID(),
    title: 'Secure your data',
    description:
      "We never sell your data. Period. We're GDPR-compliant, and you can delete your data anytime you want. Your data, your control.",
    icon: IconDatabase,
    iconForeground: 'text-red-700',
    iconBackground: 'bg-red-50 dark:bg-red-950/30',
    ringColorClass: 'ring-red-700/30',
  },
  {
    id: crypto.randomUUID(),
    title: 'Multilingual support',
    description:
      'From English to Spanish, Chinese, or any other language, FlowCV has your back. Customize everything to your preferred language.',
    icon: IconLanguage,
    iconForeground: 'text-blue-700',
    iconBackground: 'bg-blue-50 dark:bg-blue-950/30',
    ringColorClass: 'ring-blue-700/30',
  },
  {
    id: crypto.randomUUID(),
    title: 'Multiple resumes',
    description:
      'Duplicate your resume and tailor it for different jobs, regions, or languages with just a click. One-size-fits-all resumes are a thing of the past.',
    icon: IconBoxMultiple,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50 dark:bg-sky-950/30',
    ringColorClass: 'ring-sky-700/30',
  },
  {
    id: crypto.randomUUID(),
    title: 'Expert advice at your fingertips',
    description:
      'Benefit from valuable tips while you write. And our list of action words will help you perfectly describe your achievements.',
    icon: IconHandClick,
    iconForeground: 'text-pink-700',
    iconBackground: 'bg-pink-50 dark:bg-pink-950/30',
    ringColorClass: 'ring-pink-700/30',
  },
  {
    id: crypto.randomUUID(),
    title: 'ATS-ready Resume',
    description:
      'Many employers use scanners to spot keywords in resumes. With FlowCV, your PDF is ready for scanners to read.',
    icon: IconFileSmile,
    iconForeground: 'text-orange-700',
    iconBackground: 'bg-orange-50 dark:bg-orange-950/30',
    ringColorClass: 'ring-orange-700/30',
  },
];

export default function Services() {
  return (
    <section className='py-12 space-y-12'>
      <SectionHeadingGroup>
        <SectionHeading align='left'>
          Everything you need, made simple
        </SectionHeading>
        <SectionSubHeading className={'max-w-3xl w-full'}>
          No hidden fees, no watermarks, no surprises. Your data stays private,
          your first CV is free forever, and you can create, edit, and download
          it anytime.
        </SectionSubHeading>
      </SectionHeadingGroup>

      <div className='overflow-hidden rounded-2xl bg-muted shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-0.5 space-y-0.5 sm:space-y-0 p-0.5'>
        {services.map((action) => (
          <Card
            key={action.title}
            className={cn(
              'group relative rounded-xl border-0 bg-card p-0 focus-within:ring-2 focus-within:ring-ring focus-within:ring-inset'
            )}>
            <CardContent className='p-6'>
              <div>
                <span
                  className={cn(
                    action.iconBackground,
                    action.iconForeground,
                    'inline-flex rounded-lg p-3 ring-2 ring-inset',
                    action.ringColorClass
                  )}>
                  <action.icon aria-hidden='true' className='h-6 w-6' />
                </span>
              </div>
              <div className='mt-4'>
                <h3 className='text-base font-semibold text-foreground'>
                  <Link href={'#'} className='focus:outline-none'>
                    <span aria-hidden='true' className='absolute inset-0' />
                    {action.title}
                  </Link>
                </h3>
                <p className='mt-2 text-sm text-muted-foreground'>
                  {action.description}
                </p>
              </div>
              {/* <span
                aria-hidden='true'
                className='pointer-events-none absolute top-6 right-6 text-muted-foreground/50 group-hover:text-muted-foreground/60'>
                <ArrowUpRight className='h-6 w-6' />
              </span> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
