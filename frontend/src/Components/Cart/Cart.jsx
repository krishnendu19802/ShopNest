import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import Notification from '../Product/Notification';
import Modal from '../Product/Modal';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthProvider';

export default function Cart() {
    // const products = [
    //     {

    //         "id": 1,
    //         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //         "price": 109.95,
    //         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",

    //         "quantity": 3
    //     },
    //     {
    //         "id": 2,
    //         "title": "Mens Casual Premium Slim Fit T-Shirts ",
    //         "price": 22.3,
    //         "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",

    //         "quantity": 3

    //     },
    //     {
    //         "id": 3,
    //         "title": "Mens Cotton Jacket",
    //         "price": 55.99,
    //         "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",

    //         "quantity": 3

    //     }
    // ]
    const { isAuthenticated } = useContext(AuthContext)
    const [products, setProducts] = useState([])
    const getProducts = () => {
        if (!isAuthenticated[0]) {
            console.log('Not logged in')
            return
        }
        axios.post('http://localhost:8000/addcart/getitems', {
            id: isAuthenticated[1].id
        }).then((result) => {
            console.log(result.data)
            setProducts(result.data)
        }).catch((error) => {
            console.log(error.message)
        })

    }

    const handleRemove=(val)=>{
        axios.delete(`http://localhost:8000/addcart/${isAuthenticated[1].id}/${val}`).then((result) => {
            console.log(result.data)
            setProducts(result.data)
            // showNotification(true,"Removed from Cart")
        }).catch((error) => {
            console.log(error.message)
        })
    }

    useEffect(() => {
        getProducts()
    }, [])

    const [target, setTarget] = useState({})

    const [message, setMessage] = useState({ status: false, mess: '' });
    const [modalStatus, setModalStatus] = useState(false)

    const updateModal = (val) => {
        setTarget(val)
        setModalStatus(st => !st)
    }


    const showNotification = (st,mes) => {
        setMessage({ status: st, mess: mes });

        setTimeout(() => {
            setMessage({ status: false, mess: '' });

        }, 1500); // Reset message after 5 seconds to allow re-triggering
    };

    return (
        <div>

            <Navbar />
            <div className="h-16"></div>
            <Notification message={message.mess} duration={1500} status={message.status} />

            <Modal modalStatus={modalStatus} updateModal={updateModal} product={target} />
            <div className="min-h-screen    p-4 bg-gradient-to-b from-blue-200 via-pink-300 to-gray-900 w-full ">

                {products.map((pr, index) => (

                    <div className=" h-2/3 w-full md:w-3/4 mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row transition-transform transform duration-500 hover:scale-105 mb-8" >
                        <div className="w-full md:w-1/3 w-full flex justify-center ">

                            <img src={pr.image} alt={pr.title} className=" p-4 w-48 h-48 object-cover" />
                        </div>
                        <div className="mt-2 w-full md:w-2/3 w-full  flex flex-col justify-center md:border-l-2">
                            <div className=" px-3">
                                <h2 className="text-2xl font-semibold mb-2 md:text-left text-center">{pr.title}</h2>
                                <p className="text-gray-700 md:text-left text-center">No. of items: {pr.quantity}</p>
                            </div>
                            <div className="price_and_ratings px-3 mb-4  ">
                                <h1 className=' text-lg text-center md:text-left'>Price per item: Rs. {parseInt(pr.price)}</h1>
                                <p className='flex font-bold justify-center md:justify-start'>Total Price Rs. {Math.floor(pr.price) * pr.quantity}</p>
                            </div>

                            <div className="mb-4 flex justify-center">
                                <button className="text-md mx-3 text-white p-3 bg-red-500 hover:bg-red-200 rounded-md" onClick={() => { handleRemove(pr.productId)}}>Remove from cart</button>
                                <button className="text-md mx-3 p-3 text-white bg-green-500 hover:bg-green-200 rounded-md" onClick={() => { updateModal(pr) }}>Buy</button>
                            </div>

                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}
