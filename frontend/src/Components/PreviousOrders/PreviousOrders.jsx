import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'

export default function PreviousOrders() {
    const { isAuthenticated } = useContext(AuthContext)
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    console.log(products)
    // console.log(isAuthenticated[1])
    const getitems = () => {
        // console.log(isAuthenticated)
        if(!isAuthenticated[0])
            navigate('/login')

        axios.post('https://shopnest-156j.onrender.com/buy/getitems', { id: isAuthenticated[1].id }).then((result) => {
            setProducts(result.data.reverse())
        }).catch((error) => {
            console.log(error.response.data.message)
        })
    }

    useEffect(() => {
        
        getitems()
    }, [isAuthenticated])

    return (
        <div>

            <Navbar />
            
            <div className="h-16"></div>
            
            <div className="min-h-screen    p-4 bg-gradient-to-b from-blue-200 via-pink-300 to-gray-900 w-full ">

                {products.map((pr, index) => (

                    <div className=" h-2/3 w-full md:w-3/4 mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row transition-transform transform duration-500 hover:scale-105 mb-8" >
                        
                        <div className="mt-2 w-full md:w-2/3 w-full  flex flex-col justify-center md:border-l-2">
                            <div className=" px-3">
                                <h2 className="text-2xl font-semibold mb-2 md:text-left text-center">{pr.title}</h2>
                                <p className="text-gray-700 md:text-left text-center">No. of items: {pr.quantity}</p>
                            </div>
                            <div className="price_and_ratings px-3 mb-4  ">
                                <h1 className=' text-lg text-center md:text-left'>Price per item: Rs. {(parseInt(pr.totalPrice)/pr.quantity).toFixed(2)}</h1>
                                <h1 className=' text-lg text-center md:text-left'>Delivery Charge: Rs. {pr.deliveryCharge}</h1>

                                <p className='flex font-bold justify-center md:justify-start'>Total Price Rs. {Math.floor(pr.totalPrice) }</p>
                            </div>

                            

                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}
