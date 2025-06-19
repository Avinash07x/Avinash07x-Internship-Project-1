import React from 'react'
import Herogoogle from '../Googleworkspace/Herogoogle'
import Gsuiteplans from '../Googleworkspace/Gsuiteplans';
import Servicesgoogle from '../Googleworkspace/Servicesgoogle';
import Providergoogle from '../Googleworkspace/Providergoogle';
import Faqsection from '../components/Faqsection';
import Clients from '../components/Clients';

const Googleworkspace = () => {
  return (
    <>
      <Herogoogle />
      <Gsuiteplans />
      <Servicesgoogle />
      <Providergoogle />
      <div className="max-w-[1200px] flex justify-center flex-col mx-auto px-0 py-1 ">
        <Faqsection />
      </div>
      <div className="mt-20">
        <Clients />
      </div>
    </>
  )
}

export default Googleworkspace;
