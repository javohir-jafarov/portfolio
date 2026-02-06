import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutMain from '../components/AboutMain'
import Skills from '../components/Skills'
import profile from '../assets/images/profile.webp'

const start = new Date("2024/05/23")
const current = new Date()

const yearOfExperience = Math.round((current - start) / (1000 * 60 * 60 * 24 * 365))

const About = () => {
  const forAbout = [
    {title: 'Know about Me', image: profile, description: `Hello! My name is Javohir. I am a frontend developer with ${yearOfExperience} years of experience, the leader of the “Ustoz AI” direction at the Zargarlik MFY children's organization. I am currently developing myself and learning new technologies. I completed the programming course at 'teamit' academy with the help of my teacher Abdurahmon. If you subscribe to my channel, you can learn more about me and receive news.`}
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