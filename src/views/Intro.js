import React from 'react'
import {Link} from 'react-router-dom'
import {BiDownArrow} from 'react-icons/bi'
import Pulse from 'react-reveal/Pulse';

const Intro = () => {
    return (
    <>
    <section className="bg-primary intro">
    <div className="flex flex-col justify-center mx-auto items-center h-full pt-2 lg:pt-11">
      <h4 className="text-base md:text-xl font-medium font-poppins text-white pb-8 tracking-wider">Writer - Curator - Strategist</h4>
      <Pulse>
      <h1 className="w-11/12 md:w-4/6 text-2xl md:text-4xl xl:text-6xl text-center font-extrabold text-white font-poppins tracking-wider">
        A content curator with a passion for storytelling
      </h1> 
      </Pulse>

      <p 
        className="flex text-center text-grey items-center text-base font-semibold font-poppins tracking-wider pt-10 border-b-2 border-grey hover:text-white hover:border-white" 
        style={{width: '133px'}}
      >
        <Link to="/about">More About Me</Link>
      </p>

    <div className="mx-auto mt-6 md:mt-10">  
      <BiDownArrow className="text-grey text-xl md:text-3xl scroll__down" />
    </div>     
    </div>
    </section>      
    </>
    )
}

export default Intro
