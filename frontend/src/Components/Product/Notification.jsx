import React, { useState, useEffect } from 'react';
import './Notification.css'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
const Notification = ({ message, status,duration = 1500 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [message, duration]);
    console.log(isVisible)
    return (
        <>
        {isVisible && status && (
            <div className="fixed top-48 w-1/3 z-50 bg-gradient-to-r from-green-400 to-green-200 rounded-md shadow-lg  right-10 p-4  text-white shadow-md">
                <div className="relative text-white ">
                    <div className="flex items-center pb-4">
                        <CheckCircleIcon className="w-6 h-6 text-white" />
                        {message}
                    </div>

                    <div
                        className="absolute bottom-0 left-0 h-1 bg-green-800"
                        style={{
                            animation: `progress ${duration}ms linear`,
                        }}
                    />
                </div>
            </div>
        )}

        {isVisible && !status && (
            <div className="fixed top-48 w-1/4 z-50 bg-gradient-to-r from-red-400 to-red-200 rounded-md shadow-lg  right-10 p-4  text-white shadow-md">
                <div className="relative text-white ">
                    <div className="flex items-center pb-4">
                        <ExclamationCircleIcon className="w-6 h-6 text-white" />
                        {message}
                    </div>

                    <div
                        className="absolute bottom-0 left-0 h-1 bg-red-800"
                        style={{
                            animation: `progress ${duration}ms linear`,
                        }}
                    />
                </div>
            </div>
        )}
        </>
    );
};

export default Notification;
