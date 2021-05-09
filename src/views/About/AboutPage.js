import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../Footer/Footer'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import avi from '../../assets/mikeemeruwa.jpg'
import Fade from 'react-reveal/Fade';


const AboutPage = () => {

  return (
    <>
   <div>
    <Nav />
    <div className="bg-darkAccent h-full pb-10">
      <Fade left cascade>
      <h2 className="font-delta text-xl md:text-5xl xl:text-6xl pl-4 pb-8 pt-10 text-white text-center">
        Heyy, It's Mike -
      </h2>
      </Fade>

    <div className="flex flex-wrap justify-center items-center mx-auto py-8">
      <div style={{maxWidth: '400px'}} className="px-2">
      <LazyLoadImage 
        src={avi} 
        effect="blur" 
        alt="mike-emeruwa"
        className="w-full h-full"
       />
      </div>
      <div className="text-white text-base md:text-base md:pl-5 tracking-wider font-poppins text-left w-full px-2 pt-2 md:w-2/4">
          <p className="leading-loose mb-8">
          I am a copywriter, web content writer, technical writer, and SEO expert with skills in creating engaging web content, editing, and proofreading.
          My background in English & literature allows me to navigate the aspects of English such as grammar and comprehension with ease.
          I create sublime work when I combine my creativity and authenticity with the fundamentals of any of my aforementioned skills.
          </p>
          <p className="leading-loose">
          I've published over 40 articles, copy, and web content combined in the past year and I've also garnered more than 800 active readers in my blog using SEO.
          I love to learn and the process of researching unfamiliar topics excites me.
          </p>
      </div>
    </div>
    </div>
    <Footer />
    </div>
    </>
    )
}

export default AboutPage
