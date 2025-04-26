import React from 'react';
import navLogo from '../assets/logo.png'
import { Link, NavLink } from 'react-router';
const Navber = () => {
    return (
        <div className=' navbar bg-base-100 shadow-sm max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-24'>
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex="0"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink to={"/"} className={({ isActive }) => isActive ? "text-blue-400" : "text-black"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/MyBookings"} className={({ isActive }) => isActive ? "text-blue-400" : "text-black"}>MyBookings</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Blogs"} className={({ isActive }) => isActive ? "text-blue-400" : "text-black"}>Blogs</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center space-x-2">
                    <img src={navLogo} className="w-8 h-8" />
                    <span className="text-2xl font-semibold text-gray-800">CareConnect</span>
                </div>

            </div>

            <div className=' navbar-center hidden lg:block'>
                <ul className="flex space-x-8 text-gray-600 font-medium">
                    <li>
                        <NavLink to={"/"} className={({ isActive }) => isActive ? "text-blue-400" : "text-black"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/MyBookings"} className={({ isActive }) => isActive ? "text-blue-400" : "text-black"}>MyBookings</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Blogs"} className={({ isActive }) => isActive ? "text-blue-400" : "text-black"}>Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Contacts"}>Contact Us</NavLink>
                    </li>


                </ul>

            </div>

            <div className=' navbar-end'>
                <a
                    href="#"
                    className="bg-blue-500  text-white px-6 py-2 rounded-full font-semibold transition"
                >
                    Contact Now
                </a>
            </div>

        </div >
    );
};

export default Navber;