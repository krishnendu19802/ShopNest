import React from 'react'
import { Link } from 'react-router-dom';

export default function Timeline() {
    const categories = [
        { name: "women's clothing", img: 'src/assets/cr-1.jpg' },
        { name: "men's clothing", img: 'src/assets/cr-2.jpg' },
        { name: "jewelery", img: 'src/assets/cr-3.jpg' },
        { name: "Electronics", img: 'src/assets/electronics.jpg' },


    ];

    return (
        <>
            <div className="h-16"></div>

            {/* for big screens */}

            <div className="hidden md:block container-about w-full bg-gradient-to-b from-blue-200 via-pink-300 to-gray-900 ">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
                    {categories.map((cat, index) => (
                        <div key={index} className={`mb-4  flex justify-${index % 2 === 0 ? 'start' : 'end'} w-full`}>

                            <div className={`w-1/2  ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                <Link to={`/category/${cat.name}`}>
                                    <div className="hover:shadow-lg p-4 rounded-md text-center transition-transform duration-500  transform hover:scale-105 object-cover flex flex-col text-white justify-center">
                                        <div className="img flex justify-center w-full">
                                            <img src={cat.img} alt={cat.name} className="w-72 h-72 shadow-lg object-cover mb-4 rounded-md" />
                                        </div>
                                        <h2 className="text-xl font-semibold text-center text-white ">{cat.name}</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* for small screens */}
            <div className=" flex md:hidden flex-col justify-center bg-gradient-to-b from-blue-200 via-pink-300 to-gray-900 w-full">
                {categories.map((cat, index) => (
                    <div key={index} className=" mb-4 ">
                        <Link to={`/category/${cat.name}`}>
                            <div className=" p-4  rounded-md text-center transition-transform duration-500  transform hover:scale-105 object-cover flex flex-col text-white justify-center">
                                <div className="img flex justify-center w-full">

                                    <img src={cat.img} alt={cat.name} className="w-72 h-72 shadow-lg object-cover mb-4 rounded-md" />
                                </div>
                                <h2 className="text-xl font-semibold text-center text-white ">{cat.name}</h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>

    )
}
