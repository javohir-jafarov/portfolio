import React from 'react'
import { Link } from 'react-router-dom'
import example from '../assets/images/logo.png'

const ProjectsMainCard = ({ name, description, image, link }) => {
  return (
    <a href={link} target='_blank' className='lg:flex bg-[#1f1f20] overflow-hidden rounded-3xl items-center max-lg:w-64 max-lg:min-w-60'>
      <img src={image} alt="page image" className='lg:w-1/4 w-full' />
      <div className='content w-fit h-fit flex flex-col justify-between gap-6 p-4 items-start'>
        <h1 className='lg:text-3xl text-[24px]'>{name}</h1>
        <p className='max-lg:text-[12px] text-[#ffffff5a]'>{description}</p>
      </div>
    </a>
  )
}

export default ProjectsMainCard