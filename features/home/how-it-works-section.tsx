import {
  SectionHeading,
  SectionHeadingGroup,
} from '@/components/shared/section-headings';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

const howItWorks = [
  {
    id: crypto.randomUUID(),
    title: 'Add content',
    description:
      "Build your resume — we'll guide you every step of the way to ensure it's professional and polished.",
    cover:
      'https://assets.flowcvassets.com/resume-landing/step1-content-2000.webp',
  },
  {
    id: crypto.randomUUID(),
    title: 'Design effortlessly',
    description:
      'Choose from over 50 templates and customize every detail to suit your style and career.',
    cover:
      'https://assets.flowcvassets.com/resume-landing/step2-design-2000.webp',
  },
  {
    id: crypto.randomUUID(),
    title: 'Download & Share',
    description:
      'Download your resume as a PDF or share it online with your unique link.',
    cover:
      'https://assets.flowcvassets.com/resume-landing/step3-download-2000.webp',
  },
];

export default function HowItWorksSection() {
  return (
    <section className={'py-24 space-y-12'}>
      <SectionHeadingGroup>
        <SectionHeading align='center'>How FlowCV works</SectionHeading>
      </SectionHeadingGroup>

      <div className={'space-y-8'}>
        {howItWorks.map((step, idx) => (
          <div
            className={'grid grid-cols-1 md:grid-cols-2 gap-4'}
            key={step.id}>
            <div>
              <Image
                src={step.cover}
                alt={step.title}
                width={500}
                height={500}
                className={'w-full h-full aspect-video object-contain'}
              />
            </div>
            <Card className={'justify-center aspect-video'}>
              <CardHeader>
                <CardTitle>
                  <h4 className={'text-3xl font-semibold'}>
                    #{idx + 1}. {step.title}
                  </h4>
                </CardTitle>
                <CardDescription>
                  <p className={'text-xl'}>{step.description}</p>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
