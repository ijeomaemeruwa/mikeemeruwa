import React from 'react'
import {TiArrowRightThick} from 'react-icons/ti'

const Contact = () => {
    return (
    <>
    <div className="flex flex-col justify-center items-center m-auto text-center py-11">
      <p className="text-accent text-base font-manrope font-semibold py-11">
        NEED A WRITER?
      </p>
      <div className="link link__underline font-delta text-xl md:text-5xl lg:text-6xl text-grey flex justify-center items-center">
        <h2 className="pb-3">Let's Work Together </h2>  
        <span className="pl-2 pb-1 md:pt-2"><TiArrowRightThick /></span>  
      </div>   
    </div>      
    </>
    )
}

export default Contact
