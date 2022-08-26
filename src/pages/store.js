import React, { useState } from 'react'
import Navbar from '../components/HomePage/Navbar'
import Sidebar from '../components/HomePage/Sidebar'
import Categories from '../components/StorePage/Categories';

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
      

      
    </div>
  )
}

export default StorePage