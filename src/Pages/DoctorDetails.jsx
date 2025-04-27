import { ShieldAlert } from 'lucide-react';
import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { addToAppointment } from '../Utilities/LocalStorage';

const DoctorDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();
    const convertedId = parseInt(id);
    const singleDoctor = data.find(doc => doc.id === convertedId);
    const handleAppointment = () =>{
        addToAppointment(singleDoctor);    
    }
    return (
        <div className='mt-12 mb-12 w-11/12 mx-auto'>
            <div className='bg-white text-black  p-10 place-items-center rounded-2xl shadow-sm'>
                <h1 className='text-4xl font-bold text-center mb-2'>Doctors Profile Details</h1>
                <p className='text-gray-400 lg:w-[1028px] h-[56px] mb-4 text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='mt-10 mb-10'>
                <div className="flex gap-7 rounded overflow-hidden shadow-lg px-4 bg-white">

                    <div className=" w-[308px] h-[308px] rounded-3xl place-content-center">
                        <img src={singleDoctor.image} alt="" />
                    </div>
                    <div className='place-content-center'>
                        <span className="text-sm text-blue-500 font-medium block mb-2">{singleDoctor.experience} Years Experience</span>


                        <h2 className="text-2xl font-bold mb-1">{singleDoctor.name}</h2>

                        <p className='mb-3 text-gray-700 font-semibold'>{singleDoctor.education}</p>


                        <div className='flex gap-3'>
                            <p className="text-gray-500 text-sm mb-4 font-bold">{singleDoctor.speciality}</p>
                            <p className="text-gray-500 text-sm mb-4">License No: {singleDoctor.registrationNumber}</p>
                        </div>

                        <div className="mb-4">


                            <p className='text-gray-400 mb-1'>Working at :</p>
                            <p className='text-gray-500 font-bold mb-2 text-md'>{singleDoctor.workplace}</p>


                            <span className="font-semibold">Available on : </span>
                            {singleDoctor.availability.map((day, idx) => (
                                <span key={idx} className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold inline-block mr-2 mt-1">
                                    {day}
                                </span>
                            ))}
                        </div>

                        <p className="text-green-600 font-bold text-lg">Fee : {singleDoctor.fee}</p>
                    </div>


                </div>
            </div>

            <div className=" bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="flex justify-between items-center mb-4 border-b border-dashed pb-2">
                    <h2 className="text-lg font-semibold">Book an Appointment</h2>
                    <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                        Doctor Available Today
                    </span>
                </div>

                <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Availability</h3>
                    <div className="flex items-center text-yellow-700 bg-yellow-100 px-4 py-2 text-sm rounded-md">
                        <ShieldAlert size={40} />
                        Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                    </div>
                </div>

                <Link to={'/MyBookings'}>
                    <button onClick={handleAppointment}  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full transition duration-200">
                        Book Appointment Now
                    </button>

                </Link>
            </div>



        </div >
    );
};

export default DoctorDetails;