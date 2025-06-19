import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ClintImg2 from "../assets/crs01.png"

const testimonials = [
  {
    rating: "4.9",
    text: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
    img: "https://pagedone.io/asset/uploads/1696229969.png",
    name: "Jane D",
    role: "CEO",
  },
  {
    rating: "4.9",
    text: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
    img: "https://pagedone.io/asset/uploads/1696229994.png",
    name: "Harsh P.",
    role: "Product Designer",
  },
  {
    rating: "4.9",
    text: "The customer service team at pagedone went above and beyond to help me resolve a billing issue.",
    img: "https://pagedone.io/asset/uploads/1696230027.png",
    name: "Alex K.",
    role: "Design Lead",
  },
  {
    rating: "4.9",
    text: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
    img: "https://pagedone.io/asset/uploads/1696229969.png",
    name: "Jane D",
    role: "CEO",
  },
  {
    rating: "4.9",
    text: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
    img: "https://pagedone.io/asset/uploads/1696229994.png",
    name: "Harsh P.",
    role: "Product Designer",
  },
];

export default function Clients() {
  return (
    <div className="h-[450px] bg-cover bg-center bg-no-repeat border  rounded-t-xl"

     style={{ backgroundImage: `url(${ClintImg2})` }}>
      <section className="py-5  -mt-0">
      <div className="mx-auto max-w-7xl px-1 sm:px-1 lg:px-2">
        <div className="mb-16 backdrop-blur-md shadow-md bg-slate-100/10 rounded-xl">
          <h2 className="  py-2 text-3xl text-center font-bold text-slate-800">
            What our happy user says
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={32}
          loop={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white content-center border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
                <div>
                  <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 18 17"
                      fill="currentColor"
                    >
                      <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" />
                    </svg>
                    <span className="text-base font-semibold text-indigo-600">
                      {t.rating}
                    </span>
                  </div>
                  <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                    {t.text}
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <img
                    className="rounded-full h-10 w-10 object-cover"
                    src={t.img}
                    alt="avatar"
                  />
                  <div>
                    <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">
                      {t.name}
                    </h5>
                    <span className="text-sm leading-4 text-gray-500">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </div>
  );
}

// import React, { useState, useEffect } from 'react';

// const testimonials = [
//   {
//     rating: "4.9",
//     text: "Great support, like I have never seen before. Thanks to the support team, they are very helpful. This company provide customers great solution, that makes them best.",
//     img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
//     name: "John Smith",
//     role: "CEO",
//     company: "Tech Solutions",
//   },
//   {
//     rating: "4.9",
//     text: "They offer a lot of value based on their skills, talent, and rate. Excellent service and professional approach to every project.",
//     img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
//     name: "Sarah Johnson",
//     role: "Product Manager",
//     company: "Innovation Labs",

//   },
//   {
//     rating: "4.8",
//     text: "SiteWork is an excellent web hosting provider that's simple to use and offers an array of useful plans for consumers and small businesses.",
//     img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
//     name: "Mike Chen",
//     role: "Technical Lead",
//     company: "Digital Corp",
//   },
//   {
//     rating: "5.0",
//     text: "Outstanding customer service and technical expertise. They helped us scale our infrastructure seamlessly with minimal downtime.",
//     img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
//     name: "Emma Wilson",
//     role: "CTO",
//     company: "StartupHub",

//   },
//   {
//     rating: "4.7",
//     text: "Professional team with deep knowledge. Their hosting solutions have been rock solid for our e-commerce platform.",
//     img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
//     name: "David Kumar",
//     role: "DevOps Engineer",
//     company: "E-Commerce Plus",
//   }
// ];

// export default function Clients() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying]);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
//             What our happy user says!
//           </h1>
//         </div>

//         {/* Main Testimonial Card */}
//         <div className="relative max-w-4xl mx-auto mb-12">
//           <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
//             <div className="flex flex-col md:flex-row items-center gap-8">
              
//               {/* Testimonial Content */}
//               <div className="flex-1 text-center md:text-left">
//                 {/* Rating */}
//                 <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className="w-6 h-6 text-amber-400 fill-current" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                   <span className="text-2xl font-bold text-gray-800 ml-2">{testimonials[currentIndex].rating}</span>
//                 </div>

//                 {/* Quote */}
//                 <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
//                   "{testimonials[currentIndex].text}"
//                 </blockquote>

//                 {/* Author Info */}
//                 <div className="flex items-center justify-center md:justify-start gap-4">
//                   <img
//                     src={testimonials[currentIndex].img}
//                     alt={testimonials[currentIndex].name}
//                     className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
//                   />
//                   <div>
//                     <h4 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
//                     <p className="text-gray-600">{testimonials[currentIndex].role}</p>
//                     <p className="text-sm text-blue-600 font-medium">{testimonials[currentIndex].company}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Navigation Controls */}
//         <div className="flex items-center gap-6 mb-8">
//           <button
//             onClick={prevSlide}
//             className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30"
//             onMouseEnter={() => setIsAutoPlaying(false)}
//             onMouseLeave={() => setIsAutoPlaying(true)}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>

//           {/* Dot Indicators */}
//           <div className="flex gap-3">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentIndex 
//                     ? 'bg-white scale-125 shadow-lg' 
//                     : 'bg-white/40 hover:bg-white/60'
//                 }`}
//                 onMouseEnter={() => setIsAutoPlaying(false)}
//                 onMouseLeave={() => setIsAutoPlaying(true)}
//               />
//             ))}
//           </div>
          
//           <button
//             onClick={nextSlide}
//             className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30"
//             onMouseEnter={() => setIsAutoPlaying(false)}
//             onMouseLeave={() => setIsAutoPlaying(true)}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }