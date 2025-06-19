import React from "react";
import AIMG3 from "../assets/About3.jpg";

export default function AboutUs() {
  return (
    <section className="max-w-[1200px] flex justify-center items-center m-auto py-12 px-2 relative xl:mr-0 lg:mr-5 mr-0 border border-slate-300 bg-white rounded-2xl mt-16">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-start xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          {/* Left Content */}
          <div className="w-full flex-col justify-start lg:items-start items-center gap-8 inline-flex">
            <div className="w-full flex-col justify-start items-start gap-6 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="text-slate-950 text-3xl font-bold leading-tight">
                  About DC Keepers
                </h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h2 className="text-indigo-700 text-xl font-bold font-manrope leading-normal lg:text-start text-center">
                    The Tale of Our Achievement Story
                  </h2>
                  <p className="text-gray-600 text-base font-normal leading-relaxed lg:text-start text-center">
                    At DC Keepers, we are committed to help your business boom
                    in the digital world. If you are just starting, looking to
                    grow or need a reliable partner for your existing online
                    operations, we have the solutions that will help you to
                    succeed. We focus on providing secured & reliable services
                    to fit your unique business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:justify-end justify-center items-start flex">
            <div className="sm:w-[480px] w-full sm:h-[360px] xl:h-[400px] bg-gray-50 rounded-2xl border border-gray-300 relative overflow-hidden shadow-sm">
              <img
                className="w-full h-full rounded-2xl object-cover"
                src={AIMG3}
                alt="DC Keepers team collaboration"
              />
            </div>
          </div>
        </div>

        {/* Stats Cards - Below the main content */}
        <div className="w-full mt-12">
          <div className="w-full justify-start items-center gap-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <div className="w-full h-full p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 ease-in-out flex-col justify-start items-start gap-3 inline-flex bg-white">
              <h4 className="text-indigo-700 text-3xl font-bold font-manrope leading-9">
                10+
              </h4>
              <h5 className="text-gray-900 text-lg font-semibold">Years</h5>
              <p className="text-gray-500 text-sm font-normal leading-relaxed">
                Influencing Digital Landscapes Together
              </p>
            </div>

            <div className="w-full h-full p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 ease-in-out flex-col justify-start items-start gap-3 inline-flex bg-white">
              <h4 className="text-indigo-700 text-3xl font-bold font-manrope leading-9">
                2745+
              </h4>
              <h5 className="text-gray-900 text-lg font-semibold">
                Deployed Servers
              </h5>
              <p className="text-gray-500 text-sm font-normal leading-relaxed">
                Excellence Achieved Through Success
              </p>
            </div>

            <div className="w-full h-full p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 ease-in-out flex-col justify-start items-start gap-3 inline-flex bg-white">
              <h4 className="text-indigo-700 text-3xl font-bold font-manrope leading-9">
                12+
              </h4>
              <h5 className="text-gray-900 text-lg font-semibold">Awards</h5>
              <p className="text-gray-500 text-sm font-normal leading-relaxed">
                Our Dedication to Innovation Wins Understanding
              </p>
            </div>

            <div className="w-full h-full p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 ease-in-out flex-col justify-start items-start gap-3 inline-flex bg-white">
              <h4 className="text-indigo-700 text-3xl font-bold font-manrope leading-9">
                99%
              </h4>
              <h5 className="text-gray-900 text-lg font-semibold">
                Happy Clients
              </h5>
              <p className="text-gray-500 text-sm font-normal leading-relaxed">
                Mirrors our Focus on Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// import React, { useState, useEffect } from "react";
// import { Server, Users, Clock, Smile } from "lucide-react";

// export default function AboutUs() {
//   const [statValues, setStatValues] = useState([ 0 , 0 , 0 , 0 ]);
//   const [hoveredCard, setHoveredCard] = useState(-1);
 

//   const stats = [
//     { icon: Server, value: 260, label: "Deployed Servers", color: "purple" },
//     { icon: Users, value: 975, label: "Active Clients", color: "emerald" },
//     { icon: Clock, value: 99.99, label: "Server Uptime", color: "orange" },
//     { icon: Smile, value: 1616, label: "Happy Resellers", color: "blue" },
//   ];

//   const colorClasses = {
//     purple: 'from-purple-500 to-purple-600',
//     emerald: 'from-emerald-500 to-emerald-600',
//     orange: 'from-orange-500 to-orange-600',
//     blue: 'from-blue-500 to-blue-600',
//   };

//   useEffect(() => {
//     const timers = [];
//     const intervals = [];

//     stats.forEach((stat, index) => {
//       const timer = setTimeout(() => {
//         const interval = setInterval(() => {
//           setStatValues(prev => {
//             const newValues = [...prev];
//             if (newValues[index] >= stat.value) {
//               clearInterval(interval);
//               newValues[index] = stat.value;
//             } else {
//               const increment = Math.max(1, Math.ceil(stat.value / 50));
//               newValues[index] = Math.min(stat.value, newValues[index] + increment);
//             }
//             return newValues;
//           });
//         }, 30);
//         intervals.push(interval);
//       }, index * 200);
//       timers.push(timer);
//     });

//     return () => {
//       timers.forEach(clearTimeout);
//       intervals.forEach(clearInterval);
//     };
//   }, []);

//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 relative overflow-hidden">
//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="text-center mb-12">
//           <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-4 transform transition-all duration-1000  'translate-y-0 opacity-100 translate-y-8 opacity-0'} hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600`}>
//             A few lovely stats
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => {
//             const Icon = stat.icon;
//             const isHovered = hoveredCard === index;
//             return (
//               <div
//                 key={index}
//                 className={`transform transition-all duration-700  bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 cursor-pointer group relative overflow-hidden border border-gray-100 hover:border-transparent`}
//                 style={{ transitionDelay: `${400 + index * 150}ms` }}
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(-1)}
//               >
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
//                   <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[stat.color]}`}></div>
//                   <div className="absolute -top-10 -right-10 w-20 h-20 bg-white bg-opacity-30 rounded-full animate-pulse"></div>
//                   <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-white bg-opacity-20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
//                 </div>

//                 <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[stat.color]} rounded-lg flex items-center justify-center mb-6 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110 shadow-lg group-hover:shadow-xl relative z-10`}>
//                   <Icon className={`w-8 h-8 text-white transition-all duration-300 ${isHovered ? 'animate-bounce' : ''}`} />
//                 </div>

//                 <div className="text-4xl font-bold text-gray-800 mb-2 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 relative z-10">
//                   <span className="inline-block transition-transform duration-300 group-hover:scale-110 font-mono">
//                     {statValues[index].toLocaleString()}
//                     {stat.label === "Server Uptime" && "%"}
//                   </span>
//                 </div>

//                 <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300 relative z-10 text-sm uppercase tracking-wide">
//                   {stat.label}
//                 </div>

//                 <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${colorClasses[stat.color]} blur-xl -z-10`}></div>

//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
