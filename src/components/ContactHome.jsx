import React from 'react'
import AboutMainHome from './AboutMainHome';

const ContactHome = ({data}) => {
  return (
    <div>
        <AboutMainHome title={data[0].title} image={data[0].image} description={data[0].description}/>
    </div>
  )
}

export default ContactHome