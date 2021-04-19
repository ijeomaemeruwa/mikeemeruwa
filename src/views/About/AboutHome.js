import React from 'react'
import {IoMdPaper} from 'react-icons/io'
import {IoLaptopOutline, IoCopyOutline, IoCreateOutline} from 'react-icons/io5'


const AboutHome = () => {
    return (
    <>
    <section className="bg-dark py-11 h-full">
    <div className="flex flex-wrap justify-evenly m-auto w-4/5 md:w-full h-full text-grey font-poppins">
    
    <div className="services">
      <span className="text-4xl lg:text-5xl"><IoLaptopOutline /></span>
      <h4 className="text-xs md:text-base pt-3">Web Content</h4>
    </div>

    <div className="services">
     <span className="text-4xl lg:text-5xl"><IoMdPaper /></span>
     <h4 className="text-xs md:text-base pt-3">Technical Writing</h4>
    </div>

    <div className="services">
    <span className="text-4xl lg:text-5xl"><IoCopyOutline /></span>
     <h4 className="text-xs md:text-base pt-3">Copywriting & Strategy</h4>
    </div>

    <div className="services">
    <span className="text-4xl lg:text-5xl"><IoCreateOutline /></span>
     <h4 className="text-xs md:text-base pt-3">Editing & Proofreading</h4>
    </div>
      
    </div> 
    </section>      
    </>
    )
}

export default AboutHome
