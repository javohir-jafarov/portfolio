import React from 'react'
import ProjectsMainCard from './ProjectsMainCard'

const ProjectsMain = ({ data }) => {
  console.log(data.name)
  return (
    <div className='flex max-lg:overflow-x-scroll lg:flex-col lg:justify-center gap-5 lg:h-screen lg:px-20 px-5 perspective-origin-bottom-left'>
      {data.map(item => (
        <ProjectsMainCard name={item.name} description={item.description} image={item.image} link={item.link}/>
      ))}
    </div>
  )
}

export default ProjectsMain