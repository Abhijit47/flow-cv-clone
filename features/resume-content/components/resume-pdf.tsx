import { Document, Page, Text } from '@react-pdf/renderer';

import { useSession } from '@/lib/auth/client';
import { ResumeFormValues } from '@/lib/zodSchemas/resume-schemas';
import CustomText from './custom-text';
import CustomView from './custom-view';

export function ResumePdf({ data }: { data: ResumeFormValues }) {
  const session = useSession();

  return (
    <Document title={`${session?.data?.user?.name} - Resume`}>
      <Page dpi={72} orientation='portrait' size='A4' style={{ padding: 5 }}>
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
    </Document>
  );
}
