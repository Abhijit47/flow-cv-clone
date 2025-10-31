import {
  SectionHeading,
  SectionHeadingGroup,
} from '@/components/shared/section-headings';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faq = [
  {
    question: 'What is your return policy?',
    answer:
      'You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.',
  },
  {
    question: 'How do I track my order?',
    answer:
      'Track your order using the link provided in your confirmation email, or log into your account to view tracking details.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.',
  },
  {
    question: 'What if I receive a damaged item?',
    answer:
      'Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.',
  },
];

export default function FaqSection() {
  return (
    <section className='min-h-screen flex items-center justify-center px-6'>
      <div className='flex flex-col md:flex-row items-start gap-x-12 gap-y-6'>
        <SectionHeadingGroup>
          <SectionHeading align='left'>
            Frequently Asked <br /> Questions
          </SectionHeading>
        </SectionHeadingGroup>

        <Accordion type='single' defaultValue='question-0' className=''>
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionTrigger className='text-left text-lg'>
                {question}
              </AccordionTrigger>
              <AccordionContent className='text-base text-muted-foreground'>
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
