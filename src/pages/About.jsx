import React from 'react';
const About = () => <div className="h-screen flex justify-center items-center bg-gray-800 text-white">About Section</div>;
export default About;




// import React, { PureComponent } from 'react';
// import { RiArrowRightLine } from "react-icons/ri";
// import { Link } from 'react-router-dom';
// import FadeInSection from '../components/FadeInSection'; // path as per your structure

// export class About extends PureComponent {
//     render() {
//         return (
//             <div className="w-full bg-gradient-to-r from-cyan-500/10 to-purple-500/5 py-16 px-4 sm:px-6 lg:px-8 text-white">
//                 <div className="max-w-4xl mx-auto space-y-10">
//                     <FadeInSection>
//                         <p className="text-4xl font-bold leading-tight text-gray-300">
//                             After reviewing over 20,000 + applications while hiring at Rocket Health, we found a big problem:
//                         </p>
//                     </FadeInSection>

//                     <FadeInSection>
//                         <p className="text-4xl font-bold leading-tight bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
//                             college equips students with theory, but fails to prepare them for real-world practice.
//                         </p>
//                     </FadeInSection>

//                     {[
//                         "This issue repeatedly came up in our interviews with thousands of psychologists, where we often had to tell candidates to gain practical experience before reapplying.",
//                         "Many young psychologists shared that it’s a chicken-and-egg problem—companies require experience, but there’s no clear path to gain it.",
//                         "Despite the surge in demand for mental health professionals, the divide between academic learning and practical application continues to grow.",
//                         "Many have the potential to become exceptional psychologists but need to refine their skills and build confidence before working with clients. Young psychologists excel in theory but need real-world experience.",
//                         "The industry needed more than just talent—it needed prepared, high-quality professionals ready to tackle the complexities of the field.",
//                     ].map((text, i) => (
//                         <FadeInSection key={i}>
//                             <p className="text-2xl md:text-3xl font-serif leading-snug text-gray-200">{text}</p>
//                         </FadeInSection>
//                     ))}

//                     <FadeInSection>
//                         <p className="text-3xl md:text-4xl font-serif font-medium bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
//                             This is why we created Rocket Academy: a training ground where young psychologists evolve into skilled, confident professionals ready to face real-world practice.
//                         </p>
//                     </FadeInSection>

//                     <FadeInSection>
//                         <div className="text-center space-y-4">
//                             <h3 className='font-semibold text-2xl'>6 WEEK ONLINE PROGRAM</h3>
//                             <h2 className='text-3xl md:text-4xl font-bold font-serif'>
//                                 Master the
//                                 <span className='bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent'> A → Z </span>
//                                 of Practical Psychology
//                             </h2>
//                             <p className='text-2xl font-medium font-serif max-w-3xl mx-auto'>
//                                 We’ll help you evolve from a young psychologist to a confident, skilled professional, equipping you with hands-on experience, real-world techniques, and the confidence to excel in therapy.
//                             </p>
//                         </div>
//                     </FadeInSection>

//                     <FadeInSection>
//                         <img src="https://cdn.prod.website-files.com/6739bc6cd746e88bae447063/676a43e5030dc4174a708d77_Group%201%20(4)-p-2000.png"
//                             alt="google-meet"
//                             className='mx-auto rounded-lg max-w-md w-full'
//                         />
//                     </FadeInSection>

//                     <FadeInSection>
//                         <div className='flex justify-center mt-10'>
//                             <Link to="/apply">
//                                 <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 font-medium">
//                                     Apply Now
//                                 </button>
//                             </Link>
//                         </div>
//                     </FadeInSection>

//                     <FadeInSection>
//                         <h3 className='text-center font-light font-serif mt-4'>COHORT STARTS ON JULY 28</h3>
//                     </FadeInSection>
//                 </div>
//             </div>
//         )
//     }
// }

// export default About;