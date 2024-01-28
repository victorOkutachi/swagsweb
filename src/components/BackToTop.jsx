import React, { useState, useEffect } from 'react'
import { FaAngleDoubleUp } from 'react-icons/fa'

const BackToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        })
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
  return (
    <div>{showScrollTopButton && <FaAngleDoubleUp size={40} color='#eba95d' className=' fixed bottom-[15px] right-[20px] h-[60px] w-[60px] shadow-lg border-[2px] bg-white cursor-pointer rounded-full ' onClick={scrollTop} data-aos='fade-up'/>}</div>
  )
}

export default BackToTop