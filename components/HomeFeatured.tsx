// components/HomeFeatured.tsx
import { getTranslations } from 'next-intl/server';
import { FiBook, FiFeather, FiClock, FiCompass } from 'react-icons/fi';

export default async function HomeFeatured() {
  const t = await getTranslations('HomeFeatured');

  const features = [
    { 
      icon: FiBook, 
      title: t('features.traditional.title'),
      description: t('features.traditional.description')
    },
    { 
      icon: FiFeather,
      title: t('features.psychological.title'),
      description: t('features.psychological.description')
    },
    { 
      icon: FiClock,
      title: t('features.instant.title'),
      description: t('features.instant.description')
    },
    { 
      icon: FiCompass,
      title: t('features.comprehensive.title'),
      description: t('features.comprehensive.description')
    }
  ];

  return (
    <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg"
            >
              {/* Icon Container */}
              <div className="bg-purple-100 p-4 rounded-xl mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <feature.icon size={28} className="text-purple-600" />
              </div>
              
              {/* Content Container */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Bottom Gradient Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-24" />
      </div>
    </section>
  );
}