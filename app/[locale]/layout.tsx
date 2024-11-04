import localFont from "next/font/local";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import "../globals.css";
import { routing } from '@/i18n/routing';
import { Providers } from "./providers";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from "@next/third-parties/google";

export function generateStaticParams() {
 return routing.locales.map((locale) => ({ locale }));
}

const geistSans = localFont({
 src: "../fonts/GeistVF.woff",
 variable: "--font-geist-sans",
 weight: "100 900",
});

const geistMono = localFont({
 src: "../fonts/GeistMonoVF.woff",
 variable: "--font-geist-mono",
 weight: "100 900",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
 const { locale } = await params;
 const t = await getTranslations({ locale, namespace: 'Metadata' });

 return {
   title: t('title'),
   description: t('description'),
   alternates: {
     canonical: `https://dream-interpretation.ai${locale === 'en' ? '/' : `/${locale}`}`,
     languages: {
       'x-default': 'https://dream-interpretation.ai/',
       'zh-TW': 'https://dream-interpretation.ai/tw',
       'zh-CN': 'https://dream-interpretation.ai/zh',
     },
   },
 };
}

export default async function LocaleLayout({
 children,
 params
}: {
 children: React.ReactNode;
 params: Promise<{ locale: string }>;
}) {
 const { locale } = await params;
 setRequestLocale(locale);
 const messages = await getMessages();

 return (
   <html lang={locale} className='light'>
     <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
       <Providers>
         <NextIntlClientProvider messages={messages}>
         <Header />
           <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
             {children}
           </main>
           <Footer />
         </NextIntlClientProvider>
       </Providers>
       <Analytics />
     </body>
     <GoogleAnalytics gaId="G-9ZEX8G1DRM" />
   </html>
 );
}