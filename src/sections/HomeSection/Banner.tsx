// import React from 'react';
// import { ChevronRight } from 'lucide-react';

// function Banner() {
//   return (
//    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
//             Your Gateway to
//             <span className=" text-[#1F497D] block">Career Success</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Connecting talented individuals with top companies through comprehensive training programs, 
//             campus recruitment drives, and personalized career placement services.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button 
//               className=" bg-[#1F497D] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
//             >
//               <span>Get a Quote</span>
//               <ChevronRight className="h-5 w-5" />
//             </button>
//             <button 
//               className="border-2 border-blue-600  text-[#1F497D] px-8 py-4 rounded-full text-lg font-semibold hover: text-[#1F497D] hover:text-white transition-all duration-200"
//             >
//               Learn More
//             </button>
//           </div>
//         </div>
//       </section>
//   )
// }

// export default Banner


import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-[#1F497D] text-white pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Building Careers & Connecting <span className="text-yellow-300">Talent</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            INFOLINK helps job seekers find opportunities and connects companies
            with the right talent through training programs and mega job fairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/join-job-fair"
              className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-500 transition"
            >
              Join Job Fair
            </a>
            <a
              href="/training"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-50 transition"
            >
              Explore Training
            </a>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center z-10">
          <img
            src="https://images.unsplash.com/photo-1581091012184-5c2f3e3f1c3d?auto=format&fit=crop&w=1000&q=80"
            alt="Job Fair Banner"
            className="rounded-2xl shadow-2xl max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
