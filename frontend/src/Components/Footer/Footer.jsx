import React from 'react';
import { PhoneIcon,  EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                        <p className="text-gray-400 leading-relaxed">
                            We are committed to providing the best shopping experience, offering a wide range of quality products and exceptional customer service.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center">
                                <PhoneIcon className="w-5 h-5 mr-2" />
                                +1 234 567 890
                            </li>
                            <li className="flex items-center">
                                <EnvelopeIcon className="w-5 h-5 mr-2" />
                                support@shopnest.com
                            </li>
                            <li className="flex items-center">
                                <MapPinIcon className="w-5 h-5 mr-2" />
                                1234 Street Name, City, Country
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/about" className="hover:underline">About Us</Link></li>
                            <li><Link to="/" className="hover:underline">Shop</Link></li>
                            <li><Link to="/about" className="hover:underline">FAQ</Link></li>
                            <li><Link to="/contactus" className="hover:underline">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Newsletter</h2>
                        <p className="text-gray-400 mb-4">
                            Subscribe to our newsletter to get the latest updates and offers.
                        </p>
                        <form>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2 rounded mb-2 text-black"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded transition duration-300">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="text-center mt-8 text-gray-500">
                    <p>&copy; 2023 ShopNest. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
