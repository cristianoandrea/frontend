import React, {useState} from 'react'
import Navbar from './../components/Navbar';
import Sidebar from './../components/Sidebar';
import MainSection from './../components/MainSection';
import { BrowserRouter as Router} from 'react-router-dom'
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
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
    </>

    )
}

export default Home