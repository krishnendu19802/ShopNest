import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


export default function About() {

    return (
        <>
            <Navbar />
            <div className="h-16"></div>
            <div className="bg-gradient-to-b from-blue-200 via-pink-300 to-gray-900 py-12">
                <div className="container mx-auto px-4">
                    <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">About Us</h1>

                        {/* Mission Section */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
                            <p className="text-gray-700 leading-relaxed">
                                At ShopNest, our mission is to provide the highest quality products that bring joy, convenience, and value to our customers. We believe in delivering exceptional customer service and building lasting relationships with our community.
                            </p>
                        </section>

                        {/* History Section */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our History</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Founded in 2023, ShopNest started with a small team of passionate individuals who believed in creating a better shopping experience. Over the years, we have grown into a leading e-commerce platform, offering a wide range of products and services to customers around the world.
                            </p>
                        </section>

                        {/* Team Section */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Team</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our team is made up of dedicated professionals who are committed to providing the best possible service. From our customer support representatives to our product development team, everyone at ShopNest works together to ensure that our customers have a seamless and enjoyable shopping experience.
                            </p>
                        </section>

                        {/* Testimonials Section */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Customer Testimonials</h2>
                            <div className="space-y-4">
                                <blockquote className="bg-gray-100 bg-opacity-80 p-4 rounded-lg shadow">
                                    <p className="text-gray-700 leading-relaxed">"The products I received from ShopNest exceeded my expectations. The quality is fantastic, and the customer service is top-notch. I will definitely be a returning customer!"</p>
                                    <footer className="mt-2 text-gray-600">- Jane Doe</footer>
                                </blockquote>
                                <blockquote className="bg-gray-100 bg-opacity-80 p-4 rounded-lg shadow">
                                    <p className="text-gray-700 leading-relaxed">"Shopping at [YourCompany] has been a wonderful experience. The website is easy to navigate, and the shipping is fast. Highly recommend to others."</p>
                                    <footer className="mt-2 text-gray-600">- John Smith</footer>
                                </blockquote>
                            </div>
                        </section>

                        {/* Call to Action Section */}
                        <section className="text-center">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Join Our Community</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We invite you to join our growing community of satisfied customers. Follow us on social media, subscribe to our newsletter, and be the first to know about new products and special offers.
                            </p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105">
                                Learn More
                            </button>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>

        </>

    )
}
