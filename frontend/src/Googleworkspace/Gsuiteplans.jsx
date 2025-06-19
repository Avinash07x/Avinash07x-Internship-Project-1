import React from 'react';
import { Link } from "react-router-dom";

export default function Gsuiteplans() {
    const plans = [
        {
            name: 'Business Starter',
            subtitle: "START FROM",
            price: '163',
            features: [
                'Custom and secure business email',
                '100 participant video meetings',
                '30 GB pooled storage per user',
                'Security and management controls',
                'Standard support'
            ]
        },
        {
            name: 'Business Standard',
            subtitle: "START FROM",
            price: '580',
            features: [
                'Custom and secure business email',
                '150 participant video meetings + recording',
                '2 TB pooled storage per user',
                'Security and management controls',
                'Standard support (paid upgrade to enhanced support)'
            ]
        },
        {
            name: 'Business Plus',
            subtitle: "START FROM",
            price: '999',
            features: [
                'Custom and secure business email + eDiscovery, retention',
                '500 participant video meetings + recording, attendance tracking',
                '5 TB pooled storage per user',
                'Enhanced security and management controls, including Vault and advanced endpoint management',
                'Standard support (paid upgrade to enhanced support)'
            ]
        },
        {
            name: 'Enterprise',
            subtitle: "START FROM",
            price: null,
            isEnterprise: true,
            features: [
                'Custom and secure business email + eDiscovery, retention, S/MIME encryption',
                '1000 participant video meetings + recording, attendance tracking, noise cancellation, in-domain live streaming',
                '5 TB pooled storage per user, with ability to request more*',
                'Advanced security, management and compliance controls, including Vault, DLP, data regions and enterprise endpoint management'
            ]
        }
    ];

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white min-h-screen">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-light text-gray-800 mb-4">
                    Google Workspace Reseller in India
                </h1>
                <p className="text-sm text-gray-600 mb-2">Select Your</p>
                <h2 className="text-2xl font-normal text-gray-800">Gsuite Plans</h2>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[1200px]">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="relative bg-white rounded-lg shadow-lg px-3 py-5"
                    >
                        <div className="text-center mb-6 px-3">
                            <h3 className="text-lg font-bold text-gray-800 mb-1">
                                {plan.name}
                            </h3>
                            <p className="text-xs text-gray-600 mb-4">{plan.subtitle}</p>

                            <div className="mb-4">
                                <span className="text-xl font-bold text-gray-800">INR</span>
                                <span className="text-3xl font-bold text-gray-800">
                                    {plan.price ? ` ${plan.price}` : ""}
                                </span>
                                <span className="text-gray-600">{plan.price ? " p/mo.*" : ""}</span>
                            </div>

                            {plan.isEnterprise ? (
                                <Link to="/" className="block">
                                    <button
                                        className="w-full py-3 rounded-md font-medium text-sm transition-transform duration-300 ease-in-out transform bg-blue-500 text-white hover:bg-blue-700 hover:scale-105"
                                    >
                                        CONTACT SALES
                                    </button>
                                </Link>
                            ) : (
                                <button
                                    className="w-full py-3 rounded-md font-medium text-sm transition-transform duration-300 ease-in-out transform bg-blue-500 text-white hover:bg-blue-700 hover:scale-105"
                                >
                                    BUY NOW
                                </button>
                            )}
                        </div>

                        <div>
                            <ul className="space-y-3 list-disc px-4">
                                {plan.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        className="text-[16px] font-semibold text-gray-900 cursor-pointer hover:text-gray-700"
                                    >
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
