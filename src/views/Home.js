import React, {useState, useEffect} from 'react'
import Nav from '../components/Nav'
 import {
    Intro, 
    AboutHome, 
    PortfolioSection,
    Footer
} from './index'

 
 const Home = () => {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      setTimeout(() => {
         setIsLoading(true)
      }, 500)
     }, [])

    return (
    <>
    {
        !isLoading ? 
        (<span>Loading...</span>) :

        (<main className="w-full">
            <Nav />
            <Intro />
            <AboutHome />  
            <PortfolioSection />  
            <Footer /> 
        </main>)
    }
    </>
)}
 
 export default Home
 