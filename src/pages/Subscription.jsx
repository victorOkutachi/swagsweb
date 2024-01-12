import React from 'react'

const Subscription = () => {
  return (
    <div className='flex flex-col items-center bg-[#eba95d] mt-6' data-aos='fade-up'>
        <div className='w-full  flex flex-col text-center items-center pt-8 mb-4'>
            <h2 className='text-[30px] md:text-[45px] text-white font-Dancing mb-3 text-bold'>Subscription</h2>
            <p className='max-w-[450px] text-[16px] text-white md:text-[22px] font-Kanit md:max-w-[750px] px-6'>
                Become a part of something extraordinary. Subscribe now and elevate your connection with IamElswag's music to new heights. 
                Your journey into the heart of the music begins here.
            </p>

            <button className='text-[#eba95d] bg-white font-bold text-[14px] md:text-[18px] rounded-full hover:text-white border-[2px] hover:bg-[#eba95d] border-white hover:border-white px-8 py-2 md:w-[200px] md:py-3 md:px-8 w-[120px] flex items-center justify-center my-6 mx-auto md:mx-0' >
                Subscribe
            </button>
        </div>
    </div>
  )
}

export default Subscription