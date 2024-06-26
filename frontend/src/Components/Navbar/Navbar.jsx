import React, { useContext, useState } from 'react';
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const { logout, isAuthenticated } = useContext(AuthContext)

    console.log(isAuthenticated)
    const navigate = useNavigate()

    const handleNavigateLogin = () => {
        console.log('here')
        navigate('/login')
    }

    const handleLogout = () => {

        logout()
    }

    return (
        <nav className="bg-gradient-to-r from-blue-400 to-pink-400 p-4 fixed w-full z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo and Company Name */}
                <Link to={`/`}>
                    <div className="flex items-center text-white">

                        <img src="src/assets/logo.png" alt="Company Logo" className="h-12 w-12 mr-2 rounded-full" />
                        <span className="text-lg font-semibold">ShopNest</span>
                    </div>
                </Link>

                {/* Navbar Items for Desktop */}
                <div className="hidden md:flex space-x-6 items-center text-xl">

                    <Link to="/" className="text-white  hover:text-blue-300">Home</Link>
                    <Link to="/about" className="text-white  hover:text-blue-300 ">About</Link>
                    <Link to="/category" className="text-white  hover:text-blue-300 ">Categories</Link>
                    <Link to="/contactus" className="text-white   hover:text-blue-300">Contact Us</Link>
                    {isAuthenticated[0] && <Link to="/previousorders" className="text-white   hover:text-blue-300">Orders</Link>
                    }




                </div>

                {/* Login Button for Desktop */}
                <div className="hidden md:flex items-center">
                    {isAuthenticated[0] && <Link to='/cart'>
                        <ShoppingCartIcon className="h-6 w-6 text-white mx-2" />
                    </Link>}
                    {!isAuthenticated[0] && <button className="text-white bg-green-500 hover:bg-green-400 px-4 py-2 rounded" onClick={handleNavigateLogin}>
                        Login
                    </button>}
                    {isAuthenticated[0] && <button className="text-white bg-red-500 hover:bg-green-400 px-4 py-2 rounded" onClick={() => { logout() }}>
                        Logout
                    </button>}
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
                <div className="  md:hidden mt-4">
                    <Link to="/" className="text-white  hover:text-blue-300">
                        <div className='p-2'> Home</div>
                    </Link>
                    <hr />

                    <Link to="/about" className="text-white  hover:text-blue-300  ">
                        <div className='p-2'>About</div>
                    </Link>
                    <hr />
                    <Link to="/category" className="text-white  hover:text-blue-300 ">
                        <div className='p-2'>Categories</div>
                    </Link>
                    <hr />
                    <Link to="/contactus" className="text-white   hover:text-blue-300">
                        <div className='p-2'>Contact Us</div>
                    </Link>
                    <hr />
                    {isAuthenticated[0] && 
                    <>
                    <Link to="/previousorders" className="text-white   hover:text-blue-300">
                        <div className='p-2'>Orders</div>
                        
                    </Link>
                    <hr />
                    </>}

                    {!isAuthenticated[0] && <button className="text-white bg-green-500 hover:bg-green-400 m-2 px-4 py-2 rounded" onClick={handleNavigateLogin}>
                        Login
                    </button>}

                    {isAuthenticated[0] && <Link to='/cart'>
                        <div className='p-2 text-white'>

                            Cart
                        </div>
                    </Link>}
                    {isAuthenticated[0] && <hr />}

                    {isAuthenticated[0] && <button className="text-white bg-red-500 hover:bg-green-400 px-4 py-2 rounded" onClick={handleLogout}>
                        Logout
                    </button>}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
