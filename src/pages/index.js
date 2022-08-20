import React, {useState} from 'react'
import Navbar from './../components/HomePage/Navbar';
import Sidebar from './../components/HomePage/Sidebar';
import MainSection from './../components/HomePage/MainSection';
import { BrowserRouter as Router} from 'react-router-dom'
import InfoSection from '../components/HomePage/InfoSection';
import Services from '../components/HomePage/Services'
import Footer from '../components/HomePage/Footer'
import { homeObjOne,
     homeObjTwo,
     homeObjThree,
     homeObjFour,
     homeObjFive,
     homeObjSix } from '../components/HomePage/InfoSection/Data';


const Home = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = ()=> {
        setIsOpen(!isOpen)
    }

    return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <MainSection/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <InfoSection {...homeObjFour}/>
        <InfoSection {...homeObjFive}/>
        <InfoSection {...homeObjSix}/>
        <Services/>
        <Footer />
    </>

    )
}

export default Home