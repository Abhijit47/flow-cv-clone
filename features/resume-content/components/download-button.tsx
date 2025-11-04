import { PDFDownloadLink } from '@react-pdf/renderer';
import { CloudDownloadIcon } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import { buttonVariants } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { ResumeFormValues } from '@/lib/zodSchemas/resume-schemas';
import { ResumePdf } from './resume-pdf';

export default function DownloadButton() {
  'use no memo';
  const form = useFormContext<ResumeFormValues>();
  const data = form.watch();

  return (
    <PDFDownloadLink
      document={<ResumePdf data={data} />}
      fileName='resume.pdf'
      className={buttonVariants({
        variant: 'secondary',
      })}>
      {({ loading }) =>
        loading ? (
          <span className={'inline-flex items-center gap-2'}>
            Loading…
            <Spinner />
          </span>
        ) : (
          <span className={'inline-flex items-center gap-2'}>
            Download <CloudDownloadIcon />
          </span>
        )
      }
    </PDFDownloadLink>
  );
}
