import React from 'react'
import AboutMainHome from './AboutMainHome'

const ProjectsHome = ({data}) => {
  return (
    <div className='pt-10'>
        <AboutMainHome title={data[0].title} image={data[0].image} description={data[0].description}/>
    </div>
  )
}

export default ProjectsHome