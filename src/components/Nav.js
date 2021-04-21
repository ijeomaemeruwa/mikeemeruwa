import React, {useState, useRef} from 'react'
import {Link, NavLink} from 'react-router-dom'
import Burger from './Burger/Burger'
import MobileNav from './MobileNav/MobileNav';
import { useOnClickOutside } from '../hooks';

const Nav = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));


    return (
        <>
        <nav className="nav">
        <div className="flex justify-between items-center px-10 nav__container">
            <Link to="/">
            <h2 className="font-delta text-xl text-grey ml-2 md:ml-8 hidden md:block">mikeemeruwa.</h2>
            <h2 className="font-delta text-2xl text-grey ml-2 md:hidden">m.</h2>
            </Link>

            <div ref={node}>
              <Burger open={open} setOpen={setOpen} />
              <MobileNav open={open} setOpen={setOpen} />
            </div>
            
            <ul className="font-poppins font-medium text-base text-grey hidden lg:flex">
                <NavLink to="/" className="link link__underline mr-7" >
                    Home
                </NavLink>
                <NavLink to="/about" className="link link__underline mr-7">
                    About me
                </NavLink>
                <NavLink to="/portfolio" className="link link__underline mr-7">
                    Portfolio
                </NavLink>
              <li className="mr-7 link link__underline">
                <a href="mailto:mikeemeruwa98@gmail.com" 
                  target="_blank"  rel="noopener noreferrer">
                 Contact 
                </a>
            </li>
            </ul>
        </div>         
        </nav>  
        </>
    )
}

export default Nav
