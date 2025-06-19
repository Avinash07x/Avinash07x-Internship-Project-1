import React from 'react';
import Hero18 from "../assets/1.png";

const services = [
  {
    id: 'calendar',
    name: 'Calendar',
    icon: 'https://www.gstatic.com/images/branding/product/1x/calendar_2020q4_48dp.png',
  },
  {
    id: 'drive',
    name: 'Google Drive',
    icon: 'https://www.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png',
  },
  {
    id: 'meet',
    name: 'Google Meet',
    icon: 'https://www.gstatic.com/images/branding/product/1x/meet_2020q4_48dp.png',
  },
  {
    id: 'sheets',
    name: 'Google Sheets',
    icon: 'https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png',
  },
  {
    id: 'docs',
    name: 'Google Docs',
    icon: 'https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png',
  },
  {
    id: 'gmail',
    name: 'Gmail',
    icon: 'https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_48dp.png',
  },
];

const Providergoogle = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-600 text-center mb-2">Build For Your Business</p>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Google WorkSpace Services
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <img
                src={service.icon}
                alt={service.name}
                className="w-12 h-12 mb-2"
              />
              <p className="text-sm font-medium text-gray-700">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center lg:justify-end items-center order-2 lg:order-2 animate-gentle-bounce">
        <div className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px]">
          <img
            src={Hero18}
            className="max-w-3xl h-auto object-cover lg:pl-6 xl:pl-44"
            alt="Dedicated Server"
          />
        </div>
      </div>
    </div>
  );
};

export default Providergoogle;

