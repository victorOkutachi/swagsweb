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
    <div className='flex w-full h-12 items-center justify-between p-10 absolute shadow-sm'>
        <div>
            <h1 className='text-white font-Whisper text-[28px] lg:text-[35px]'>IamElswag</h1>
       
        </div>
       
        

        <ul className='hidden grid-cols-5 col-span-4 items-center md:flex '>
            {listItems.map(item=>(
            <li className='px-2 text-[8px]'><p to={item.path} className='text-[10px] lg:text-[13px] font-Kanit text-white font-medium uppercase tracking-widest cursor-pointer relative group'>{item.desc}
            <div className='absolute w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform'></div>
            </p></li>))}
            <button className='text-white font-bold text-[12px] rounded-full hover:text-white border-[2px] border-white hover:bg-[#eba95d] hover:border-white px-6 py-1 w-[100px] flex items-center justify-center my-4 mx-auto md:mx-0'>
            Support
            </button>
        </ul>
     
        <div onClick={handleMenu} className='block md:hidden z-10'>
             {menu ? <AiOutlineClose color='orange' size={20} /> : <HiOutlineMenuAlt2 color='white' size={20}/>}     
        </div>
        <div className={menu ? 'absolute right-24 top-36 w-full h-1/2 flex flex-col items-center justify-center bg-white ease-in-out duration-500 text-[#eba95d]' : 'fixed left-[-100%]'}>
                
                <ul className='uppercase p-4 '>
                    
                    
                    <li className='py-2 text-sm font-medium'>Music</li>
                    <li className='py-2 text-sm  font-medium'>Services</li>
                    <li className='py-2 text-sm  font-medium'>Bookings</li>
                    <li className='py-2 text-sm  font-medium'>Subscribe</li>
                    

                </ul>
            </div>
    </div>
  )
}

export default Navbar