// components/Hero.tsx
import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/routing';
import {Button} from '@nextui-org/react';
import { FiArrowRight } from 'react-icons/fi';

export default async function Hero() {
  const t = await getTranslations('Hero');

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-20">
      {/* 修改渐变：增加了渐变的复杂度，使用多层渐变叠加制造更自然的效果 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/90 via-purple-50/50 to-white" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-50/30 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          {t('title')}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t('subtitle')}
        </p>
        
        <div className="flex justify-center">
          <Link href="/interpret">
            <Button 
              size="lg"
              radius="full"
              className="bg-gradient-to-r from-purple-600 to-blue-600 px-12 py-7 text-lg font-medium 
                         text-white shadow-xl hover:shadow-2xl
                         transform hover:scale-105 transition-all duration-300
                         hover:from-purple-500 hover:to-blue-500
                         hover:-translate-y-0.5"
              endContent={<FiArrowRight className="ml-2 w-5 h-5" />}
            >
              {t('button')}
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
          {['instant', 'accurate', 'comprehensive', 'global'].map((item) => (
            <div key={item} className="relative">
              {/* 为每个特性块添加微妙的背景效果 */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-50/20 to-transparent rounded-lg" />
              <div className="relative">
                <div className="text-3xl font-bold text-purple-600">
                  {t(`features.${item}.value`)}
                </div>
                <div className="text-gray-600">
                  {t(`features.${item}.label`)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 调整底部分割线的渐变效果 */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="h-12 bg-gradient-to-b from-transparent to-white" />
      </div>
    </section>
  );
}