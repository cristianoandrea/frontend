import React, { useState } from 'react'
import Footer from '../components/HomePage/Footer';
import Navbar from '../components/HomePage/Navbar'
import Sidebar from '../components/HomePage/Sidebar'
import Categories from '../components/StorePage/Categories';
import Products from '../components/StorePage/PopProducts';
import Slider from '../components/StorePage/Slider';



const StorePage = () => {

  const[isOpen, setIsOpen] = useState(false);

  const toggle = ()=> {
      setIsOpen(!isOpen)
  }

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Slider />
      <Categories />
      <Products />
      <Footer />
      
    </div>
  )
}

export default StorePage