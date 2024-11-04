// components/HomeFAQ.tsx
import { getTranslations } from 'next-intl/server';

export default async function HomeFAQ() {
  const t = await getTranslations('HomeFAQ');

  const faqs = [
    {
      key: "specific",
      title: t('items.specific.title'),
      content: t('items.specific.content')
    },
    {
      key: "basic", 
      title: t('items.basic.title'),
      content: t('items.basic.content')
    },
    {
      key: "context",
      title: t('items.context.title'),
      content: t('items.context.content')
    },
    {
      key: "death",
      title: t('items.death.title'),
      content: t('items.death.content')
    },
    {
      key: "assumptions",
      title: t('items.assumptions.title'),
      content: t('items.assumptions.content')
    },
    {
      key: "openminded",
      title: t('items.openminded.title'),
      content: t('items.openminded.content')
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details 
              key={faq.key}
              className="group bg-white rounded-2xl shadow-lg border border-gray-200"
            >
              <summary className="flex justify-between items-center cursor-pointer p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.title}
                </h3>
                <span className="ml-6 flex-shrink-0">
                  <svg
                    className="w-5 h-5 group-open:transform group-open:rotate-180 transition-transform duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  {faq.content}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            {t('footer')}
          </p>
        </div>
      </div>
    </section>
  );
}