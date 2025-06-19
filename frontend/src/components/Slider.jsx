import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Hero10 from "../assets/hero10.png";
import Hero20 from "../assets/hero20.png";
import Hero30 from "../assets/hero30.png";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      heading: "Fast, secure and reliable web hosting",
      paragraph:
        "Elevate your business with cutting-edge web solutions that drive growth, enhance user experience, and deliver measurable results in today's competitive digital landscape.",
      image: Hero10,
    },
    {
      id: 2,
      heading: "Innovative Cloud Solutions",
      paragraph:
        "Scale your infrastructure with enterprise-grade cloud services designed for modern businesses. Experience unmatched reliability, security, and performance optimization.",
      image: Hero20,
    },
    {
      id: 3,
      heading: "Data-Driven Success",
      paragraph:
        "Unlock the power of analytics and artificial intelligence to make informed decisions, optimize operations, and stay ahead of market trends with our advanced platform.",
      image: Hero30,
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 👈 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#dff6fd] to-[#f7fafe] h-[60vh] min-h-[500px] overflow-hidden"
    >
      <div className="container mx-auto px-6 h-full relative">
        {/* Carousel Container */}
        <div className="relative w-full h-full flex items-center">
          <div className="w-full h-full flex items-center">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
                  index === currentSlide
                    ? "translate-x-0 opacity-100"
                    : index < currentSlide
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center">
                  {/* Left Side - Text Content */}
                  <div className="flex flex-col justify-center space-y-7 order-1 lg:order-1">
                    <h1 className="text-lg lg:text-2xl xl:text-4xl  font-bold leading-tight text-[#0a2540]">
                      {slide.heading}
                    </h1>
                    <p className="text-sm lg:text-lg leading-relaxed text-[#3b3f5c] max-w-lg">
                      {slide.paragraph}
                    </p>
                  </div>

                  {/* Right Side - Image */}
                  <div className="flex justify-center lg:justify-end items-center order-2 lg:order-2 animate-gentle-bounce ">
                    <div className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px]  ">
                      
                      <img
                        src={slide.image}
                        alt={`Slide ${slide.id}`}
                        className="max-w-3xl h-auto object-cover lg:pl-6 xl:pl-44 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          {/* Arrow Navigation */}
          <div className="flex space-x-2 ml-6 ">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 text-[#94a3b2] "
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 text-[#94a3b2] "
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlay, setIsAutoPlay] = useState(true);

//   const slides = [
//     {
//       id: 1,
//       title: "Customized Solutions",
//       subtitle: "Your business is unique, so are your needs",
//       buttonText: "More Info",
//       background: "bg-gradient-to-br from-gray-800 via-gray-700 to-teal-800",
//       decorativeElements: (
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-10 left-10 w-32 h-20 bg-gray-600 rounded-full blur-xl"></div>
//           <div className="absolute top-20 right-20 w-24 h-16 bg-teal-600 rounded-full blur-lg"></div>
//           <div className="absolute bottom-20 left-1/4 w-28 h-18 bg-gray-500 rounded-full blur-lg"></div>
//           <div className="absolute bottom-10 right-1/3 w-36 h-22 bg-teal-500 rounded-full blur-xl"></div>
//         </div>
//       )
//     },
//     {
//       id: 2,
//       title: "Experienced Team",
//       subtitle: "We know what it takes to provide the best service",
//       buttonText: "Learn More",
//       background: "bg-gradient-to-br from-gray-800 via-gray-700 to-amber-800",
//       decorativeElements: (
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-0 left-0 w-full h-full opacity-10 flex items-center justify-end pr-8">
//             <span className="text-6xl font-bold text-white">2025</span>
//           </div>
//           <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
//         </div>
//       )
//     },
//     {
//       id: 3,
//       title: "Affordable Pricing",
//       subtitle: "Your Partner for Reliable Digital Solutions",
//       buttonText: "See the Features",
//       background: "bg-gradient-to-br from-gray-800 via-gray-700 to-blue-800",
//       decorativeElements: (
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-10 left-10 w-20 h-12 border-2 border-blue-400 rounded-lg"></div>
//           <div className="absolute top-20 left-32 w-16 h-10 border-2 border-blue-300 rounded-lg"></div>
//           <div className="absolute bottom-20 right-20 w-24 h-14 border-2 border-blue-400 rounded-lg"></div>
//           <div className="absolute bottom-10 right-40 w-20 h-12 border-2 border-blue-300 rounded-lg"></div>
//           <div className="absolute top-1/2 left-1/2 w-32 h-20 border-2 border-blue-200 rounded-lg transform rotate-12 -translate-x-1/2 -translate-y-1/2"></div>
//         </div>
//       )
//     },
//     {
//       id: 4,
//       title: "Reliable Support",
//       subtitle: "24/7/365 Server Support",
//       buttonText: "Order Now",
//       background: "bg-gradient-to-br from-gray-800 via-gray-700 to-red-800",
//       decorativeElements: (
//         <div className="absolute inset-0 opacity-25">
//           <div className="absolute top-1/4 right-1/4 w-40 h-8 bg-red-500 rounded-full blur-sm transform rotate-45"></div>
//           <div className="absolute bottom-1/3 left-1/4 w-32 h-6 bg-red-400 rounded-full blur-sm transform -rotate-45"></div>
//           <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-300 rounded-full"></div>
//         </div>
//       )
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   useEffect(() => {
//     if (isAutoPlay) {
//       const interval = setInterval(nextSlide, 5000);
//       return () => clearInterval(interval);
//     }
//   }, [isAutoPlay, currentIndex]);
  
//   return (
//     <div className="relative w-full h-96 overflow-hidden rounded-xl shadow-2xl">
//       {/* Slide Container */}
//       <div
//         className="flex transition-transform duration-700 ease-in-out h-full"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`min-w-full h-full flex items-center justify-center relative ${slide.background}`}
//           >
//             {slide.decorativeElements}
//             {/* Content */}
//             <div className="text-center text-white z-10 px-8 max-w-2xl">
//               <h2 className="text-4xl md:text-5xl font-bold mb-4 text-teal-300">
//                 {slide.title}
//               </h2>
//               <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
//                 {slide.subtitle}
//               </p>
//               <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
//                 {slide.buttonText}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Dot Indicators */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
//                 ? 'bg-teal-400 scale-125'
//                 : 'bg-white/50 hover:bg-white/70'
//               }`}
//             onMouseEnter={() => setIsAutoPlay(false)}
//             onMouseLeave={() => setIsAutoPlay(true)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;