import React, { useState, useEffect, useRef }  from 'react'
import { SocialIcon } from 'react-social-icons'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Gsaptext from '../components/Gsaptext'

import  AOS  from 'aos'
import 'aos/dist/aos.css'
import Footer from '../components/Footer'








const Homepage = () => {

    const music = useRef(null);
    const services = useRef(null);
    const support = useRef(null);

    const scrollToSection = (elementRef) => {
        const yOffset = -30;
        const targetElement = elementRef.current;

        if (targetElement) {
            const rect = targetElement.getBoundingClientRect();
            const targetTop = rect.top + window.scrollY + yOffset;

            console.log('Scrolling to:', elementRef, 'Top Position:', targetTop);

            window.scrollTo({
                top: targetTop,
                behavior: 'smooth'
            });

            // Close the menu on mobile
            if (window.innerWidth <= 768) {
                setMenu(false);
            }
        } else {
            console.error('Element reference not found:', elementRef);
        }
    };


    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)

    }

    
    


    useEffect(()=>{
        AOS.init({duration: 1800})
    })
  return (


    
    

    
    <div  className=' w-full h-full'>

        

<div id='navbar' className='flex w-full z-20 h-12 items-center justify-between  p-10 absolute shadow-sm'>
        <div>
            <h1 className='text-white font-Whisper text-[28px] lg:text-[35px]'>
                <Link to='/'>IamElswag</Link>
            </h1>
       
        </div>
       
        

        <ul className='hidden grid-cols-5 col-span-4 items-center md:flex '>
            
            <li className='px-2 cursor-pointer ' >
              <p onClick={() => scrollToSection(music)} className='text-[10px] lg:text-[13px] font-Kanit text-white font-medium uppercase cursor-pointer  '>
                Music
              </p>
            </li>

            <li className='px-2 ' >
              <p onClick={() => scrollToSection(services)} className='text-[10px] lg:text-[13px] font-Kanit text-white font-medium uppercase cursor-pointer '>
                Services
              </p>
            </li>


            <li className='px-2 ' onClick={() =>scrollToSection(support)}>
              <p className='text-[10px] lg:text-[13px] font-Kanit text-white font-medium uppercase cursor-pointer '>
                Support
              </p>
            </li>

            <li className='px-2'>
              <p className='text-[10px] lg:text-[13px] font-Kanit text-white font-medium uppercase cursor-pointer '>
                <Link to='/contact'>
                Contact
                </Link>
               
              </p>
            </li>
         
        </ul>
     
        <div onClick={handleMenu} className='block md:hidden z-10'>
             {menu ? <AiOutlineClose color='orange' size={20} /> : <HiOutlineMenuAlt2 color='white' size={20}/>}     
        </div>
        <div className={menu ? 'absolute left-0 top-0 w-full h-screen flex flex-col items-center justify-center bg-white ease-in-out duration-500 text-[#eba95d]' : 'fixed left-[-100%]'}>
                
                <ul className='uppercase p-4 '>
                    
                    
                    <li onClick={() => scrollToSection(music)} className='py-2 text-xl font-medium'>Music</li>
                    <li onClick={() => scrollToSection(services)} className='py-2 text-xl  font-medium'>Services</li>
                    <li onClick={() => scrollToSection(support)} className='py-2 text-xl  font-medium'>Support</li>
                    <li className='py-2 text-xl  font-medium'><Link to='/contact'>Contact</Link></li>
                    

                </ul>
            </div>
    </div>



       
        {/* Hero section*/}

        <div id='hero' style={{
            backgroundImage: `url(${'images/elswag.jpg'})`
        }}
        className=' w-full h-[600px] md:h-[900px] bg-cover lg:bg-cover bg-center bg-no-repeat'>
        
            <div className=' w-full h-[600px]  md:h-[900px] flex flex-col text-center items-center justify-center' data-aos='fade-up'>
           
            <p className='max-w-[450px] text-[16px] md:text-[22px] font-Kanit md:max-w-[750px] text-white px-6'>Elswag is a Nigerian independent afrobeat producer, songwriter and mix engineer based in Luxembourg. He is set to bring
            afro fusion sounds to the Luxembourgish music industry.
            </p>

           
            

            </div>
           
        
        </div>





         {/* Music section*/}


        <div id='music' ref={music} style={{
        backgroundImage: `url(${'images/gradientone.png'})`
    }}
    className=' w-full h-full bg-cover lg:bg-cover bg-center bg-no-repeat'>
        <div className=' w-full  flex flex-col text-center items-center pt-8'>

        <h1 className='text-[30px] md:text-[45px] text-white font-Dancing mb-3 text-bold'>Music</h1>

        <p className='text-[16px] px-6 max-w-[450px] md:max-w-[750px] md:text-[22px] text-white font-Kanit text-bold mb-14' data-aos='fade-up'>
            Let me take you on a journey which promises to be filled with sonic ecstasy
        </p>

        <Gsaptext/>

        <a href='https://open.spotify.com/artist/2REl4p864PAPreRRF3LMmy?si=V_dNwt4DSha2STTdKXe5vg' target={'_blank'}>
        <button className='text-[#eba95d] bg-white font-bold text-[14px] md:text-[18px] rounded-full hover:text-white border-[2px] hover:bg-[#eba95d] border-white hover:border-white px-8 py-2 md:w-[200px] md:py-3 md:px-8 w-[120px] flex items-center justify-center mt-20 mx-auto md:mx-0'>
            Explore
        </button>
        </a>

        <h1 className='text-[30px] md:text-[45px] text-white font-Dancing mt-10 mb-6 text-bold' data-aos='fade-up'>New Release</h1>

        

        <img src='images/isolation.jpg' className='w-2/3 h-2/5 md:w-1/2 lg:w-2/5 md:h-[400px] shadow-md rounded-full md:rounded-xl border-[4px] md:border-[8px] border-white' data-aos='fade-up' />
        
        <h3 className='text-[22px] md:text-[35px] text-center text-white mt-3 font-Kanit  text-bold' data-aos='fade-right'>Isolation EP</h3>
        
        <a href='https://open.spotify.com/artist/2REl4p864PAPreRRF3LMmy?si=V_dNwt4DSha2STTdKXe5vg' target={'_blank'}>
        <button className='text-[#eba95d] bg-white font-bold text-[14px] md:text-[18px] rounded-full hover:text-white border-[2px] hover:bg-[#eba95d] border-white hover:border-white px-8 py-2 md:w-[200px] md:py-3 md:px-8 w-[120px] flex items-center justify-center my-3 mx-auto md:mx-0' data-aos='fade-left'>
            Listen
        </button>
        </a>
       
        <h2 className='text-[18px] text-white my-2 font-Kanit text-bold'>Available on:</h2>
        <div className='flex w-full items-center justify-center mx-auto pt-2 pb-6'>
        
            <a className='' href='https://music.apple.com/lu/artist/elswag/1553604956' target={'_blank'}>
            <FontAwesomeIcon icon={['fab', 'apple']} size='2x' color='white' className='mx-10' data-aos='fade-right'/>
            </a>

            <a href='https://open.spotify.com/artist/2REl4p864PAPreRRF3LMmy?si=V_dNwt4DSha2STTdKXe5vg' target={'_blank'}>
            <FontAwesomeIcon icon={['fab', 'spotify']} size='2x' color='green' className='rounded-full bg-white' data-aos='fade-up'/>
            </a>

            <a href='https://youtube.com/channel/UCrUWQBJB9Hc1pmYIXLNIYjQ?si=EaHyROQnlOzcfrwl' target={'_blank'}>
            <FontAwesomeIcon icon={['fab', 'youtube']} size='2x' color='red' className=' mx-10' data-aos='fade-left'/>
            </a>

        </div>
        
        
        </div>

        


    </div>



     {/* Services section*/}

     <div id='services' ref={services}  className='w-full h-full flex flex-col items-center'>
        <div className='w-full  flex flex-col text-center items-center pt-14'>
            <h2 className='text-[30px] md:text-[45px] text-[#eba95d] font-Dancing mb-3 text-bold' data-aos='fade-up'>Services</h2>
            <p className='max-w-[450px] text-[16px] md:text-[22px] font-Kanit md:max-w-[750px] px-6' data-aos='fade-up'>We offer a wide range of services including but not limited to;</p>
        </div>

        <div>
            <div className='w-full  flex flex-col text-center items-center pt-8' data-aos='fade-up'>
                <h2 className='text-[20px] text-[#eba95d] md:text-[35px] text-center my-3 font-Dancing mx-10 text-bold'>Concerts And Birthday Performance</h2>
                <p className='max-w-[450px] text-[16px] md:text-[22px] font-Kanit md:max-w-[750px] px-6'>
                    Book IamElswag to perform at your concerts and birthday parties by clicking the button below.
                </p>
                <button className='text-white bg-[#eba95d] font-bold text-[14px] md:text-[18px] rounded-full hover:text-white border-[2px] hover:bg-[#eba95d] border-white hover:border-white px-10 py-3 md:w-[200px] md:py-3 md:px-8 w-[120px] flex items-center justify-center my-5 mx-auto md:mx-0'><Link to='/contact'>Book</Link></button>
            </div>

            <div className='w-full  flex flex-col text-center items-center pt-8' data-aos='fade-up'>
                <h2 className='text-[20px] text-[#eba95d] md:text-[35px] text-center my-3 font-Dancing mx-10 text-bold'>Special Birthday Songs</h2>
                <p className='max-w-[450px] text-[16px] md:text-[22px] font-Kanit md:max-w-[750px] px-6'>Want to make your birthday special and memorable? Then contact IamElswag to write,produce and perform a special and unique birthday song 
                    just for you.
                </p>
                <button className='text-white bg-[#eba95d] font-bold text-[14px] md:text-[18px] rounded-full hover:text-white border-[2px] hover:bg-[#eba95d] border-white hover:border-white px-10 py-3 md:w-[200px] md:py-3 md:px-8 w-[120px] flex items-center justify-center my-5 mx-auto md:mx-0'><Link to='/contact'>Book</Link></button>
            </div>
        </div>

    </div>



    {/* Support section*/}

    <div id='support' ref={support} className='flex flex-col items-center'>
    <div  style={{
        backgroundImage: `url(${'images/gradient.jpg'})`
    }}
    
    className='w-full h-full bg-cover bg-no-repeat bg-center'>
        <div className='w-full  flex flex-col text-center items-center pt-14'>
            <h2 className='text-[30px] md:text-[45px] text-[#eba95d] font-Dancing mb-3 text-bold'>Support</h2>
            <p className='max-w-[450px] text-[16px] md:text-[22px] font-Kanit md:max-w-[750px] px-6'>
             Your support is the driving force behind every 
            chord, lyric, and beat, propelling IamElswag towards new heights in his artistic journey.
            </p>


            <p className='max-w-[450px] text-[16px] md:text-[22px] py-4 font-Kanit md:max-w-[750px] px-6'>Here's how you can make a difference:</p>


           



            <div>
                <h2 className='text-[20px] md:text-[30px] text-[#eba95d] font-Dancing mb-3 text-bold'>
                    Stream IamElswag's music
                </h2>

                <p className='max-w-[450px] text-[16px] md:text-[22px] font-Kanit md:max-w-[750px] px-6'>
                Immerse yourself in the enchanting world of IamElswag's music. 
                </p>

                <div className='flex w-full items-center justify-center mx-auto pt-4 pb-6'>
            
                <a className='' href='https://music.apple.com/lu/artist/elswag/1553604956' target={'_blank'}>
                <FontAwesomeIcon icon={['fab', 'apple']} size='2x' color='grey' className='mx-10' data-aos='fade-right'/>
                </a>

                <a  href='https://open.spotify.com/artist/2REl4p864PAPreRRF3LMmy?si=V_dNwt4DSha2STTdKXe5vg' target={'_blank'}>
                <FontAwesomeIcon icon={['fab', 'spotify']} size='2x' color='green' className='rounded-full bg-white' data-aos='fade-up'/>
                </a>

                <a href='https://youtube.com/channel/UCrUWQBJB9Hc1pmYIXLNIYjQ?si=EaHyROQnlOzcfrwl' target={'_blank'}>
                <FontAwesomeIcon icon={['fab', 'youtube']} size='2x' color='red' className=' mx-10' data-aos='fade-left'/>
                </a>

            </div>


            </div>


            <div>
                <h2 className='text-[20px] md:text-[30px] text-[#eba95d] font-Dancing mb-3 text-bold'>
                Follow on Social Media:
                </h2>
                <div className='my-4'>
                    <SocialIcon url='https://www.instagram.com/iamelswag?igsh=MTJleHBncHg3M212Mg%3D%3D&utm_source=qr' className='mx-4'/>
                    <SocialIcon url='https://www.tiktok.com/@iam_elswag?_t=8ihLw9abz8f&_r=1' className='mx-4'/>
                </div>
             
            </div>


            <div>
                <h2 className='text-[20px] md:text-[30px] text-[#eba95d] font-Dancing mb-3 text-bold'>
                Share The Magic:
                </h2>

                <p className='max-w-[450px] text-[16px] md:text-[22px] font-Kanit md:max-w-[750px] px-6'>
                Word of mouth is powerful! Share your favorite IamElswag tracks on your social media, create playlists,
                 and introduce your friends and family to the incredible musical journey unfolding.
                </p>
            </div>

            <div>
                <h2 className='text-[20px] md:text-[30px] text-[#eba95d] font-Dancing py-3 text-bold'>
                Attend Live Shows:
                </h2>

                <p className='max-w-[450px] text-[16px] md:text-[22px] font-Kanit md:max-w-[750px] px-6'>
                Keep an eye out for upcoming performances and concerts.
                 Your presence in the audience adds to the electric atmosphere, creating unforgettable memories for both you and IamElswag.
                </p>
            </div>

        </div>


    </div>
    </div>



        
        <Footer/>
    </div>
  )
}

export default Homepage