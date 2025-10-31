import { Spinner } from '@/components/ui/spinner';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { resumeCategories } from '@/constants';
import {
  IconBoxModel,
  IconBriefcase,
  IconHeart,
  IconShape,
} from '@tabler/icons-react';
import { parseAsStringEnum, useQueryStates } from 'nuqs';
import { useTransition } from 'react';

export default function ResumeTemplateFilter() {
  const [isPending, startTransition] = useTransition();
  const [values, setValues] = useQueryStates(
    {
      category: parseAsStringEnum(resumeCategories).withDefault('popular'),
    },
    {
      history: 'push',
      clearOnDefault: true,
      startTransition: startTransition,
      // limitUrlUpdates: {
      //   method: 'debounce',
      //   timeMs: 1300,
      // },
    }
  );

  return (
    <div className={'max-w-5xl mx-auto w-full flex gap-4'}>
      <TabsList>
        {resumeCategories.map((category) => (
          <TabsTrigger
            disabled={isPending}
            key={category}
            value={category}
            onClick={() => setValues({ ...values, category: category })}
            className={'capitalize'}>
            {isPending ? (
              <span className={'inline-flex items-center gap-2'}>
                {category} <Spinner className={'size-3'} />
              </span>
            ) : (
              <span className={'inline-flex items-center gap-2'}>
                {category} {category === 'popular' && <IconHeart />}{' '}
                {category === 'simple' && <IconBriefcase />}{' '}
                {category === 'modern' && <IconBoxModel />}{' '}
                {category === 'creative' && <IconShape />}
              </span>
            )}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
}
