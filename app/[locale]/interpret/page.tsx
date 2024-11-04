import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import DreamInterpreter from '@/components/DreamInterpreter';
import HowTo from '@/components/HowTo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'InterpretPage' });
  
    return {
      title: t('title'),
      description: t('description'),
      alternates: {
        canonical: `https://dream-interpretation.ai${locale === 'en' ? '/interpret' : `/${locale}/interpret`}`,
        languages: {
          'x-default': 'https://dream-interpretation.ai/interpret',
          'zh-TW': 'https://dream-interpretation.ai/tw/interpret',
          'zh-CN': 'https://dream-interpretation.ai/zh/interpret',
        },
      },
    };
}

export default async function InterpretPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <div className="py-12">
        <DreamInterpreter locale={locale} />
      </div>
      <HowTo />
    </main>
  );
}