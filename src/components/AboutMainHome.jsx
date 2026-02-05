import React from 'react'
import profile from '../assets/images/profile.webp'

const AboutMainHome = ({title, image, description}) => {
  return (
    <div className='my-10 w-full items-center justify-center lg:justify-around px-5 flex max-lg:flex-col lg:flex gap-20 h-[calc(100vh - 80px)]'>
        <img loading='lazy' className='size-40 lg:size-[350px] rounded-[100%]' src={image} alt="image | Javohir | Jafarovich.uz" />
        <div className='content w-full lg:w-[600px]'>
            <h1 className='text-2xl'>{title}</h1>
            <p className='text-[14px] text-[#686666] leading-6 mt-5'>{description}</p>
        </div>
    </div>
  )
}

export default AboutMainHome