import React from 'react';
import HeroSection from '../Components/HeroSection';
import DoctorsList from '../Components/DoctorsList';
import Services from '../Components/Services';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <DoctorsList></DoctorsList>
            <Services></Services>
        </div>
    );
};

export default Home;