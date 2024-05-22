import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Cards = () => {
    const cards = [
        { name: "women's clothing", image: 'src/assets/cr-1.jpg' },
        { name: "men's clothing", image: 'src/assets/cr-2.jpg' },
        { name: "jewelery", image: 'src/assets/cr-3.jpg' },
        { name: "electronics", image: 'src/assets/electronics.jpg' },


    ];



    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const nextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div className="container mx-auto p-4">

            <h2 className="text-2xl font-bold text-white text-center">Categories</h2>


            {/* Cards container for normal view */}
            <div className="hidden md:flex space-between md:space-x-4 overflow-hidden">


                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`w-1/4 flex-shrink-0 `}>
                        <Link to={`/category/${card.name}`}>
                            <div className=" p-4 rounded-md text-center transition-transform duration-500  transform hover:scale-105 object-cover flex flex-col text-white justify-center">
                                <img src={card.image} alt={card.name} className="w-72 h-72 object-cover mb-4 rounded-md" />
                                <h2 className="text-xl font-semibold text-center text-white xl:mr-12">{card.name}</h2>
                            </div>
                        </Link>
                    </div>
                ))}

            </div>

            {/* Cards for mobile view */}
            <div className="flex md:hidden space-between md:space-x-4 overflow-hidden items-center justify-between">

                <button onClick={prevCard} className="bg-transparent text-white px-4 py-2 rounded rounded-full h-12 w-12 flex items-center justify-center">
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`w-3/4 ${index === currentCardIndex ? 'flex justify-center' : 'hidden'} flex-shrink-0 `}>
                        <Link to={`/category/${card.name}`}>

                            <div className=" p-4 shadow-md rounded-md text-center transition-transform duration-500  transform hover:scale-105">
                                <img src={card.image} alt={card.name} className="w-full h-48 object-cover mb-4 rounded-md shadow-md" />
                                <h2 className="text-xl font-semibold">{card.name}</h2>
                            </div>
                        </Link>
                    </div>
                ))}
                <button onClick={nextCard} className="bg-transparent text-white px-4 py-2 rounded rounded-full h-12 w-12 flex items-center justify-center">
                    <ChevronRightIcon className="w-6 h-6" />
                </button>

            </div>
        </div>
    );
};

export default Cards;
