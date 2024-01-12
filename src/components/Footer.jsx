import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'
import { SocialIcon } from 'react-social-icons'
const Footer = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center my-4'>
        <h1 className='text-[#eba95d] font-Whisper text-[24px] lg:text-[24px]'>IamElswag</h1>
      <div className='flex flex-col my-3 md:flex-row'>
        <ul className='flex flex-col md:flex-row'>
        <li className='px-4 py-1'>Music</li>
        <li className='px-4 py-1'>Services</li>
        <li className='px-4 py-1'>Bookings</li>
        <li className='px-4 py-1'>Subscribe</li>
        </ul>
       
        
        </div>


         <div className='my-4'>
          <SocialIcon url='https://www.instagram.com/iamelswag?igsh=MTJleHBncHg3M212Mg%3D%3D&utm_source=qr' className='mx-4'/>
          <SocialIcon url='https://www.tiktok.com/@iam_elswag?_t=8ihLw9abz8f&_r=1' className='mx-4'/>
        </div>
        
        <div className=' flex justify-center items-center font-semibold pb-4'><FaRegCopyright/> All rights reserved 2024</div>
    </div>
  )
}

export default Footer