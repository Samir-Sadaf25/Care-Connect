import React from 'react';
import errorPic from '../assets/404NotFound.jpg'
import { Link } from 'react-router';
// import Navber from '../../Components/Header/Navber';
const Error = () => {
    return (
        <div>
            
            <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-12 bg-gray-50 text-center">
                <img
                    src={errorPic}
                    alt="404 - Page Not Found"
                    className="max-w-md w-full mb-6"
                />
                <h1 className="text-3xl font-bold text-pink-600 mb-2">404 - Page Not Found</h1>
                <p className="text-gray-700 mb-6">
                    Oops! The page you're looking for doesn’t exist.
                </p>
                <Link to="/" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md font-medium transition">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default Error;