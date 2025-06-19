import React from 'react';

const Herogoogle = () => {
  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      {/* Google Workspace Title */}
      <div className="mb-12">
        <h1 className="text-5xl font-light text-gray-700 mb-2">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
          <span className="text-gray-600 ml-2">Workspace</span>
        </h1>
      </div>

      {/* Main Illustration Container */}
      <div className="relative w-full max-w-6xl h-96">
        {/* Background Circles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-8 w-16 h-16 bg-blue-300 rounded-full"></div>
          <div className="absolute top-12 right-12 w-12 h-12 bg-green-300 rounded-full"></div>
          <div className="absolute bottom-8 left-16 w-20 h-20 bg-yellow-300 rounded-full"></div>
          <div className="absolute bottom-16 right-8 w-14 h-14 bg-red-300 rounded-full"></div>
        </div>

        {/* Left Platform */}
        <div className="absolute left-0 top-16 transform -skew-x-12">
          <div className="w-80 h-48 bg-white rounded-lg shadow-lg border-4 border-gray-200 relative">
            {/* Platform top */}
            <div className="absolute -top-4 left-2 w-80 h-48 bg-gray-100 rounded-lg transform skew-x-12"></div>
            
            {/* Computer screen */}
            <div className="absolute top-4 left-8 w-24 h-16 bg-blue-500 rounded transform skew-x-12">
              <div className="w-full h-2 bg-blue-400 rounded-t"></div>
            </div>
            
            {/* Person at computer */}
            <div className="absolute top-2 left-6 w-6 h-6 bg-orange-400 rounded-full transform skew-x-12"></div>
            <div className="absolute top-6 left-7 w-4 h-8 bg-red-500 rounded transform skew-x-12"></div>
            
            {/* Document/interface elements */}
            <div className="absolute top-8 left-36 w-16 h-12 bg-gray-200 rounded transform skew-x-12"></div>
            <div className="absolute top-12 left-40 w-12 h-2 bg-blue-400 rounded transform skew-x-12"></div>
            
            {/* Location pin */}
            <div className="absolute bottom-8 left-12 w-4 h-6 bg-red-500 rounded-t-full transform skew-x-12"></div>
          </div>
        </div>

        {/* Connecting Bridge */}
        <div className="absolute left-72 top-32 w-96 h-8 bg-blue-500 rounded-full transform -rotate-12 shadow-lg">
          <div className="w-full h-2 bg-blue-400 rounded-full"></div>
        </div>

        {/* Right Platform */}
        <div className="absolute right-0 top-8 transform skew-x-12">
          <div className="w-96 h-56 bg-white rounded-lg shadow-lg border-4 border-gray-200 relative">
            {/* Platform top */}
            <div className="absolute -top-4 right-2 w-96 h-56 bg-gray-100 rounded-lg transform -skew-x-12"></div>
            
            {/* Collaboration area with people */}
            <div className="absolute top-6 left-8 w-20 h-20 bg-green-500 rounded-full transform -skew-x-12"></div>
            <div className="absolute top-4 left-6 w-6 h-6 bg-yellow-400 rounded-full transform -skew-x-12"></div>
            <div className="absolute top-12 left-10 w-4 h-8 bg-green-600 rounded transform -skew-x-12"></div>
            
            {/* More people */}
            <div className="absolute top-8 left-32 w-6 h-6 bg-pink-400 rounded-full transform -skew-x-12"></div>
            <div className="absolute top-12 left-34 w-4 h-8 bg-red-500 rounded transform -skew-x-12"></div>
            
            <div className="absolute top-16 left-48 w-6 h-6 bg-blue-400 rounded-full transform -skew-x-12"></div>
            <div className="absolute top-20 left-50 w-4 h-8 bg-blue-600 rounded transform -skew-x-12"></div>
            
            {/* Workspace elements */}
            <div className="absolute top-4 right-8 w-16 h-12 bg-orange-400 rounded transform -skew-x-12"></div>
            <div className="absolute top-20 right-12 w-12 h-8 bg-purple-400 rounded transform -skew-x-12"></div>
            
            {/* Seating area */}
            <div className="absolute bottom-8 left-16 w-24 h-8 bg-blue-500 rounded transform -skew-x-12"></div>
            <div className="absolute bottom-12 left-18 w-20 h-4 bg-blue-400 rounded transform -skew-x-12"></div>
            
            {/* Additional people */}
            <div className="absolute bottom-6 left-44 w-6 h-6 bg-green-400 rounded-full transform -skew-x-12"></div>
            <div className="absolute bottom-2 left-46 w-4 h-8 bg-green-600 rounded transform -skew-x-12"></div>
            
            <div className="absolute bottom-8 right-16 w-6 h-6 bg-orange-400 rounded-full transform -skew-x-12"></div>
            <div className="absolute bottom-4 right-14 w-4 h-8 bg-orange-600 rounded transform -skew-x-12"></div>
          </div>
        </div>

        {/* Floating collaboration elements */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-8 bg-green-500 rounded-full shadow-lg"></div>
          <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"></div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-10 bg-red-500 rounded-full shadow-lg"></div>
          <div className="absolute top-2 left-2 w-5 h-3 bg-white rounded"></div>
        </div>

        {/* Additional floating people */}
        <div className="absolute top-20 left-1/4">
          <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-6 bg-yellow-600 rounded mt-1"></div>
        </div>
        
        <div className="absolute top-40 right-1/4">
          <div className="w-5 h-5 bg-purple-400 rounded-full"></div>
          <div className="w-3 h-6 bg-purple-600 rounded mt-1"></div>
        </div>

        {/* Workflow arrows */}
        <div className="absolute top-28 left-64 w-8 h-1 bg-blue-400 rounded-full transform rotate-12"></div>
        <div className="absolute top-28 left-68 w-0 h-0 border-l-4 border-l-blue-400 border-t-2 border-t-transparent border-b-2 border-b-transparent transform rotate-12"></div>
        
        <div className="absolute top-44 right-64 w-8 h-1 bg-blue-400 rounded-full transform -rotate-12"></div>
        <div className="absolute top-44 right-60 w-0 h-0 border-r-4 border-r-blue-400 border-t-2 border-t-transparent border-b-2 border-b-transparent transform -rotate-12"></div>
      </div>
    </div>
  );
};

export default Herogoogle;