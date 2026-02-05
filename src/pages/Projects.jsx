import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectsMain from '../components/ProjectsMain'
import ProjectsHome from '../components/ProjectsHome'


import projectsLaptop from '../assets/images/projectsLaptop.webp'

import paladium from '../assets/images/paladium.webp'
import crocoGame from '../assets/images/croco-game.webp'
import bluda from '../assets/images/bluda.webp'

const Projects = () => {

  const homeData = [
    {title: 'My Projects', image: projectsLaptop, description: "If you allow me to present you my projects. I have done many projects, but I have selected and attached the best ones for you. Each project reflects my skills in frontend development, attention to detail, and passion for creating clean and responsive user interfaces."}
  ]

  const cardBase = [
    {name: 'paladium', description: 'This website is for construction raw materials', image: paladium, link: 'https://paladium.netlify.app'},
    {name: "Croco-game", description: "Crocodile Dentist - is a game that is simple but very entertaining", image: crocoGame, link: 'https://croco-game.netlify.app'},
    {name: 'bluda', description: 'I created this web page when I was a beginner', image: bluda, link: 'https://bluda.netlify.app'},
  ]

  return (
    <div>
      <Navbar />
      <ProjectsHome data={homeData}/>
      <ProjectsMain data={cardBase}/>
      <Footer />
    </div>
  )
}

export default Projects