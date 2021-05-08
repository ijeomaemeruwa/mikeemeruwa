import React from 'react'
import Nav from '../components/Nav'
 import {
    Intro, 
    AboutHome, 
    PortfolioSection,
    Footer
} from './index'

 
 const Home = () => {

    return (
    <>
   <main className="w-full">
            <Nav />
            <Intro />
            <AboutHome />  
            <PortfolioSection />  
            <Footer /> 
        </main>
    </>
)}
 
 export default Home
 