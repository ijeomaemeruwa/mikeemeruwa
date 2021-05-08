import React from 'react'
import {featured} from '../../data/articles'
import Card from '../../components/Card'
import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Fade from 'react-reveal/Fade';


const PortfolioSection = () => {
    return (
      <>
      <section className="bg-white h-full">
          <div className="w-2/5 pt-7">
            <Fade bottom cascade>
            <h2 className="font-delta text-2xl text-dark md:text-5xl pt-11 pb-10 pl-6">
              Recent Work -
            </h2> 
            </Fade>
          </div>

        <div className="flex flex-wrap w-full justify-center mx-auto mt-6">
         {
          featured.map(data => (
          <a href={data.link} target="_blank"  rel="noopener noreferrer" key={data.id}>
            <Card>
             <div>
               <LazyLoadImage 
                src={data.image} 
                effect="blur" 
                alt={data.title}
                className="w-full"
              />
             <div className="w-full md:w-9/12 py-3 pl-1">
               <small className="capitalize font-manrope font-semibold text-sm md:text-base text-accent">
                {data.tag} - {data.client}
               </small>
               <h5 className="font-delta text-black text-base md:text-lg pt-3 tracking-wider">
                {data.title}
               </h5>
               <p className="flex items-center text-sm md:text-base font-manrope pt-4 border-b border-grey hover:border-black" style={{width: '80px'}}>
                Read More
               </p>
             </div>
          </div>
          </Card>
          </a>
           ))
         }  
        </div> 

        <Link to="/portfolio">
          <button className="btn btn__slide py-3 px-8 my-8 font-manrope font-semibold bg-white border border-black flex items-center justify-center m-auto">
            View Portfolio
          </button>
        </Link>         
        </section>  
        </>
    )
}

export default PortfolioSection
