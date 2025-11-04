import z from 'zod';

export const fontFamily = [
  'Roboto',
  'Lato',
  'Montserrat',
  'OpenSans',
  'Raleway',
  'Caladea',
  'Lora',
  'RobotoSlab',
  'PlayfairDisplay',
  'Merriweather',
] as const;

export const resumeForm = z.object({
  firstName: z
    .string()
    .min(1, { error: 'Minimum 1 character required' })
    .describe('First Name'),
  lastName: z
    .string()
    .min(1, { error: 'Minimum 1 character required' })
    .describe('Last Name'),
  email: z.email().describe('Email Address'),
  objective: z.string().optional().describe('Objective Statement'),
  address: z.string().optional().describe('Address'),
  location: z.string().optional().describe('Location'),
  phone: z.string().optional().describe('Phone Number'),
  website: z.url().optional().describe('Website URL'),
});

export type FontFamilyType = (typeof fontFamily)[number];

export type ResumeFormValues = z.infer<typeof resumeForm>;
