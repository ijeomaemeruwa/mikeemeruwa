import React from 'react'
import {NavLink} from 'react-router-dom'
import {
    AiFillLinkedin,
    AiFillTwitterSquare, 
    AiFillFacebook
  } from 'react-icons/ai'
import {StyledMenu} from './MobileNav.styled'


const MobileNav = ({open}) => {
    return (
    <StyledMenu open={open}>
    <div className="flex flex-col text-2xl font-delta text-black mt-11">
    <NavLink to="/" className="mobileLink mobileLink__underline mb-7 mt-11">
        Home
    </NavLink>
    <NavLink to="/about" className="mobileLink mobileLink__underline mb-7 mt-3">
        About me
    </NavLink>
    <NavLink to="/portfolio" className="mobileLink mobileLink__underline mb-7 mt-3">
        Portfolio
    </NavLink>
    <li className="mb-7 mobileLink mobileLink__underline list-none mt-3">
        <a href="mailto:mikeemeruwa98@gmail.com" 
           target="_blank"  rel="noopener noreferrer">
            Contact 
        </a>
    </li>
    <div className="flex pb-4 mt-3">
      <span className="pr-4 text-3xl text-black hover:text-dark"><AiFillLinkedin /></span>
      <span className="pr-4 text-3xl text-black hover:text-dark"><AiFillTwitterSquare /></span>
      <span className="pr-4 text-3xl text-black hover:text-dark"><AiFillFacebook /></span>
    </div>
    </div>
        
    </StyledMenu>
    )
}

export default MobileNav
