import React from "react";
import { Target, Eye } from 'lucide-react';
import V1 from "../assets/vision1.png";
import M2 from "../assets/mission2.png";

const Aim = () => {
  return (
    <section className=" m-auto max-w-[1200px] flex justify-center items-center py-0 px-6 relative xl:mr-0 lg:mr-5 mr-0 border border-slate-300 bg-white rounded-2xl mt-5 bg-gradient-to-b from-sky-100 shadow-md ">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">

          {/* Right Image */}
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[500px] w-full sm:h-[280px] h-full  relative">
              <img
                className="sm:mt-5 sm:ml- w-full h-full rounded-3xl object-cover"
                src={V1}
                alt="about Us"
              />
            </div>
          </div>

          {/* Left Content */}
          <div className={`group transition-all duration-700 delay-500 transform `}>
            <div className="bg-white rounded-2xl p-8 shadow-lg mt-4 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <Eye className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                is to ensure uninterrupted, authentic and secure digital operations for businesses worldwide. We endeavor to set new standards in service excellence through innovative technology and steady support. Empowering success we do.
              </p>
              <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>

        </div>

        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          {/* Left Content */}
          <div className={`group transition-all duration-700 delay-700 transform `}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                While working with us we make sure your business has everything it needs to succeed online.
                We take the time to understand your needs then deliver solutions that fit your goals, all backed by reliable, expert support.
              </p>
              <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[500px] w-full sm:h-[380px] h-full  relative">
              <img
                className="sm:mt-5 sm:ml- w-full h-full rounded-3xl object-cover"
                src={M2}
                alt="about Us"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aim;

// import React, { useState, useEffect } from 'react';
// import { Target, Eye } from 'lucide-react';

// const Aim = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Images and Content Section */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-16">
//           {/* Left Image */}
//           <div className={`relative group transition-all duration-700 transform `}>
//             <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-3xl">
//               <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               <img
//                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                 alt="Team collaboration in modern office"
//                 className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
//               />
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className={`relative group transition-all duration-700 delay-300 transform `}>
//             <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-3xl">
//               <div className="absolute inset-0 bg-gradient-to-bl from-blue-400/20 to-purple-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               <img
//                 src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                 alt="Professional team meeting"
//                 className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Mission and Vision Cards */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Mission Card */}
//           <div className={`group transition-all duration-700 delay-500 transform `}>
//             <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
//                   <Eye className="w-8 h-8 text-white" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
//                 Our Vision
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 is to ensure uninterrupted, authentic and secure digital operations for businesses worldwide. We endeavor to set new standards in service excellence through innovative technology and steady support. Empowering success we do.
//               </p>
//               <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
//             </div>
//           </div>

//           {/* Vision Card */}
//           <div className={`group transition-all duration-700 delay-700 transform `}>
//             <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
//                   <Target className="w-8 h-8 text-white" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
//                 Our Mission
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 While working with us we make sure your business has everything it needs to succeed online.
//                 We take the time to understand your needs then deliver solutions that fit your goals, all backed by reliable, expert support.
//               </p>
//               <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Aim;