import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/HomePage/HomePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        <Route exact path='/' element={<HomePage/>}></Route>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
