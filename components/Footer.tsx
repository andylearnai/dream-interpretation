// components/Footer.tsx
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { FiMail, FiGlobe } from 'react-icons/fi';

export default async function Footer() {
 const t = await getTranslations('Footer');

 return (
   <footer className="bg-white border-t border-gray-100">
     <div className="max-w-7xl mx-auto px-4 py-12">
       <div className="grid md:grid-cols-2 gap-8 items-center">
         {/* Company Info */}
         <div>
           <div className="text-gray-600 space-y-2">
             <p>
               © {new Date().getFullYear()} Dream Interpretation AI. {t('rights')}
             </p>
             <a 
               href="mailto:luyaohwang@gmail.com" 
               className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
             >
               <FiMail className="mr-2" />
               luyaohwang@gmail.com
             </a>
           </div>
         </div>

         {/* Language Switcher */}
         <div className="flex justify-end items-center space-x-4">
           <FiGlobe className="text-gray-400" />
           <div className="flex gap-4">
             <Link
               href="/"
               locale="en"
               className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
             >
               English
             </Link>
             <Link
               href="/"
               locale="zh"
               className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
             >
               简体中文
             </Link>
             <Link
               href="/"
               locale="tw"
               className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
             >
               繁體中文
             </Link>
           </div>
         </div>
       </div>
     </div>
   </footer>
 );
}