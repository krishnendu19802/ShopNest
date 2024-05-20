
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Carousel from './Carousel'
import Cards from './Cards'
import LongPage from './LongPage'
import Footer from '../Footer/Footer'

export default function HomePage() {
  return (
    <div className='bg-gradient-to-b from-blue-200 via-pink-300 to-gray-900 '>
      <Navbar/>
      <Carousel/>
      <LongPage/>
      <hr className='bg-white ' />
      <Cards/>
      <Footer/>
    </div>
  )
}
