import React from 'react'
import {articles} from '../../data/articles'
import Card from '../../components/Card'
import Footer from '../Footer/Footer'
import Nav from '../../components/Nav'
import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {TiArrowLeftThick} from 'react-icons/ti'


const Portfolio = () => {

return (
<>
<div>
    <Nav />
    <section>
    <Link to="/">
      <div className="flex items-center font-delta text-2xl text-dark md:text-5xl pb-4 w-2/5 pt-6 pl-2 hover:text-primary">
       <span><TiArrowLeftThick /></span>
       <h2>Back</h2> 
      </div>
    </Link>
    <div className="flex flex-wrap w-full justify-center mx-auto mt-11">
      {
      articles.map(data => (
          <a href={data.link} target="_blank"  rel="noopener noreferrer" key={data.id}>
            <Card>
              <div>
              <LazyLoadImage 
                src={data.image} 
                effect="blur" 
                alt={data.title}
                className="w-full"
              />
              <div className="w-full md:w-11/12 py-3 pl-2">
                <small className="capitalize font-manrope text-sm md:text-base text-accent">
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
    </section>
    
    <Footer />
    </div>
</>
)
}

export default Portfolio
