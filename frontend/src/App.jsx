import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/HomePage/HomePage'
import About from './Components/About/About'
import Category from './Components/Categories/Category'
import EachCategory from './Components/Categories/EachCategory'
import IndividualProduct from './Components/Product/IndividualProduct'
import Cart from './Components/Cart/Cart'
import ContactUs from './Components/ContactUs/ContactUs'
import PreviousOrders from './Components/PreviousOrders/PreviousOrders'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    
      <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        <Route exact path='/' element={<HomePage/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/category' element={<Category/>}></Route>
        <Route exact path='/category/:categoryname' element={<EachCategory/>}></Route>
        <Route exact path='/product/:id' element={<IndividualProduct/>}></Route>
        <Route exact path='/cart' element={<Cart/>}></Route>
        <Route exact path='/contactus' element={<ContactUs/>}></Route>
        <Route exact path='/previousorders' element={<PreviousOrders/>}></Route>



      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
