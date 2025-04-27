import React, { useEffect, useState } from 'react';
import { NavLink, } from 'react-router';

const DoctorsList = ({ data }) => {

    const [showAll, setShowAll] = useState(false);
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {

        if (showAll) {
            setDoctors(data)
        }
        else {
            setDoctors(data.slice(0, 6));
        }


    }, [data, showAll])

    return (
        <div>
            <div className='place-items-center'>
                <h1 className='text-5xl font-bold mb-5'>Our Best Doctors</h1>
                <p className='text-lg text-gray-400 mb-16 w-[1009px]'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    doctors.map(doctor => <div key={doctor.id} className="w-[411px] h-[563px] bg-white rounded-xl shadow-md flex flex-col items-center p-4">
                        {/* Doctor Image */}
                        <img
                            src={doctor.image}
                            alt="doctor image"
                            className="w-[347px] h-[248px] object-cover rounded-md"
                        />

                        {/* Status and Experience */}
                        <div className="flex space-x-2 mt-4">
                            <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                                Available
                            </span>
                            <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                                {doctor.experience} Years Experience
                            </span>
                        </div>

                        {/* Doctor Details */}
                        <div className="text-center mt-4">
                            <h2 className="text-xl font-semibold text-gray-900">{doctor.name}</h2>
                            <p className="text-gray-600 mt-1">{doctor.speciality}</p>
                            <div className="flex items-center justify-center mt-2 text-gray-500 text-sm">
                                <span className="mr-2">Ⓡ</span>
                                <span>Reg No: {doctor.registrationNumber}</span>
                            </div>
                        </div>

                        {/* View Details Button */}
                        <NavLink to={"/DoctorDetails"} className=" mt-2.5 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">

                            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg name="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative">View details</span>

                        </NavLink>
                    </div>)
                }
            </div>
            <div className='justify-self-center mt-5 mb-8'>
                <button onClick={() => {
                    setShowAll(prv => !prv)
                    if (showAll) window.scrollTo(0, 0)
                }}>
                    <a className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">{showAll ? 'show All Doctors' : 'Show Less'} </span>
                    </a>
                </button>
            </div>
        </div>
    );
};

export default DoctorsList;