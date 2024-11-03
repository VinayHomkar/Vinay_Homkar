// import { clientReviews } from '../constants/index.js';

// const Clients = () => {
//   return (
//     <section className="my-20 c-space">
//       <h3 className="head-text">Hear from My Clients</h3>

//       <div className="client-container">
//         {clientReviews.map((item) => (
//           <div key={`review-${item.id}`} className="client-review">
//             <div>
//               <p className="font-light text-white-800">{item.review}</p>

//               <div className="client-content">
//                 <div className="flex gap-3">
//                   <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
//                   <div className="flex flex-col">
//                     <p className="font-semibold text-white-800">{item.name}</p>
//                     <p className="text-sm font-light text-white-500 md:text-base">{item.position}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center self-end gap-2">
//                   {Array.from({ length: 5 }).map((_, index) => (
//                     <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Clients;

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-full w-full sm:w-[320px]">
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="animatedText text-white-600 tracking-wider text-[18px]">{testimonial}</p>

      <div className="flex items-center justify-between gap-1 mt-7">
        <div className="flex flex-col flex-1">
          <p className="animatedText text-white-600">
            <span className="animatedText text-white-600">@</span> {name}
          </p>
          <p className="mt-1 animatedText text-white-600">
            {designation} of {company}
          </p>
        </div>

        <img src={image} alt={`feedback_by-${name}`} className="object-cover w-10 h-10 rounded-full" />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <section className="my-20 c-space">
      <p className="head-text">Testimonials.</p>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}></motion.div>
      </div>

      {/* Responsive container for cards */}
      <div className="flex flex-wrap justify-center px-4 -mt-20 pb-14 gap-7 sm:justify-start">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Feedbacks;
