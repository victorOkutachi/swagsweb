import React, { useRef } from 'react'
import { IoArrowBack } from "react-icons/io5"
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com'
import Footer from '../components/Footer';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n76j26e', 'template_p4xnsvl', form.current, 'GUosyA-rYElABXvY8')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <div id='container' className='flex flex-col font-kanit'>
      <Link to='/'>
      <IoArrowBack size={40} color='#eba95d' className='w-[40px] h-[40px] mt-10 rounded-full border-[2px] mx-4'/>
      </Link>
    <div className='w-full h-2/5 flex flex-col items-center'>
      
      <div className='w-full h-3/4 flex justify-center mx-auto mb-4 items-center p-4 sm:mt-32'>
        
      <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-2xl text-[#eba95d] md:text-4xl font-bold inline border-b-4 border-[#eba95d] '>Contact</p>
            
        </div>
        <input className='border-[1px] border-[#d3d3d3] p-2' type="text" name='subject' placeholder='Subject' />
        <input className=' p-2 mt-4 border-[1px] border-[#d3d3d3]' type="text" placeholder='Name' name='name'/>
        <input className='my-4 p-2 border-[1px] border-[#d3d3d3]' type="email" placeholder='Email' name='email'/>
        <textarea className='border-[1px] border-[#d3d3d3] p-2' name='message' rows="10" placeholder='Message'></textarea>
        <button type='submit' className='text-[#eba95d] font-bold hover:text-white border-[2px] border-[#eba95d] hover:bg-[#eba95d] hover:border-[#eba95d] px-4 py-2 my-8 mx-auto flex items-center'>Submit</button>
      </form>   
      </div>
      
    </div>
    <Footer/>
    </div>
    
  )
}

export default Contact