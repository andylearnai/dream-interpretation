import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import Hero from '@/components/Hero';
import HomeFeatured from '@/components/HomeFeatured';
import HomeFAQ from '@/components/HomeFAQ';
import HomeSocialProof from '@/components/HomeSocialProof';
import HomeCallToAction from '@/components/HomeCallToAction';


export default async function HomePage({
 params
}: {
 params: Promise<{ locale: string }>
}) {
 const { locale } = await params;
 setRequestLocale(locale);
 
 return (
   <main className="min-h-screen">
     <Hero />
     <HomeFeatured />
     <HomeFAQ />
     <HomeSocialProof />
     <HomeCallToAction />

     

   </main>
 );
}

export function generateStaticParams() {
 return routing.locales.map((locale) => ({locale}));
}