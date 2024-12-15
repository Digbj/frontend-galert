import React from 'react';

const PREDEFINED_CATEGORIES = [
    'All',
    'Technology',
    'Blog',
    'Business',
    'Sports',
    'News'
];

const Header = ({ category = 'All', onCategoryChange }) => {
    return (
        <div className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <h1 className="text-2xl font-bold">Google Alerts Dashboard</h1>
                    <div className="relative">
                        <select
                            value={category}
                            onChange={(e) => onCategoryChange(e.target.value)}
                            className="appearance-none bg-blue-700 text-white px-6 py-2 pr-8 rounded-lg hover:bg-blue-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            {PREDEFINED_CATEGORIES.map((cat) => (
                                <option 
                                    key={cat} 
                                    value={cat}
                                    className="bg-white text-gray-800 cursor-pointer"
                                >
                                    {cat}
                                </option>
                            ))}
                        </select>
                        {/* Custom dropdown arrow */}
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg 
                                className="w-5 h-5 text-white" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;