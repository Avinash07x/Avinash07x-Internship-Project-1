import React, { useState, useEffect } from 'react';
import Features from '../VPS/Features';
import Faqsection from '../components/Faqsection';
import Clients from '../components/Clients';

export default function About() {


    return (
        <div className='bg-white'>
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
                <div className="relative container mx-auto px-6 py-20 bg-gradient-to-r from-blue-400 via-blue-700 to-gray-400 bg-clip-border animate-gradient-animate">
                    <h1 className="text-3xl md:text-5xl p-10 font-bold bg-gradient-to-r from-white text-center to-blue-200 bg-clip-text text-transparent">
                        About Dc keepers
                    </h1>
                    <div className="text-2xl md:text-4xl text-center font-bold mb-4 text-blue-100">
                        {/* Add your subtitle or remove if not needed */}
                    </div>
                </div>

                <section className="py-10 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl pl-32 font-bold text-blue-500 mb-4">
                            Dc keepers Infotech
                        </h2>

                        <div className="max-w-5xl mx-auto space-y-6">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Since our founding in 2019, Dc keepers InfoTech has been a trusted web hosting company in Jaipur. We are on a mission to make going digital easier by delivering businesses the tools and help they need to build an online presence. Dc keepers InfoTech brings numerous benefits for all its users.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Aside from Dc keepers InfoTech dedicated server hosting India and cloud server hosting for small businesses tailored to help businesses succeed, you also benefit from 24×7 customer support, 99.9% uptime, affordable and attractive plans like low-cost dedicated server hosting in India, experts help and many more.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                These benefits are one of the many ways through which Dc keepers InfoTech delivers its promise of providing ultra-fast and the best web hosting services.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                When your business is ready to get online and build a robust digital presence for itself, buy Dc keepers InfoTech dedicated server hosting India and other services. You can also buy features for security and along with low-cost dedicated server hosting in India.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Features />
            <div className="max-w-[1200px] flex justify-center flex-col mx-auto px-0 py-1 bg-white ">
                <Faqsection />
            </div>
            <div className="mt-20">
                <Clients />
            </div>
        </div>
    );
}