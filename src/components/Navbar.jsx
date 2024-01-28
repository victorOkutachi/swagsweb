import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { listItems } from '../data'


const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
        
    }

  return (
    <div className='flex w-full h-12 items-center justify-between  bg-gray-300 p-10 absolute shadow-sm'>
        <div>
            <h1 className='text-white font-Whisper text-[28px] lg:text-[35px]'>IamElswag</h1>
       
        </div>
       
        

        <ul className='hidden grid-cols-5 col-span-4 items-center md:flex '>
            
            <li className='px-2 text-[8px]'>
              <p className='text-[10px] lg:text-[13px] font-Kanit text-white font-medium uppercase tracking-widest cursor-pointer relative '>
                Music
              </p>
            </li>

            <li className='px-2 text-[8px]'>
              <p className='text-[10px] lg:text-[13px] font-Kanit text-white font-medium uppercase tracking-widest cursor-pointer relative '>
                Services
              </p>
            </li>


            <li className='px-2 text-[8px]'>
              <p className='text-[10px] lg:text-[13px] font-Kanit text-white font-medium uppercase tracking-widest cursor-pointer relative '>
                Support
              </p>
            </li>

            <li className='px-2 text-[8px]'>
              <p className='text-[10px] lg:text-[13px] font-Kanit text-white font-medium uppercase tracking-widest cursor-pointer relative '>
                Contact
              </p>
            </li>
         
        </ul>
     
        <div onClick={handleMenu} className='block md:hidden z-10'>
             {menu ? <AiOutlineClose color='orange' size={20} /> : <HiOutlineMenuAlt2 color='white' size={20}/>}     
        </div>
        <div className={menu ? 'absolute left-0 top-0 w-full h-screen flex flex-col items-center justify-center bg-white ease-in-out duration-500 text-[#eba95d]' : 'fixed left-[-100%]'}>
                
                <ul className='uppercase p-4 '>
                    
                    
                    <li className='py-2 text-xl font-medium'>Music</li>
                    <li className='py-2 text-xl  font-medium'>Services</li>
                    <li className='py-2 text-xl  font-medium'>Bookings</li>
                    <li className='py-2 text-xl  font-medium'>Subscribe</li>
                    

                </ul>
            </div>
    </div>
  )
}

export default Navbar