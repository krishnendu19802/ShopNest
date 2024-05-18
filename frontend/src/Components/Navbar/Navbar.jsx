import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const navigate=useNavigate()

    const handleNavigateLogin=()=>{
        console.log('here')
        navigate('/login')
    }

    return (
        <nav className="bg-gradient-to-r from-blue-400 to-pink-400 p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo and Company Name */}
                <div className="flex items-center text-white">
                    <img src="/path/to/logo.png" alt="Company Logo" className="h-8 w-8 mr-2" />
                    <span className="text-lg font-semibold">Company Name</span>
                </div>

                {/* Navbar Items for Desktop */}
                <div className="hidden md:flex space-x-6 items-center text-xl">
                    
                    <a href="#" className="text-white hover:underline">Home</a>
                    <a href="#" className="text-white hover:underline">About</a>
                    <a href="#" className="text-white hover:underline">Contact Us</a>
                </div>

                {/* Login Button for Desktop */}
                <div className="hidden md:flex">
                    <button className="text-white bg-green-500 hover:bg-green-400 px-4 py-2 rounded" onClick={handleNavigateLogin}>
                        Login
                    </button>
                </div>

                {/* Hamburger Menu Icon for Mobile */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleNavbar} className="text-white focus:outline-none">
                        {isOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4">
                    <a href="#" className="block text-white px-4 py-2 hover:bg-blue-600">Home</a>
                    <a href="#" className="block text-white px-4 py-2 hover:bg-blue-600">About</a>
                    <a href="#" className="block text-white px-4 py-2 hover:bg-blue-600">Contact Us</a>
                    <button className="w-full text-white bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded mt-2"
                     onClick={handleNavigateLogin}>
                        Login
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
