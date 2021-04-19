import React, { useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use'
import { ImArrowUp2 } from 'react-icons/im'

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll()
    const [visibility, setVisibility] = useState(false)

    useEffect(() => {
    if(pageYOffset > 400){
        setVisibility(true)
    }else{
        setVisibility(false)
    }
    }, [pageYOffset])

    const handleScroll = () => window.scrollTo({ top: 0, behavior: "smooth"})

    if(!visibility) {
        return false;
    }

    return (
    <>
    <div className="scroll text-center" onClick={handleScroll}>
     <ImArrowUp2 className="icon flex mx-auto my-4 text-center items-center justify-center" />     
    </div>      
    </>
    )
}

export default ScrollToTop
