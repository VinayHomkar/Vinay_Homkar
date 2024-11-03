// import { Suspense, useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';

// import Developer from '../components/Developer.jsx';
// import CanvasLoader from '../components/Loading.jsx';
// import { workExperiences } from '../constants/index.js';

// const WorkExperience = () => {
//   const [animationName, setAnimationName] = useState('idle');

//   return (
//     <section className="my-20 c-space" id="work">
//       <div className="w-full text-white-600">
//         <p className="head-text">My Work Experience</p>

//         <div className="work-container">
//           <div className="work-canvas">
//             <Canvas>
//               <ambientLight intensity={7} />
//               <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//               <directionalLight position={[10, 10, 10]} intensity={1} />
//               <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

//               <Suspense fallback={<CanvasLoader />}>
//                 <Developer position-y={-3} scale={3} animationName={animationName} />
//               </Suspense>
//             </Canvas>
//           </div>

//           <div className="work-content">
//             <div className="sm:py-10 py-5 sm:px-5 px-2.5">
//               {workExperiences.map((item, index) => (
//                 <div
//                   key={index}
//                   onClick={() => setAnimationName(item.animation.toLowerCase())}
//                   onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
//                   onPointerOut={() => setAnimationName('idle')}
//                   className="work-content_container group">
//                   <div className="flex flex-col items-center justify-start h-full py-2">
//                     <div className="work-content_logo">
//                       <img className="w-full h-full" src={item.icon} alt="" />
//                     </div>

//                     <div className="work-content_bar" />
//                   </div>

//                   <div className="sm:p-5 px-2.5 py-5">
//                     <p className="font-bold text-white-800">{item.name}</p>
//                     <p className="mb-5 text-sm">
//                       {item.pos} -- <span>{item.duration}</span>
//                     </p>
//                     <p className="transition-all duration-500 ease-in-out group-hover:text-white">{item.title}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkExperience;

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';

import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#0E0E10',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
        </div>
      }>
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-white text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 ml-5 space-y-2 list-disc">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="animatedText text-white-600 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section className="my-20 c-space">
      <motion.div variants={textVariant()}>
        <p className="head-text">Work Experience.</p>
      </motion.div>

      <div className="flex flex-col mt-20">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
