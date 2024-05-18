import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const images = [
        'src/assets/cr-1.jpg',
        'src/assets/carousel-2.jpg',

        'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
        'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className="relative w-full h-[10vh] overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-1000 object-cover ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={image} alt={`Slide ${index}`} className="w-full h-full " height={400} />
                </div>
            ))}
        </div>
    );
};

export default Carousel;
