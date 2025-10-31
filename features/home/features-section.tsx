import { Card, CardContent } from '@/components/ui/card';
import { IconFileCheck, IconGift, IconShieldLock } from '@tabler/icons-react';

const features = [
  {
    id: crypto.randomUUID(),
    text: '1st resume,free forever',
    logo: IconGift,
  },
  {
    id: crypto.randomUUID(),
    text: 'Privacy & GDPR compliant',
    logo: IconShieldLock,
  },
  {
    id: crypto.randomUUID(),
    text: 'Professionally designed templates',
    logo: IconFileCheck,
  },
];

export default function FeaturesSection() {
  return (
    <section
      className={'py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
      {features.map((feature) => (
        <Card
          key={feature.id}
          className={'items-center justify-center aspect-video'}>
          <CardContent className={'flex flex-col gap-6'}>
            <div>
              <feature.logo className={'size-16 mx-auto'} />
            </div>
            <h4 className={'text-xl font-semibold'}>{feature.text}</h4>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
