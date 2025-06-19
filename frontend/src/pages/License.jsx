import React from 'react';
import Herolicense from '../License/Herolicense';
import Planlicense from '../License/Planlicense';
import Features from '../VPS/Features';
import Faqsection from '../components/Faqsection';
import Clients from '../components/Clients';


const License = () => {
  return (
    <>
      <Herolicense />
      <Planlicense />
      <Features />
      <div className="max-w-[1200px] flex justify-center flex-col mx-auto px-0 py-1 ">
        <Faqsection />
      </div>
      <div className="mt-20">
        <Clients />
      </div>
    </>
  )
}

export default License;
