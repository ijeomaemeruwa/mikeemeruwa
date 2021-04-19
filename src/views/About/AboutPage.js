import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../Footer/Footer'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import avi from '../../assets/mikeemeruwa.jpg'

const AboutPage = () => {
    return (
    <>
    <Nav />
    <div className="bg-darkAccent h-full pb-10">
    <h2 className="font-delta text-3xl md:text-5xl xl:text-6xl pl-4 pb-8 pt-10 text-white">Heyy, It's Mike -</h2>

    <div className="flex flex-wrap justify-center items-center mx-auto py-8">
      <div style={{maxWidth: '450px'}} className="px-2">
      <LazyLoadImage 
        src={avi} 
        effect="blur" 
        alt="mike-emeruwa"
        className="w-full h-full"
       />
      </div>
      <div className="text-white text-base md:text-base md:pl-5 tracking-wider font-poppins text-left w-full px-2 pt-2 md:w-2/4">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          </p>  
      </div>
    </div>
    </div>
    <Footer />
    </>
    )
}

export default AboutPage
