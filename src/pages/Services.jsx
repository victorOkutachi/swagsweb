import React from 'react'
import  AOS  from 'aos'


const Services = () => {
  return (
    <div className='w-full h-full flex flex-col items-center'>
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
                <button className='text-white bg-[#eba95d] font-bold text-[14px] md:text-[18px] rounded-full hover:text-white border-[2px] hover:bg-[#eba95d] border-white hover:border-white px-10 py-3 md:w-[200px] md:py-3 md:px-8 w-[120px] flex items-center justify-center my-5 mx-auto md:mx-0'>Book</button>
            </div>

            <div className='w-full  flex flex-col text-center items-center pt-8' data-aos='fade-up'>
                <h2 className='text-[20px] text-[#eba95d] md:text-[35px] text-center my-3 font-Dancing mx-10 text-bold'>Special Birthday Songs</h2>
                <p className='max-w-[450px] text-[16px] md:text-[22px] font-Kanit md:max-w-[750px] px-6'>Want to make your birthday special and memorable? Then contact IamElswag to write,produce and perform a special and unique birthday song 
                    just for you.
                </p>
                <button className='text-white bg-[#eba95d] font-bold text-[14px] md:text-[18px] rounded-full hover:text-white border-[2px] hover:bg-[#eba95d] border-white hover:border-white px-10 py-3 md:w-[200px] md:py-3 md:px-8 w-[120px] flex items-center justify-center my-5 mx-auto md:mx-0'>Book</button>
            </div>
        </div>

    </div>
  )
}

export default Services