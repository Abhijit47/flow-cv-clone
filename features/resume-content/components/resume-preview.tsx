'use client';

import { Page, Text } from '@react-pdf/renderer';
import { useFormContext } from 'react-hook-form';

import { Card } from '@/components/ui/card';
import { ResumeFormValues } from '@/lib/zodSchemas/resume-schemas';

import { Separator } from '@/components/ui/separator';
import { useSession } from '@/lib/auth/client';
import { LazyDownloadButton } from '.';
import CustomDocument from './custom-document';
import CustomText from './custom-text';
import CustomView from './custom-view';
import { SuppressResumePDFErrorMessage } from './suppress-resume-pdf-error-message';

// Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'column',
//     backgroundColor: '#FFFFFF',
//     width: '100%',
//     height: '100%',
//     padding: 0,
//     margin: 0,
//   },
//   // section: {
//   //   margin: 0,
//   //   padding: 0,
//   //   flexGrow: 1,
//   //   width: '100%',
//   //   height: '100%',
//   // },
//   view: {
//     margin: 0,
//     padding: 10,
//     backgroundColor: '#FFFFFF',
//   },
// });

export default function ResumePreview() {
  'use no memo';
  const user = useSession();
  const form = useFormContext<ResumeFormValues>();

  const data = form.watch();

  return (
    <Card className={'py-2 px-0 h-full overflow-y-auto'}>
      <CustomDocument
        style={{ height: '100%', paddingLeft: 10, paddingRight: 10 }}
        title='My Resume'
        author={user?.data?.user?.name}
        creator='FlowCV'
        pageLayout='singlePage'
        pageMode='fullScreen'
        creationDate={new Date()}
        modificationDate={new Date()}>
        <Page dpi={72} orientation='portrait' size='A4'>
          <CustomView className={'flex flex-col'}>
            <CustomText className={'text-2xl font-bold mb-2'}>
              Name: {data.firstName} {data.lastName}
            </CustomText>
            <Text>Email: {data.email}</Text>
            <Text>Objective: {data.objective}</Text>
            <Text>Address: {data.address}</Text>
            <Text>Location: {data.location}</Text>
            <Text>Phone: {data.phone}</Text>
            <Text>Website: {data.website}</Text>
          </CustomView>
        </Page>
      </CustomDocument>
      <SuppressResumePDFErrorMessage />
      <Separator />
      <LazyDownloadButton />
    </Card>
  );
}
