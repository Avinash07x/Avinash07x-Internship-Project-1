import React from "react";
import WhyImage from "../assets/2.png";
import WhyImage2 from "../assets/whyus2.jpg"

export default function Whyus() {
  return (
    <section id="whyDCkeepers" className=" m-auto max-w-[1200px] flex justify-center items-center py-10 px-1 relative xl:mr-0 lg:mr-5 mr-0 border border-slate-300 bg-white rounded-2xl mt-14 bg-gradient-to-t from-sky-200 shadow-md">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          {/* Right Image */}
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[500px] w-full sm:h-[440px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <img
                className="sm:mt-5 sm:ml- w-full h-full rounded-3xl object-cover"
                src={WhyImage2}
                alt="about Us"
              />
            </div>
          </div>

          {/* Left Content */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="text-slate-950 text-2xl font-bold leading-relaxed">
                  Why Choose DC Keepers ?
                </h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <ol className="list-disc list-inside text-sm font-semibold text-gray-700 space-y-2">
                    <li>Experienced Team - We know what it takes to provide the best service, and we are here to help you in every step.</li>
                    <li>Customized Solutions - Your business is unique, so are your needs. We offer solutions designed to fit your requirements.</li>
                    <li>Affordable Pricing - We believe in offering pocket friendly & excellent services with No hidden fees.</li>
                    <li>Innovative Technology - We always try to evolve and bring you the latest technology to keep your business ahead of your competitors.</li>
                    <li>Reliable Support - Our support team is always ready to assist you and solve your issues.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// import React from 'react';
// import { CheckCircle, Users, DollarSign, Zap, Headphones } from 'lucide-react';

// const Whyus = () => {
//   const benefits = [
//     {
//       icon: <Users className="w-6 h-6 text-emerald-600" />,
//       title: "Experienced Team",
//       description: "We know what it takes to provide the best service, and we are here to help you in every step."
//     },
//     {
//       icon: <CheckCircle className="w-6 h-6 text-emerald-600" />,
//       title: "Customized Solutions",
//       description: "Your business is unique, so are your needs. We offer solutions designed to fit your requirements."
//     },
//     {
//       icon: <DollarSign className="w-6 h-6 text-emerald-600" />,
//       title: "Affordable Pricing",
//       description: "We believe in offering pocket-friendly & excellent services with No hidden fees."
//     },
//     {
//       icon: <Zap className="w-6 h-6 text-emerald-600" />,
//       title: "Innovative Technology",
//       description: "We always try to evolve and bring you the latest technology to keep your business ahead of your competitors."
//     },
//     {
//       icon: <Headphones className="w-6 h-6 text-emerald-600" />,
//       title: "Reliable Support",
//       description: "Our support team is always ready to assist you and solve your issues."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left side - Animated Professional Team */}
//           <div className="relative">
//             <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl h-96 flex items-center justify-center shadow-2xl overflow-hidden relative">
//               {/* Animated Background Elements */}
//               <div className="absolute inset-0">
//                 <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
//                 <div className="absolute top-12 right-8 w-4 h-4 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
//                 <div className="absolute bottom-8 left-8 w-6 h-6 bg-white/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
//                 <div className="absolute bottom-4 right-4 w-3 h-3 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
//               </div>
//               {/* Professional Team Illustration */}
//               <div className="relative z-10 text-center">
//                 {/* Team Members */}
//                 <div className="flex justify-center items-end space-x-2 mb-6">
//                   {/* Person 1 */}
//                   <div className="flex flex-col items-center animate-bounce" style={{animationDelay: '0s', animationDuration: '2s'}}>
//                     <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center mb-2 shadow-lg">
//                       <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
//                         <div className="w-3 h-3 bg-white rounded-full"></div>
//                       </div>
//                     </div>
//                     <div className="w-8 h-12 bg-white/80 rounded-t-lg"></div>
//                   </div>
//                   {/* Person 2 - Taller */}
//                   <div className="flex flex-col items-center animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2s'}}>
//                     <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center mb-2 shadow-lg">
//                       <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center">
//                         <div className="w-4 h-4 bg-white rounded-full"></div>
//                       </div>
//                     </div>
//                     <div className="w-10 h-16 bg-white/80 rounded-t-lg"></div>
//                   </div>
//                   {/* Person 3 */}
//                   <div className="flex flex-col items-center animate-bounce" style={{animationDelay: '1s', animationDuration: '2s'}}>
//                     <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center mb-2 shadow-lg">
//                       <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
//                         <div className="w-3 h-3 bg-white rounded-full"></div>
//                       </div>
//                     </div>
//                     <div className="w-8 h-12 bg-white/80 rounded-t-lg"></div>
//                   </div>
//                 </div>
//                 {/* Connecting Lines */}
//                 <div className="relative">
//                   <svg className="w-32 h-8 mx-auto animate-pulse" viewBox="0 0 120 30">
//                     <path d="M10 15 Q60 5 110 15" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
//                     <path d="M10 15 Q60 25 110 15" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
//                   </svg>
//                 </div>
//               </div>
//               {/* Floating Icons */}
//               <div className="absolute top-8 right-8 animate-spin" style={{animationDuration: '10s'}}>
//                 <Zap className="w-6 h-6 text-white/40" />
//               </div>
//               <div className="absolute bottom-8 left-8 animate-pulse">
//                 <CheckCircle className="w-5 h-5 text-white/50" />
//               </div>
//             </div>
//             {/* Enhanced Decorative elements */}
//             <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-400 rounded-full opacity-30 animate-pulse"></div>
//             <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-600 rounded-full opacity-40 animate-bounce"></div>
//             <div className="absolute top-1/2 -left-2 w-8 h-8 bg-emerald-300 rounded-full opacity-25 animate-ping"></div>
//           </div>
//           {/* Right side - Content */}
//           <div className="space-y-8">
//             <div>
//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 Why Choose{' '}
//                 <span className="text-emerald-600">DC Keepers</span>
//                 <span className="text-emerald-500">?</span>
//               </h2>
//             </div>
//             <div className="space-y-6">
//               {benefits.map((benefit, index) => (
//                 <div
//                   key={index}
//                   className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 hover:transform hover:scale-105"
//                 >
//                   <div className="flex-shrink-0 mt-1">
//                     <div className="p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors duration-300 group-hover:shadow-md">
//                       {benefit.icon}
//                     </div>
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
//                       {benefit.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       {benefit.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Whyus;