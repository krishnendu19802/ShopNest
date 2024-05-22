import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import axios from 'axios'

export default function ContactUs() {
    const [details, setDetails] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        message: '',
    })

    const [sentstatus,setSentStatus]=useState([false,''])

    const update=(e)=>{
        setDetails((dt) => {
            return { ...dt, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('https://shopnest-156j.onrender.com/contactus',details).then((result)=>{
            console.log(result.data)
            setSentStatus([true,result.data])
        }).catch((error)=>{
            console.log('Error')
        })
    }

    return (
        <div>
            <Navbar />
            <div className="h-16"></div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-20 md:pt-8 bg-gradient-to-b from-blue-200 via-pink-300 to-gray-900 w-full ">
                {!sentstatus[0] && <form className="bg-white p-8 rounded-lg shadow-lg w-4/5 md:w-full max-w-2xl bg-gradient-to-b to-green-400 from-blue-400 mb-8 md:mb-0" onSubmit={handleSubmit}>
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
                                name="firstName"
                                onChange={update}
                                required
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
                                name="lastName"
                                onChange={update}
                                required

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
                                name="phoneNumber"
                                onChange={update}
                                required

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
                                name="email"
                                onChange={update}
                                required

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
                                name="message"
                                onChange={update}
                                required

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
                </form>}
                {sentstatus[0] && <div className='text-center text-2xl text-white'>
                    {sentstatus[1]}
                    </div>}
            </div>
            <Footer />

        </div>
    )
}
