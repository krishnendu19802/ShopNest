import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function ContactUs() {
    return (
        <div>
            <Navbar />
            {/* <div className="h-16"></div> */}
            <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-20 md:pt-8 bg-gradient-to-b from-blue-200 via-pink-300 to-gray-900 w-full ">
                <form className="bg-white p-8 rounded-lg shadow-lg w-4/5 md:w-full max-w-2xl bg-gradient-to-b to-green-400 from-blue-400 mb-8 md:mb-0">
                    <h2 className="text-2xl font-bold mb-6 text-center text-white">Contact Us</h2>

                    {/* First Name and Last Name */}
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="first-name">
                                First Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="first-name"
                                type="text"
                                placeholder="Jane"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="last-name">
                                Last Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="last-name"
                                type="text"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    {/* Phone Number and Email */}
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="phone"
                                type="tel"
                                placeholder="123-456-7890"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                        <div className="px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="message"
                                rows="6"
                                placeholder="Enter your message here..."
                            ></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
            <Footer/>

        </div>
    )
}
