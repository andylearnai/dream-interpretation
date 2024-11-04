// components/HowTo.tsx
import { getTranslations } from 'next-intl/server';
import { FiBookOpen, FiEdit3, FiSearch, FiRefreshCw } from 'react-icons/fi';

export default async function HowTo() {
  const t = await getTranslations('HowTo');

  const steps = [
    {
      icon: FiBookOpen,
      title: t('steps.record.title'),
      description: t('steps.record.description')
    },
    {
      icon: FiEdit3, 
      title: t('steps.details.title'),
      description: t('steps.details.description')
    },
    {
      icon: FiSearch,
      title: t('steps.analyze.title'), 
      description: t('steps.analyze.description')
    },
    {
      icon: FiRefreshCw,
      title: t('steps.reflect.title'),
      description: t('steps.reflect.description')
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Step Number */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-lg font-semibold text-purple-600">
                  Step {index + 1}
                </span>
                <div className="h-px w-12 bg-purple-200" />
              </div>
              
              {/* Icon */}
              <div className="bg-purple-100 p-4 rounded-xl mb-6">
                <step.icon size={24} className="text-purple-600" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            {t('footer')}
          </p>
        </div>
      </div>
    </section>
  );
}