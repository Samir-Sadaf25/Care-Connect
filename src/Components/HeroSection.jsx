import React, { useState } from 'react';
import banner from '../assets/banner-img-1.png'
const HeroSection = ({ handleSearch }) => {

    const [searchText, setSearchText] = useState('');



    return (
        <div className=' mb-24'>
            <div className="w-full h-[600px] bg-gradient-to-b from-[#f5f5f5] to-white flex flex-col items-center justify-center rounded-2xl p-6 relative overflow-hidden">

                {/* Text Section */}
                <div className="text-center max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-2.5">
                        Dependable Care, Backed by Trusted Professionals.
                    </h1>
                    <p className="text-gray-600 text-lg mb-6">
                        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                        Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                    </p>

                    {/* Search Bar */}
                    <div className="flex items-center justify-center gap-4">
                        <form onSubmit={e => {
                            handleSearch(e, searchText),
                            setSearchText('') // reset search text
                        }}>
                            <input value={searchText}
                                onChange={e => setSearchText(e.target.value)}
                                type="text"
                                placeholder="Search any doctor..."
                                className="w-72 md:w-96 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button type='Submit' className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition ml-2.5">
                                Search Now
                            </button>
                        </form>
                       
                    </div>
                </div>

                {/* Images Section */}
                <div className="flex gap-8 mt-12">
                    <img
                        src={banner}
                        alt="Doctor 1"
                        className="w-[250px] h-[250px] object-cover rounded-xl shadow-lg"
                    />
                    <img
                        src={banner}
                        alt="Doctor 2"
                        className="w-[250px] h-[250px] object-cover rounded-xl shadow-lg"
                    />
                </div>

            </div>
        </div>
    );
};

export default HeroSection;