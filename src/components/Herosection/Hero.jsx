import React from "react";
import { Bio } from "../../data/constants";

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 max-w-7xl mx-auto">
      
      {/* Content */}
      <div className="text-center md:text-left max-w-lg space-y-6">
        <h1 className="text-5xl font-extrabold text-white leading-tight">
          Hi, I'm Abhishek Mandavi
        </h1>


        <p className="text-lg text-gray-300">
          I'm a full-stack developer with hands on experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a 
          href={Bio.resume}
          target="_blank" 
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg py-3 px-6 rounded-lg transition duration-300"
        >
          Check Resume
        </a>
      </div>

      {/* Hero Image */}
      <img
        src="/assets/hero/codingImage.jpg"
        alt="Hero image of me"
        className="w-full max-w-md mt-10 md:mt-0 md:max-w-lg rounded-lg shadow-lg"
      />

      {/* Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 opacity-30 blur-3xl rounded-full"></div>

    </section>
    
  );
};

export default Hero;


// import React from 'react'
// import { Bio } from '../../data/constants'

// const Hero = () => {
//   return (
//     <section className="relative flex items-center justify-between mt-12 z-10 mx-10">
//       <div className="flex flex-col items-start text-white z-10">
//        <h1 className="text-72px font-black mb-8 font-roboto">
//         Hi, I'm Abhishek Mandavi
//        </h1>
//        <p className="text-30px font-roboto mb-12">
//         I'm a full-stack developer with 5 years of experience using React and
//         NodeJS. Reach out if you'd like to learn more!
//        </p>
//        <a
//         href={Bio.resume} 
//         target="_blank" 
//         className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
//        >
//          Check Resume
//        </a>
//       </div>
//       <img src=''/>
//     </section>
//   )
// }

// export default Hero
