import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutMain from '../components/AboutMain'
import Skills from '../components/Skills'
import profile from '../assets/images/profile.webp'

const About = () => {
  const forAbout = [
    {title: 'Know about Me', image: profile, description: "Hello! I'm Javohir, a passionate front-end developer with a knack for creating engaging and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and dynamic websites that captivate users. My journey in web development has been fueled by a love for design and a commitment to staying updated with the latest industry trends. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects. Let's connect and create something amazing together!"}
  ]
  return (
    <>
        <Navbar />
        <AboutMain data={forAbout}/>
        <Skills />
        <Footer />
    </>
    
  )
}

export default About