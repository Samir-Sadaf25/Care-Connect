import React from 'react';
import logo from '../assets/logo.png'
import { SiLeetcode } from 'react-icons/si';
import { Github } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { NavLink } from 'react-router';
const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-white py-10 text-center">
                {/* Logo and nav */}
                <div className="flex flex-col items-center justify-center space-y-4">

                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="Law.BD Logo" className="w-6 h-6" />
                        <span className="text-xl font-semibold">Care Connect</span>
                    </div>

                    <div className="flex space-x-6 text-sm text-gray-300">
                        <li>
                            <NavLink to={"/"} className={({ isActive }) => isActive ? "text-blue-400" : "text-white"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/MyBookings"} className={({ isActive }) => isActive ? "text-blue-400" : "text-white"}>MyBookings</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Blogs"} className={({ isActive }) => isActive ? "text-blue-400" : "text-white"}>Blogs</NavLink>
                        </li>
                        <a href="/contact" className="hover:text-white">Contact Us</a>
                    </div>


                    <hr className="w-full border-t border-gray-600 my-4 max-w-2xl" />


                    <div className="flex space-x-4">
                        <a href="https://leetcode.com/u/samirsadaf25/" className="text-blue-500 hover:text-white"><SiLeetcode size={20} /></a>
                        <a href="https://github.com/Samir-Sadaf25" className="text-white hover:text-gray-400"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/samir-sadaf-238352314/" className="text-blue-400 hover:text-white"><FaLinkedinIn size={20} /></a>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;