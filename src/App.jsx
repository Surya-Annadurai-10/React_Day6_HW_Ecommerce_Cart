import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './Header/Header'
import CartHeader from './CartHeader/CartHeader'
import MainCart from './MainCart/MainCart'
import Footer from './Footer/Footer'

function App() {


  return (
    <>
    <Header />
    <CartHeader />
    <MainCart />
    <Footer />
    </>
  )
}

export default App;
