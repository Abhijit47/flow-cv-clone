import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { templates } from '@/constants';
import { ResumeTemplateFilter } from '@/features/resume-templates';
import Image from 'next/image';
import Link from 'next/link';

export default function ResumeTemplatesPage() {
  return (
    <div className={'relative max-w-5xl mx-auto'}>
      <Tabs defaultValue='popular'>
        <div
          className={
            'fixed top-16 left-0 right-0 flex gap-4 bg-primary/30 p-4 backdrop-blur-md z-10'
          }>
          <ResumeTemplateFilter />
        </div>

        <section className={'my-24'}>
          <TabsContent value={'popular'}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h1 className={'text-3xl'}>
                    <span className={'font-bold'}>Free</span> Resume Templates
                  </h1>
                </CardTitle>
                <CardDescription>
                  Choose an ATS-ready resume template in your preferred style
                  and format. Try our{' '}
                  <Link href={'/'} className={'underline underline-offset-2'}>
                    free online resume builder
                  </Link>{' '}
                  and enjoy unlimited PDF downloads. No paywall. No watermarks.
                  No hidden fees. Yes, really 🚀
                </CardDescription>
              </CardHeader>

              <Separator />

              <CardContent className={'px-2'}>
                <div
                  className={
                    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                  }>
                  {templates
                    .filter((t) => t.tags.includes('popular'))
                    .map((template, idx) => (
                      <Card key={template.id} className={'gap-4 py-2'}>
                        <CardContent className={'px-2'}>
                          <Image
                            src={template.image}
                            alt={`temaplate-${idx + 1}`}
                            width={500}
                            height={500}
                            className={'w-full h-full rounded-lg'}
                          />
                        </CardContent>
                        <CardFooter className={'w-full'}>
                          <p
                            className={
                              'text-center text-sm font-semibold w-full'
                            }>
                            {template.name}
                          </p>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value={'simple'}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h1 className={'text-3xl'}>
                    <span className={'font-bold'}>Simple</span> Resume Templates
                  </h1>
                </CardTitle>
                <CardDescription>
                  Minimalist, classic designs project a professional, corporate,
                  executive tone. Clean styling keeps attention on your
                  achievements while sailing through ATS checks—ideal for
                  traditional industries or public-sector roles.
                </CardDescription>
              </CardHeader>
              <Separator />

              <CardContent className={'px-2'}>
                <div
                  className={
                    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                  }>
                  {templates
                    .filter((t) => t.tags.includes('simple'))
                    .map((template, idx) => (
                      <Card key={template.id} className={'gap-4 py-2'}>
                        <CardContent className={'px-2'}>
                          <Image
                            src={template.image}
                            alt={`temaplate-${idx + 1}`}
                            width={500}
                            height={500}
                            className={'w-full h-full rounded-lg'}
                          />
                        </CardContent>
                        <CardFooter className={'w-full'}>
                          <p
                            className={
                              'text-center text-sm font-semibold w-full'
                            }>
                            {template.name}
                          </p>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value={'modern'}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h1 className={'text-3xl'}>
                    <span className={'font-bold'}>Modern</span> Resume Templates
                  </h1>
                </CardTitle>
                <CardDescription>
                  Our modern, clean layouts showcase the best current design
                  practices and the most popular two-column grids recruiters
                  love. Expect bold accents, generous white-space, and instant
                  screen appeal.
                </CardDescription>
              </CardHeader>
              <Separator />

              <CardContent className={'px-2'}>
                <div
                  className={
                    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                  }>
                  {templates
                    .filter((t) => t.tags.includes('modern'))
                    .map((template, idx) => (
                      <Card key={template.id} className={'gap-4 py-2'}>
                        <CardContent className={'px-2'}>
                          <Image
                            src={template.image}
                            alt={`temaplate-${idx + 1}`}
                            width={500}
                            height={500}
                            className={'w-full h-full rounded-lg'}
                          />
                        </CardContent>
                        <CardFooter className={'w-full'}>
                          <p
                            className={
                              'text-center text-sm font-semibold w-full'
                            }>
                            {template.name}
                          </p>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value={'creative'}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h1 className={'text-3xl'}>
                    <span className={'font-bold'}>Creative</span> Resume
                    Templates
                  </h1>
                </CardTitle>
                <CardDescription>
                  Show your personality with creative, colorful templates that
                  turn your resume into a visual story without sacrificing
                  clarity. Vivid palettes, playful icons, and unique grids help
                  your achievements stand out at first glance.
                </CardDescription>
              </CardHeader>
              <Separator />

              <CardContent className={'px-2'}>
                <div
                  className={
                    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                  }>
                  {templates
                    .filter((t) => t.tags.includes('creative'))
                    .map((template, idx) => (
                      <Card key={template.id} className={'gap-4 py-2'}>
                        <CardContent className={'px-2'}>
                          <Image
                            src={template.image}
                            alt={`temaplate-${idx + 1}`}
                            width={500}
                            height={500}
                            className={'w-full h-full rounded-lg'}
                          />
                        </CardContent>
                        <CardFooter className={'w-full'}>
                          <p
                            className={
                              'text-center text-sm font-semibold w-full'
                            }>
                            {template.name}
                          </p>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </section>
      </Tabs>
    </div>
  );
}
