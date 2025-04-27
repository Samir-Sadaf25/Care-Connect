import React from 'react';
import HeroSection from '../Components/HeroSection';
import DoctorsList from '../Components/DoctorsList';
import Services from '../Components/Services';
import { useLoaderData } from 'react-router';

const Home = () => {
    
    const data = useLoaderData();
    
    

    return (
        <div>
            <HeroSection></HeroSection>
            <DoctorsList data={data}></DoctorsList>
            <Services></Services>
        </div>
    );
};

export default Home;