import React, { useState } from 'react';
import HeroSection from '../Components/HeroSection';
import DoctorsList from '../Components/DoctorsList';
import Services from '../Components/Services';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData();

    const [doctor, setDoctor] = useState(data);

    const handleSearch = (e, text) => {
        e.preventDefault();
        if(text === '') return setDoctor(data)
        const searchedDoctors = data.filter(doct => doct.name.toLowerCase().includes(text) ||
            doct.speciality.toLowerCase().includes(text) ||
            doct.designation.toLowerCase().includes(text)
        );
        setDoctor(searchedDoctors);
    }

    return (
        <div>
            <HeroSection handleSearch={handleSearch}></HeroSection>
            <DoctorsList data={doctor}></DoctorsList>
            <Services></Services>
        </div>
    );
};

export default Home;