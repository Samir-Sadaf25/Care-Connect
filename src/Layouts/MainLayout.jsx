import React from 'react';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <>
            <Navber></Navber>
            <div className=' min-h-[calc(100vh-277px)]'>
                <div className='max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-24'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;