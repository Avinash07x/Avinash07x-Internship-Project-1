import React, { useState } from 'react';

const Providergoogle = () => {
    const [selectedApp, setSelectedApp] = useState(null);

    const apps = [
        {
            name: 'Calendar',
            icon: 'https://www.gstatic.com/images/branding/product/1x/calendar_2020q4_48dp.png',
            description: 'A calendar application that helps users schedule appointments, meetings, and events with smart features.',
        },
        {
            name: 'Google Drive',
            icon: 'https://www.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png',
            description: 'A cloud storage service that allows users to store, access, and share files from any device with collaborative features.',
        },
        {
            name: 'Google Meet',
            icon: 'https://www.gstatic.com/images/branding/product/1x/meet_2020q4_48dp.png',
            description: 'A video conferencing service for hosting virtual meetings, webinars, and presentations with advanced features.',
        },
        {
            name: 'Google Sheets',
            icon: 'https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png',
            description: 'A spreadsheet application similar to Microsoft Excel, allowing users to create, edit, and analyze data collaboratively.',
        },
        {
            name: 'Google Docs',
            icon: 'https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png',
            description: 'A word processing application that enables users to create, edit, and collaborate on documents in real-time.',
        },
        {
            name: 'Gmail',
            icon: 'https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_48dp.png',
            description: 'A powerful email service with advanced features such as custom email addresses, spam filtering, and integration with other Google services.',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <div>
                {/* Header */}
                <div className="bg-white text-center mb-8 text-black  p-8">
                    <h1 className="text-3xl font-bold mb-6">What to Look for in a Cheap price Google Workspace Provider</h1>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                        Google Workspace (formerly G Suite) is a suite of cloud-based productivity and collaboration tools developed by Google. It includes various applications designed to help individuals and businesses streamline their work processes, communicate effectively, and collaborate seamlessly. Some key components of Google Workspace include:
                    </p>
                </div>

                {/* Apps Overview */}
                <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4 py-8">
                    {apps.map((app, index) => (
                        <div
                            key={app.name}
                            className={`bg-gradient-to-r text-black rounded-3xl p-8 transition-all duration-500 hover:scale-105 shadow-lg cursor-pointer`}
                            onClick={() => setSelectedApp(selectedApp === index ? null : index)}
                        >
                            <div className="flex items-center justify-center mb-6">
                                <img src={app.icon} alt={app.name} className="h-12 w-12 object-contain" />
                            </div>

                            <h3 className="text-2xl font-bold text-center mb-4">
                                {app.name}
                            </h3>

                            <p className="text-center mb-6 leading-relaxed">
                                {app.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
                {/* Main Illustration Container */}
                <div className="relative w-full max-w-2xl mb-12">
                    {/* Background Clouds */}
                    <div className="absolute inset-0">
                        {/* Cloud 1 */}
                        <div className="absolute top-4 left-12 w-16 h-8 border-2 border-gray-300 rounded-full bg-transparent"></div>
                        <div className="absolute top-6 left-16 w-8 h-6 border-2 border-gray-300 rounded-full bg-transparent"></div>

                        {/* Cloud 2 */}
                        <div className="absolute top-8 right-20 w-12 h-6 border-2 border-gray-300 rounded-full bg-transparent"></div>

                        {/* Cloud 3 */}
                        <div className="absolute top-2 right-8 w-14 h-7 border-2 border-gray-300 rounded-full bg-transparent"></div>
                        <div className="absolute top-4 right-12 w-8 h-5 border-2 border-gray-300 rounded-full bg-transparent"></div>

                        {/* Cloud 4 */}
                        <div className="absolute bottom-20 left-8 w-12 h-6 border-2 border-gray-300 rounded-full bg-transparent"></div>

                        {/* Cloud 5 */}
                        <div className="absolute bottom-16 right-16 w-16 h-8 border-2 border-gray-300 rounded-full bg-transparent"></div>
                        <div className="absolute bottom-18 right-20 w-8 h-6 border-2 border-gray-300 rounded-full bg-transparent"></div>
                    </div>

                    {/* Main Content Area */}
                    <div className="relative flex items-center justify-center py-16">
                        {/* Left Foliage */}
                        <div className="absolute left-8 top-8">
                            <div className="w-24 h-32 bg-green-400 rounded-full transform -rotate-12"></div>
                            <div className="absolute top-4 left-2 w-20 h-28 bg-green-500 rounded-full transform rotate-6"></div>
                            <div className="absolute top-8 left-4 w-16 h-24 bg-green-600 rounded-full transform -rotate-3"></div>
                        </div>

                        {/* Right Foliage */}
                        <div className="absolute right-8 top-8">
                            <div className="w-24 h-32 bg-green-400 rounded-full transform rotate-12"></div>
                            <div className="absolute top-4 right-2 w-20 h-28 bg-green-500 rounded-full transform -rotate-6"></div>
                            <div className="absolute top-8 right-4 w-16 h-24 bg-green-600 rounded-full transform rotate-3"></div>
                        </div>

                        {/* Central Stack of Documents/Books */}
                        <div className="relative z-10">
                            {/* Bottom Book - Blue */}
                            <div className="w-48 h-8 bg-blue-500 rounded-sm transform rotate-1 shadow-lg"></div>

                            {/* Middle Books Stack */}
                            <div className="relative -mt-2">
                                <div className="w-44 h-8 bg-blue-400 rounded-sm transform -rotate-1 shadow-md"></div>
                                <div className="w-42 h-8 bg-blue-300 rounded-sm transform rotate-0.5 shadow-md -mt-2"></div>
                                <div className="w-40 h-8 bg-blue-200 rounded-sm transform -rotate-0.5 shadow-md -mt-2"></div>
                            </div>

                            {/* Top Active Document */}
                            <div className="relative -mt-4">
                                <div className="w-36 h-24 bg-white rounded border-2 border-gray-200 shadow-xl p-3">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="w-4 h-4 bg-gray-300 rounded"></div>
                                        <div className="w-6 h-4 bg-gray-300 rounded"></div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="w-full h-2 bg-gray-200 rounded"></div>
                                        <div className="w-5/6 h-2 bg-gray-200 rounded"></div>
                                        <div className="w-4/5 h-2 bg-gray-200 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Person with Laptop */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                            {/* Laptop */}
                            <div className="w-24 h-16 bg-gray-700 rounded transform rotate-3">
                                <div className="w-full h-12 bg-gray-200 rounded-t mt-1"></div>
                            </div>

                            {/* Person */}
                            <div className="absolute -top-8 left-8">
                                {/* Head */}
                                <div className="w-8 h-8 bg-yellow-300 rounded-full"></div>
                                {/* Hair */}
                                <div className="absolute top-0 left-1 w-6 h-4 bg-black rounded-full"></div>
                                {/* Body */}
                                <div className="mt-1 w-6 h-8 bg-yellow-400 rounded-b-lg mx-1"></div>
                            </div>
                        </div>

                        {/* Person with Magnifying Glass */}
                        <div className="absolute bottom-0 right-20">
                            {/* Person Body */}
                            <div className="w-6 h-12 bg-blue-600 rounded-t-lg"></div>
                            {/* Head */}
                            <div className="absolute -top-6 left-1 w-4 h-4 bg-pink-200 rounded-full"></div>
                            {/* Hair */}
                            <div className="absolute -top-6 left-1 w-4 h-2 bg-black rounded-full"></div>
                            {/* Magnifying Glass */}
                            <div className="absolute -top-2 -right-6">
                                <div className="w-8 h-8 border-4 border-gray-600 rounded-full bg-blue-100 opacity-50"></div>
                                <div className="absolute top-6 left-6 w-1 h-4 bg-gray-600 transform rotate-45"></div>
                            </div>
                        </div>

                        {/* Floating Icons */}
                        {/* Email Icon */}
                        <div className="absolute top-16 left-32">
                            <div className="w-12 h-8 bg-yellow-400 rounded transform -rotate-12 shadow-lg flex items-center justify-center">
                                <div className="w-6 h-4 border-2 border-white rounded-sm">
                                    <div className="w-full h-0.5 bg-white mt-1.5"></div>
                                </div>
                            </div>
                        </div>

                        {/* Video/Play Icon */}
                        <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                            <div className="w-10 h-10 bg-red-500 rounded-full shadow-lg flex items-center justify-center">
                                <div className="w-0 h-0 border-l-4 border-l-white border-y-2 border-y-transparent ml-1"></div>
                            </div>
                        </div>

                        {/* Chat Bubbles */}
                        <div className="absolute top-20 right-32">
                            <div className="w-8 h-6 bg-white border-2 border-gray-300 rounded-lg relative">
                                <div className="absolute -bottom-1 left-2 w-2 h-2 bg-white border-r-2 border-b-2 border-gray-300 transform rotate-45"></div>
                            </div>
                            <div className="w-10 h-6 bg-blue-400 rounded-lg mt-1 relative">
                                <div className="absolute -bottom-1 right-2 w-2 h-2 bg-blue-400 transform rotate-45"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="text-center max-w-10xl">
                    <p className="text-sm text-gray-600 mb-2">Pricing and plans for Google Workspace</p>
                    <h1 className="text-3xl font-bold text-gray-900 mb-12">Google WorkSpace Services</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="bg-gradient-to-r shadow-lg rounded-xl p-5 text-center max-w-5xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
                            <h3 className="font-semibold text-gray-800 text-lg">Best for Small Businesses</h3>
                        </div>
                        <div className="bg-gradient-to-r shadow-lg rounded-xl p-5 text-center max-w-5xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
                            <h3 className="font-semibold text-gray-800 text-lg">Ideal for Growing Teams</h3>
                        </div>
                        <div className="bg-gradient-to-r shadow-lg rounded-xl p-5 text-center max-w-5xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
                            <h3 className="font-semibold text-gray-800 text-lg">Custom Solutions for Large Enterprises</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Providergoogle;

