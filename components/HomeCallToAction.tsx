// components/HomeCallToAction.tsx
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

export default async function HomeCallToAction() {
 const t = await getTranslations('HomeCallToAction');

 const features = [
   t('features.instant'),
   t('features.accurate'),
   t('features.ai')
 ];

 return (
   <section className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
     <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
       <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
         {t('title')}
       </h2>
       
       <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
         {t('description')}
       </p>

       <div className="flex justify-center gap-6 mb-12">
         {features.map((feature, index) => (
           <div key={index} className="flex items-center text-gray-600">
             <FiCheckCircle className="text-purple-600 mr-2" />
             <span>{feature}</span>
           </div>
         ))}
       </div>

       <Link href="/interpret">
         <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center mx-auto">
           {t('button')}
           <FiArrowRight className="ml-2" />
         </button>
       </Link>
     </div>

     {/* Background Decorative Elements */}
     <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-50/50 to-transparent" />
     <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
   </section>
 );
}