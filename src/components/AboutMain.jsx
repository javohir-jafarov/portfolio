import React from 'react'
// import AboutLayoutCardsGrid from './Skills'
import AboutMainHome from './AboutMainHome'

const AboutMain = ({data}) => {
  console.log(data[0].title)
  return (
    <div className='pt-10'>
        <AboutMainHome title={data[0].title} image={data[0].image} description={data[0].description}/>
    </div>
  )
}

export default AboutMain