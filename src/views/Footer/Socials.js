import React from 'react'
import {Link} from 'react-router-dom'
import {
  AiFillLinkedin,
  AiFillTwitterSquare, 
  AiFillFacebook
} from 'react-icons/ai'

const Socials = () => {
    return (
        <>
        <div className="mt-8 md:mt-10 mx-4 md:mx-11 pt-11 flex w-11/12 justify-between items-center border-t border-accent">
          <div>
            <Link to="/">
            <h2 className="font-delta text-base md:text-2xl text-white pb-4">mikeemeruwa.</h2>
            </Link>
            <p className="text-accent text-xs md:text-sm font-poppins">Copyright &#169; 2021 - mikeemeruwa</p> 
          </div> 
          <div className="flex flex-col text-white font-poppins">
             <div className="flex pb-4">
                <span className="pr-4 text-xl md:text-2xl hover:text-primary"><AiFillLinkedin /></span>
                <span className="pr-4 text-xl md:text-2xl hover:text-primary"><AiFillTwitterSquare /></span>
                <span className="pr-4 text-xl md:text-2xl hover:text-primary"><AiFillFacebook /></span>
             </div>
             <div className="flex">
               <p className="link link__underline mr-4 text-sm md:text-base">Blog</p> 
               <p className="link link__underline mr-2 text-sm md:text-base">Resume</p> 
             </div> 
          </div>     
        </div>  
        </>
    )
}

export default Socials
