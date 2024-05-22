import { getDistance } from 'geolib';

const calculateLocation = () => {
    // console.log(process.env.REACT_APP_API_LATITUDE)
    const org = { latitude: import.meta.env.VITE_LATITUDE, longitude: import.meta.env.VITE_LONGITUDE };

    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const location = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };
                    console.log(location);
                    const distance = getDistance(location, org) / 1000; // Convert to kilometers
                    resolve(distance);
                },
                (error) => {
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            reject(new Error("User denied the request for Geolocation."));
                            break;
                        case error.POSITION_UNAVAILABLE:
                            reject(new Error("Location information is unavailable."));
                            break;
                        case error.TIMEOUT:
                            reject(new Error("The request to get user location timed out."));
                            break;
                        case error.UNKNOWN_ERROR:
                            reject(new Error("An unknown error occurred."));
                            break;
                        default:
                            reject(new Error("An unknown error occurred."));
                    }
                }
            );
        } else {
            reject(new Error("Geolocation is not supported by this browser."));
        }
    });
};

export default calculateLocation