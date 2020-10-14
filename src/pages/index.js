import React, {useState} from 'react'
import SideBar from '../components/Sidebar';
import NavBar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Info from '../components/InfoSection';
import {homeObjOne, homeObjThree, homeObjTwo} from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle =  () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle} /> 
        <HeroSection />
        <Info {...homeObjOne}/>
        <Info {...homeObjTwo}/> 
        <Services />
        <Info {...homeObjThree}/> 
        <Footer />
        </>
    )
}

export default Home
