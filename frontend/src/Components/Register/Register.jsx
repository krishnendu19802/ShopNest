import React, { useState } from 'react'
import { EnvelopeIcon, LockClosedIcon, EyeIcon, EyeSlashIcon, UserIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Loader/Loader';

export default function Register() {
    const [pwd, setPwd] = useState(true)
    const [status, setStatus] = useState([false, ''])
    const [details, setDetails] = useState({
        'email': '',
        'password': '',
        'name': ''
    })
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const handleChange = (e) => {
        // console.log(e.target.name)
        setDetails((dt) => {
            return { ...dt, [e.target.name]: e.target.value }
        })
    }

    const passwordCheckLogic = () => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@]).+$/;

        if (details.password.length < 8 || details.password.length > 16) {
            if (details.password.length < 8) {
                setStatus([true, 'Password too short'])
                return true
            }
            else {
                setStatus([true, 'Password too long'])
                return true

            }
        }
        if (!regex.test(details.password)) {
            setStatus([true, 'Password should contain letters, digits and "@"'])
            return true

        }
        setStatus([false, ''])
        return false
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        console.log(details)

        if (passwordCheckLogic()) {
            setLoading(false)

            return
        }

        axios.post(`https://shopnest-156j.onrender.com/createuser`, {
            email: details.email,
            password: details.password,
            name: details.name
        }).then((result) => {
            setLoading(false)

            const data = result.data
            console.log(data)
            setStatus([true, data.message])
            navigate('/login')
        }).catch((error) => {
            setLoading(false)

            setStatus([true, error.message])
        })
    }

    const togglepwd = () => {
        setPwd(pwd => !pwd)
    }
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 to-purple-200">
            <div className="bg-blue-700  rounded-lg shadow-lg w-3/4 max-w-4xl flex flex-col md:flex-row">

                <div className="w-full md:w-1/2 p-4  bg-gradient-to-b from-green-400 to-blue-400 md:rounded-l-lg  flex items-center flex-col  ">
                    <h1 className="text-2xl text-white mb-6 text-center ">Register</h1>
                    <hr className='bg-white ' />

                    <form className='w-full flex-col items-center pt-8' onSubmit={handleSubmit}>

                        <div className="mb-8 w-full flex pl-4">
                            <label className="block text-white mb-2 text-xl" htmlFor="email">
                                <UserIcon className="h-5 w-5 inline-block mr-2 text-white" /> </label>
                            <input
                                type="text"
                                name="name"
                                value={details['name']}
                                onChange={handleChange}
                                placeholder='Name'
                                className="w-3/4 px-3 py-2 rounded bg-gradient-to-r from-pink-600  to-purple-600 text-white  border-blue-100 focus:outline-none focus:border-blue-400"
                                required
                            />
                        </div>

                        <div className="mb-8 w-full flex pl-4">
                            <label className="block text-white mb-2 text-xl" htmlFor="email">
                                <EnvelopeIcon className="h-5 w-5 inline-block mr-2 text-white" /> </label>
                            <input
                                type="email"
                                name="email"
                                value={details['email']}
                                onChange={handleChange}
                                placeholder='Email'
                                className="w-3/4 px-3 py-2 rounded bg-gradient-to-r from-pink-600  to-purple-600 text-white  border-blue-100 focus:outline-none focus:border-blue-400"
                                required
                            />
                        </div>
                        <div className="mb-4 w-full flex pl-4">
                            <label className="block text-white mb-2 text-xl" htmlFor="password">
                                <LockClosedIcon className="h-5 w-5 inline-block mr-2 text-white" /> </label>

                            <input
                                type={`${pwd ? 'password' : 'text'}`}
                                name="password"
                                value={details['password']}
                                onChange={handleChange}
                                placeholder='Password'
                                className="w-3/4 px-3 py-2 rounded  text-white bg-gradient-to-r from-pink-600 to-purple-600  border-blue-100 focus:outline-none focus:border-blue-400"
                                required
                            />
                            <div className="pl-4 flex items-center" onClick={togglepwd}>
                                {pwd && <EyeIcon className=" h-5 w-5 inline-block mr-2 text-white" />}
                                {!pwd && <EyeSlashIcon className=" h-5 w-5 inline-block mr-2 text-white" />}

                            </div>
                        </div>

                        <div className={`status text-center text-${status[0] ? 'red-800' : 'green-600'} h-8 `}>
                            {status[1]}
                        </div>
                        <div className="flex justify-center pe-8">
                            <button
                                type="submit"
                                className="w-1/2 bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-blue-500 text-white py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 flex items-center justify-center "
                            >
                                 {loading && <Loader size={24} />}
                                 
                                Register
                            </button>
                        </div>

                        <div className="link flex text-white mt-4 text-md pl-4">
                            Already have an account?<Link className={`text-indigo-700 underline hover:text-indigo-300`} to={`/login`}>Login</Link>
                        </div>

                    </form>
                </div>

                <div className="hidden md:block md:w-1/2 ">
                    <img
                        src="src\assets\login-bg.jpg" // Replace with your image URL
                        alt="Sign In"
                        className="w-full h-full object-cover rounded-r-lg"
                    />
                </div>
            </div>
        </div>
    )
}
