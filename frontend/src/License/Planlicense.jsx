import React, { useState } from 'react';
import { Check, Server, Shield, Globe, Wrench, Headphones } from 'lucide-react';

export default function Planlicense() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const Plans = [
    {
      name: 'cPanel/whm licenses for VPS Server',
      subtitle: "START FROM",
      price: 599,
      features: [
        { icon: <Globe className="w-4 h-4" />, text: 'Create cPanel unlimited accounts' },
        { icon: <Shield className="w-4 h-4" />, text: 'Free Premium softaculous (One click CMS installer )' },
        { icon: <Shield className="w-4 h-4" />, text: 'Free Free FileSSL (Lets encrypt SSL certificate )' },
        { icon: <Wrench className="w-4 h-4" />, text: 'Free sitepad website builder' },
        { icon: <Server className="w-4 h-4" />, text: 'Free Installation for license' },
        { icon: <Headphones className="w-4 h-4" />, text: 'Always free in house technical support' }
      ],
      bestValue: false
    },
    {
      name: 'cPanel/whm licenses for Dedicated Server',
      subtitle: "START FROM",
      price: 1099,
      features: [
        { icon: <Globe className="w-4 h-4" />, text: 'Create cPanel unlimited accounts' },
        { icon: <Shield className="w-4 h-4" />, text: 'Free Premium softaculous (One click CMS installer )' },
        { icon: <Shield className="w-4 h-4" />, text: 'Free Free FileSSL (Lets encrypt SSL certificate )' },
        { icon: <Wrench className="w-4 h-4" />, text: 'Free sitepad website builder' },
        { icon: <Server className="w-4 h-4" />, text: 'Free Installation for license' },
        { icon: <Headphones className="w-4 h-4" />, text: 'Always free in house technical support' }
      ],
      bestValue: true
    }
  ];

  return (
    <div className="min-h-screen bg-white from-blue-50 via-white to-teal-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
            India's Best Linux WHM cPanel Pricing At{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Affordable Price
            </span>
          </h1>
          <div className="inline-block bg-white px-6 py-2">
            <span className="text-sm text-gray-600 font-medium">Select Your</span>
            <h2 className="text-2xl font-bold text-gray-800 mt-1">Linux WHM cPanel Pricing</h2>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
          {Plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg shadow-lg px-3 py-5 ${
                plan.bestValue ? 'ring-4 ring-green-500 transform scale-105' : ''
              }`}
            >
              {plan.bestValue && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium relative -top-1">
                    Best value
                  </div>
                </div>
              )}

              <div className="text-center mb-6 px-3">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-gray-600 mb-4">{plan.subtitle}</p>

                <div className="mb-4">
                  <span className="text-xl font-bold text-gray-800">INR</span>
                  <span className="text-3xl font-bold text-gray-800"> {plan.price}</span>
                  <span className="text-gray-600"> p/mo.*</span>
                </div>

                <button
                  className="w-full py-3 rounded-md font-medium text-sm transition duration-300 bg-blue-500 text-white hover:bg-blue-700"
                >
                  BUY NOW
                </button>
              </div>

              <div>
                <ul className="space-y-3 px-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2 text-[16px] font-semibold text-gray-900 hover:text-gray-700"
                    >
                      {feature.icon}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
