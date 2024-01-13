import React from 'react'
import  AOS  from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Gsaptext from '../components/Gsaptext'
import Services from './Services'



const Homepage = () => {
    useEffect(()=>{
        AOS.init({duration: 1800})
    })
  return (
    
    

    
    <div className=' w-full h-full'>
        <div style={{
            backgroundImage: `url(${'images/elswag.jpg'})`
        }}
        className=' w-full h-[600px] md:h-[900px] bg-cover lg:bg-cover bg-center bg-no-repeat'>
        
            <div className=' w-full h-[600px]  md:h-[900px] flex flex-col text-center items-center justify-center' data-aos='fade-up'>
           
            <p className='max-w-[450px] text-[16px] md:text-[22px] font-Kanit md:max-w-[750px] text-white px-6'>Elswag is a Nigerian independent afrobeat producer, songwriter and mix engineer based in Luxembourg. He is set to bring
            afro fusion sounds to the Luxembourgish music industry.
            </p>

           
            

            </div>
           
        
        </div>

        <div style={{
            backgroundImage: `url(${'images/gradientone.png'})`
        }}
        className=' w-full h-full bg-cover lg:bg-cover bg-center bg-no-repeat'>
            <div className=' w-full  flex flex-col text-center items-center pt-8'>

            <h1 className='text-[30px] md:text-[45px] text-white font-Dancing mb-3 text-bold'>Music</h1>

            <p className='text-[16px] px-6 max-w-[450px] md:max-w-[750px] md:text-[22px] text-white font-Kanit text-bold mb-14' data-aos='fade-up'>
                Let me take you on a journey which promises to be filled with sonic ecstasy
            </p>

            <Gsaptext/>

            <button className='text-[#eba95d] bg-white font-bold text-[14px] md:text-[18px] rounded-full hover:text-white border-[2px] hover:bg-[#eba95d] border-white hover:border-white px-8 py-2 md:w-[200px] md:py-3 md:px-8 w-[120px] flex items-center justify-center mt-20 mx-auto md:mx-0'>
                Explore
            </button>

            <h1 className='text-[30px] md:text-[45px] text-white font-Dancing mt-10 mb-6 text-bold' data-aos='fade-up'>New Release</h1>

            

            <img src='images/isolation.jpg' className='w-2/3 h-2/5 md:w-1/2 lg:w-2/5 md:h-[400px] shadow-md rounded-full md:rounded-xl border-[4px] md:border-[8px] border-white' data-aos='fade-up' />
            
            <h3 className='text-[22px] md:text-[35px] text-center text-white mt-3 font-Kanit  text-bold' data-aos='fade-right'>Isolation EP</h3>
            <button className='text-[#eba95d] bg-white font-bold text-[14px] md:text-[18px] rounded-full hover:text-white border-[2px] hover:bg-[#eba95d] border-white hover:border-white px-8 py-2 md:w-[200px] md:py-3 md:px-8 w-[120px] flex items-center justify-center my-3 mx-auto md:mx-0' data-aos='fade-left'>
                Listen
            </button>
            <h2 className='text-[18px] text-white my-2 font-Kanit text-bold'>Available on:</h2>
            <div className='flex w-full items-center justify-center mx-auto pt-2 pb-6'>
            
                <a className=''>
                <FontAwesomeIcon icon={['fab', 'apple']} size='2x' color='white' className='mx-10' data-aos='fade-right'/>
                </a>

                <a>
                <FontAwesomeIcon icon={['fab', 'spotify']} size='2x' color='green' className='rounded-full bg-white' data-aos='fade-up'/>
                </a>

                <a>
                <FontAwesomeIcon icon={['fab', 'youtube']} size='2x' color='red' className=' mx-10' data-aos='fade-left'/>
                </a>

            </div>
            
            
            </div>

            


        </div>
        
    </div>
  )
}

export default Homepage