import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { useNavigate, useParams } from 'react-router-dom';
import Notification from './Notification';

import Modal from './Modal';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthProvider';


export default function IndividualProduct() {
    let { categoryname } = useParams()
    console.log(categoryname)
    const {isAuthenticated}=useContext(AuthContext)
    const [message, setMessage] = useState({status:false, mess:''});
    const [modalStatus,setModalStatus]=useState(false)
    const {id}=useParams()
    const [product,setProduct] =useState({

        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    }) 
    const navigate=useNavigate()

    console.log(id)
    const updateModal=()=>{
        setModalStatus(st=>!st)
    }

    const getproduct=()=>{
        axios.get(`http://localhost:8000/products/${id}`,{category:categoryname}).then((result)=>{
            setProduct(result.data)
        }).catch((error)=>{
            console.log(error)
        })
        
    }

    useEffect(()=>{
        getproduct()
    },[])
    const handleAddtoCart=()=>{
        if(!isAuthenticated[0]){
            // navigate('/')
            showNotification(false,'You need to login first')
            return
        }
        axios.post('http://localhost:8000/addcart',{
            id:isAuthenticated[1].id,
            productId:product.id,
            quantity:1,
            image:product.image,
            price:product.price,
            title:product.title
        }).then((result)=>{
            showNotification(true,'Added to cart')
        }).catch((error)=>{
            if(error.response.data.message)
                showNotification(false,error.resposne.data.message)
            else
            showNotification(false,error.message)

        })

    }
   
    const showNotification = (st,mes) => {
        setMessage({status:st,mess:mes});
        console.log('reached here')
        setTimeout(() => {
            setMessage({status:false, mess:''});
            
        }, 3000); // Reset message after 5 seconds to allow re-triggering
    };

    const stars = (rating) => {
        const flooredRating = Math.floor(rating);
        const totalStars = 5;

        return (
            <div className="flex items-center">
                {Array.from({ length: flooredRating }, (_, index) => (
                    <StarSolid key={index} className="text-yellow-500 w-6 h-6" />
                ))}
                {Array.from({ length: totalStars - flooredRating }, (_, index) => (
                    <StarOutline key={index + flooredRating} className="text-gray-300 w-6 h-6" />
                ))}
            </div>
        );
    }
    
    return (
        <div>
            <Navbar />
            <div className="h-16"></div>

            <div className="h-screen overflow-auto md:overflow-hidden  p-4 bg-gradient-to-b from-blue-200 via-pink-300 to-gray-900 w-full ">
                
                <div className="md:h-4/5 mt-20 w-full md:w-3/4 mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row pb-8 md:pb-0 ">
                    <div className="w-full md:w-1/2 w-full flex justify-center ">
                        <img src={product.image} alt={product.title} className=" p-4 h-72 w-72 md:h-auto md:w-auto  object-cover" />
                    </div>
                    <div className="w-full md:w-2/3 w-full  flex flex-col justify-center  md:border-l-2 text-2xl">
                        <div className=" px-3">
                            <h1 className="text-2xl font-semibold mb-2 md:text-left text-center">{product.title}</h1>
                            <p className="text-gray-700 md:text-left text-center text-sm">{product.description}</p>
                        </div>
                        <div className="price_and_ratings px-3 my-4  ">
                            <h1 className='font-bold text-lg text-center md:text-left'>Rs. {parseInt(product.price)}</h1>
                            <p className='flex justify-center md:justify-start'>{stars(product['rating'].rate)}({product['rating'].count})</p>
                        </div>
                        <Notification message={message.mess} duration={3000} status={message.status} />
                        <div className="mt-8 flex justify-center">
                            <button className="text-md mx-3 p-3 bg-yellow-500 hover:bg-yellow-200 rounded-md" onClick={()=>{handleAddtoCart()}}>Add to cart</button>
                            <button className="text-md mx-3 p-3 bg-green-500 hover:bg-green-200 rounded-md" onClick={updateModal}>Buy</button>
                        </div>
                        <Modal modalStatus={modalStatus} updateModal={updateModal} product={{...product,productId:product.id}} />

                    </div>
                </div>
            </div>
        </div>
    )
}
