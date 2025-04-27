import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import MyBookings from '../Pages/MyBookings';
import Blogs from '../Pages/Blogs';
import DoctorDetails from '../Pages/DoctorDetails';

const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      errorElement:<Error></Error>,
      children:[
         {
            path:"/",
            Component:Home,
            hydrateFallbackElement: <span className="loading loading-bars loading-lg"></span>,
            loader: () => fetch('Doctors.json') 
         },
         {
            path:"/MyBookings",
            Component:MyBookings,
         },
         {
            path:"/DoctorDetails",
            Component:DoctorDetails,
            loader: () => fetch('Doctors.json')
         },
         {
            path:"/Blogs",
            Component:Blogs
         }
      ]
    },
  ]);

export default router;