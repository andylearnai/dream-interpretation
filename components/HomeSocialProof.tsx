// components/HomeSocialProof.tsx
import { getTranslations } from 'next-intl/server';
import { FiStar, FiUser, FiMessageCircle, FiCheck } from 'react-icons/fi';

export default async function HomeSocialProof() {
 const t = await getTranslations('HomeSocialProof');

 const testimonials = [
   {
     id: 1,
     avatar: "💭",
     name: t('testimonials.user1.name'),
     title: t('testimonials.user1.title'),
     content: t('testimonials.user1.content'),
     rating: 5
   },
   {
     id: 2, 
     avatar: "🌙",
     name: t('testimonials.user2.name'),
     title: t('testimonials.user2.title'),
     content: t('testimonials.user2.content'),
     rating: 5
   },
   {
     id: 3,
     avatar: "✨",
     name: t('testimonials.user3.name'),
     title: t('testimonials.user3.title'),
     content: t('testimonials.user3.content'),
     rating: 5
   }
 ];

 const stats = [
   {
     icon: FiUser,
     value: t('stats.users.value'),
     label: t('stats.users.label')
   },
   {
     icon: FiMessageCircle,
     value: t('stats.dreams.value'),
     label: t('stats.dreams.label')
   },
   {
     icon: FiCheck,
     value: t('stats.accuracy.value'),
     label: t('stats.accuracy.label')
   }
 ];

 const renderStars = (rating: number) => {
   return [...Array(rating)].map((_, i) => (
     <FiStar key={i} className="text-yellow-400 fill-current" />
   ));
 };

 return (
   <section className="py-24 bg-gradient-to-b from-white to-purple-50">
     <div className="max-w-7xl mx-auto px-4">
       <div className="text-center mb-16">
         <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
           {t('title')}
         </h2>
         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
           {t('description')}
         </p>
       </div>

       {/* Stats Section */}
       <div className="grid md:grid-cols-3 gap-8 mb-20">
         {stats.map((stat, index) => (
           <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
             <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
               <stat.icon className="w-6 h-6 text-purple-600" />
             </div>
             <div className="text-3xl font-bold text-gray-900 mb-2">
               {stat.value}
             </div>
             <div className="text-gray-600">
               {stat.label}
             </div>
           </div>
         ))}
       </div>

       {/* Testimonials Section */}
       <div className="grid md:grid-cols-3 gap-8">
         {testimonials.map((testimonial) => (
           <div
             key={testimonial.id}
             className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
           >
             <div className="flex items-center mb-4">
               <div className="text-3xl mr-4">
                 {testimonial.avatar}
               </div>
               <div>
                 <div className="font-semibold text-gray-900">
                   {testimonial.name}
                 </div>
                 <div className="text-sm text-gray-600">
                   {testimonial.title}
                 </div>
               </div>
             </div>
             <div className="flex mb-4">
               {renderStars(testimonial.rating)}
             </div>
             <p className="text-gray-600 italic">
               "{testimonial.content}"
             </p>
           </div>
         ))}
       </div>

       <div className="mt-16 text-center">
         <p className="text-sm text-gray-500">
           {t('footer')}
         </p>
       </div>
     </div>
   </section>
 );
}