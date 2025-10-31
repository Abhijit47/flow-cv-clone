import { cn } from '@/lib/utils';

type SectionHeadingGroupProps = React.ComponentProps<'hgroup'> &
  React.PropsWithChildren<object>;

type SectionHeadingProps = React.ComponentProps<'h3'> &
  React.PropsWithChildren<{
    align?: 'left' | 'center' | 'right';
  }>;

type SectionSubHeadingProps = React.ComponentProps<'p'> &
  React.PropsWithChildren<{
    align?: 'left' | 'center' | 'right';
  }>;

export function SectionHeadingGroup(props: SectionHeadingGroupProps) {
  return <hgroup className={'space-y-4'}>{props.children}</hgroup>;
}

export function SectionHeading(props: SectionHeadingProps) {
  return (
    <h3
      className={cn(
        props.align === 'left' && 'text-left',
        props.align === 'center' && 'text-center',
        props.align === 'right' && 'text-right',
        'text-5xl font-bold'
      )}>
      {props.children}
    </h3>
  );
}
export function SectionSubHeading(props: SectionSubHeadingProps) {
  return (
    <p
      className={cn(
        'text-xl font-semibold',
        props.className ? props.className : ''
      )}>
      {props.children}
    </p>
  );
}
