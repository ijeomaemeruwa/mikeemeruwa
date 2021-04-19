import React from 'react'
import Contact from './Contact'
import Socials from './Socials'

const Footer = () => {
    return (
    <>
    <footer className="bg-dark" style={{height: '80vh'}}>
      <div className="h-full">
      <Contact />
      <Socials /> 
      </div>   
    </footer>      
    </>
    )
}

export default Footer
