import React from 'react'
import { SocialIcon } from 'react-social-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Support = () => {
  return (

    <div className='flex flex-col items-center'>
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


            <div className='flex flex-col w-full items-center justify-center'>
                <h2 className='text-[20px] md:text-[30px] text-[#eba95d] font-Dancing mb-3 text-bold'>
                    Donate Directly
                </h2>

                <p className='max-w-[450px] text-[16px] md:text-[22px] font-Kanit md:max-w-[750px] px-6'>
                Your direct contributions, no matter the size, make a direct impact on IamElswag's ability to create and share music. 
                Every dollar contributes to the production of new tracks, high-quality recordings, and the overall enhancement of the musical 
                experience.
                </p>

                <button className='text-white bg-[#eba95d] font-bold text-[14px] md:text-[18px] rounded-full hover:text-white border-[2px] hover:bg-[#eba95d] border-white hover:border-white px-10 py-3 md:w-[200px] md:py-3 md:px-8 w-[120px] flex items-center justify-center my-5 mx-auto md:mx-0'>Donate</button>
            </div>



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

                <a href='https://youtube.com/channel/UCrUWQBJB9Hc1pmYIXLNIYjQ?si=EaHyROQnlOzcfrwl' >
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
                <h2 className='text-[20px] md:text-[30px] text-[#eba95d] font-Dancing my-3 text-bold'>
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

  )
}

export default Support