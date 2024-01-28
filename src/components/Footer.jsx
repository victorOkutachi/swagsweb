import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
const Footer = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center mt-10 bg-[#eba95d]'>
        <h1 className='text-white font-Whisper text-[24px] pt-2 lg:text-[24px]'>
        <Link to='/'>IamElswag</Link>
        </h1>
    


         <div className='my-4'>
          <SocialIcon url='https://www.instagram.com/iamelswag?igsh=MTJleHBncHg3M212Mg%3D%3D&utm_source=qr' className='mx-4'/>
          <SocialIcon url='https://www.tiktok.com/@iam_elswag?_t=8ihLw9abz8f&_r=1' className='mx-4'/>
        </div>
        
        <div className=' flex justify-center items-center text-white font-semibold pb-4'><FaRegCopyright/>IamElswag All rights reserved 2024</div>
    </div>
  )
}

export default Footer