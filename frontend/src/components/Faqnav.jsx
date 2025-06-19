import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function Faqnav() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: "Home", targetId: "home" },
    { name: "Offers", targetId: "offers" },
    { name: "Why DC keepers?", targetId: "whyDCkeepers" },
    { name: "FAQ", targetId: "faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="sticky top-11 z-50 bg-white/20 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-1 sm:px-1 lg:px-1 py-1">
        <div className="bg-gray-200/80 backdrop-blur-sm rounded-full py-1 px-1 flex items-center max-w-fit mx-auto shadow-sm">
          {/* Dynamic Arrow Icon */}
          <div className="flex-shrink-0 mr-2">
            {isScrollingDown ? (
              <ChevronDown className="w-5 h-5 text-gray-700 transition-transform duration-300" />
            ) : (
              <ChevronUp className="w-5 h-5 text-gray-700 transition-transform duration-300" />
            )}
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-3 overflow-x-auto scrollbar-hide">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.targetId)}
                className="text-gray-800 font-medium text-sm hover:text-gray-600 transition-all duration-200 px-4 py-1 rounded-full hover:bg-white/30 whitespace-nowrap"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}