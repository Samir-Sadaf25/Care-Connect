import React, { useEffect, useState } from 'react';
import { getAppointmentList } from '../Utilities/LocalStorage';

const MyBookings = () => {
    const [booking, setBooking] = useState([])
    useEffect(() => {
        const doct = getAppointmentList();
        setBooking(doct);
    },[])

    return (
        <div>
            <div className='text-center mt-10 mb-10'>
                <h1 className='text-4xl font-bold'>My Today Appointments</h1>
                <p className='text-gray-400'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>

            </div>
            <div>
                {
                    booking.map(booked =>
                        <div key={booked.id} className=" w-11/12 mx-auto bg-white border border-gray-200 rounded-lg p-4 mb-2.5">
                            <div className="flex justify-between items-start border-b border-dashed pb-3 mb-3">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-800">{booked.name}</h3>
                                    <p className="text-xs text-gray-500">{booked.speciality}</p>
                                </div>
                                <p className="text-xs text-gray-500">Appointment Fee : {booked.fee} $</p>
                            </div>

                            <button  className="w-full border border-red-500 text-red-600 font-semibold text-sm py-2 rounded-full hover:bg-red-50 transition duration-200">
                                Cancel Appointment
                            </button>
                        </div>
                    )
                }
            </div>
        </div >
    );
};

export default MyBookings;