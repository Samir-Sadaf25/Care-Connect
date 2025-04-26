import React from 'react';
import banner from '../assets/doctor illustration.png'
const HeroSection = () => {
    return (
        <div className='mt-3 mb-24'>
            <div>
                <img className='place-self-center' src={banner} alt="" />
            </div>
            <div>
                <h1 className='text-4xl font-bold text-indigo-400 text-center'>Team of medical proffesionals</h1>
                <p className='text-center text-gray-500'>Our team of dedicated medical professionals works tirelessly to provide compassionate care and innovative solutions. <br />Together, we strive to create healthier communities and brighter tomorrows.</p>
            </div>
        </div>
    );
};

export default HeroSection;