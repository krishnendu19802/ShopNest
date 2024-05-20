import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer/Footer';
export default function EachCategory() {
    // const products = [
    //     {

    //         "id": 1,
    //         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //         "price": 109.95,
    //         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //         "category": "men's clothing",
    //         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //         "rating": {
    //             "rate": 3.9,
    //             "count": 120
    //         }
    //     },
    //     {
    //         "id": 2,
    //         "title": "Mens Casual Premium Slim Fit T-Shirts ",
    //         "price": 22.3,
    //         "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    //         "category": "men's clothing",
    //         "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    //         "rating": {
    //             "rate": 4.1,
    //             "count": 259
    //         }
    //     },
    //     {
    //         "id": 3,
    //         "title": "Mens Cotton Jacket",
    //         "price": 55.99,
    //         "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    //         "category": "men's clothing",
    //         "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    //         "rating": {
    //             "rate": 4.7,
    //             "count": 500
    //         }
    //     }
    // ]

    
    const [products,setProducts]= useState([])
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
    let { categoryname } = useParams()
    console.log(categoryname)
    
    const getproducts=()=>{
        axios.post('http://localhost:8000/products',{category:categoryname}).then((result)=>{
            setProducts(result.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    

    useEffect(()=>{
        getproducts()
    },[])

    // console.log(categoryname)
    return (
        <div>
            <Navbar />
            <div className="h-16"></div>
            <div className="min-h-screen grid grid-cols-1  gap-8 p-4 bg-gradient-to-b from-blue-200 via-pink-300 to-gray-900 w-full ">
                {products.map((pr, index) => (
                    <Link to={`/product/${pr.id}`}>
                        <div className="w-full md:w-3/4 mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row transition-transform transform duration-500 hover:scale-105">
                            <div className="w-full md:w-1/3 w-full flex justify-center ">
                                <img src={pr.image} alt={pr.title} className=" p-4 w-48 h-48 object-cover" />
                            </div>
                            <div className="w-full md:w-2/3 w-full  flex flex-col justify-center md:border-l-2">
                                <div className=" px-3">
                                    <h2 className="text-2xl font-semibold mb-2 md:text-left text-center">{pr.title}</h2>
                                    <p className="text-gray-700 md:text-left text-center">{pr.description.substring(0, 80) + "..."}</p>
                                </div>
                                <div className="price_and_ratings px-3 mb-4  ">
                                    <h1 className='font-bold text-lg text-center md:text-left'>Rs. {parseInt(pr.price)}</h1>
                                    <p className='flex justify-center md:justify-start'>{stars(pr['rating'].rate)}({pr['rating'].count})</p>
                                </div>

                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Footer/>

        </div>
    )
}
