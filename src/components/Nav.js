import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <>
        <nav className="nav">
        <div className="flex justify-between items-center px-10 nav__container">
            <Link to="/">
            <h2 className="font-delta text-xl text-grey ml-8">mikeemeruwa.</h2>
            </Link>
            {/* activeClassName="activeTab" */}
            <ul className="flex font-poppins font-medium text-base text-grey">
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
