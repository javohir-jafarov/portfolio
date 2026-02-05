import React from 'react'
import mainImage from '../assets/images/home.png'
import { Link } from 'react-router-dom'

const HomeMain = () => {
  return (
    <>
      <div className="container flex items-center justify-between  mx-auto h-[90vh] pt-20  px-5">
        <nav className='flex items-center justify-between h-10/10 gap-16 mx-auto  max-[700px]:flex-col'>
          <img src={mainImage} loading='' className='max-sm:w-[200px] w-[400px] max-[1170px]:w-[250px]' alt="a developer | sitting developer " />
          <div className="content flex justify-center max-sm:pb-15 gap-5 md:gap-16 h-10/10 flex-col ">
            <h1 className='text-5xl  whitespace-nowrap font-semibold max-lg:text-3xl  max-[425px]:text-[16px]'>
              Hi, I am <span>Javohir</span>
            </h1>
            <p className='max-[460px]:text-[12px] letter-spacing-[5px]'> 
              I am very happy to see you in my <br/>
              official portfolio! :]
            </p>
            <Link className='transition-transform hover:scale-110 w-fit active:scale-90 text-[16px]  whitespace-nowrap  md:text-2xl flex items-center' to={'/about'}>
            <span>About Me</span>

            <svg className='size-[16px] md:size-[26px]' viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="var(--main-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default HomeMain