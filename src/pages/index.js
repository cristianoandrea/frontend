import React, {useState} from 'react'
import Navbar from './../components/Navbar';
import Sidebar from './../components/Sidebar';
import MainSection from './../components/MainSection';
import { BrowserRouter as Router} from 'react-router-dom'
import InfoSection from '../components/InfoSection';
import Services from '../components/Services'
import { homeObjOne,
     homeObjTwo,
     homeObjThree,
     homeObjFour,
     homeObjFive,
     homeObjSix } from '../components/InfoSection/Data';
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
    </>

    )
}

export default Home