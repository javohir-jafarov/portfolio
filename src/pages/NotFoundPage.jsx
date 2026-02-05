import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import sadRobot from '../assets/images/sad-robot.png'

const NotFoundPage = () => {
    return (
        <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <div className='sm:flex mx-auto gap-5 items-center h-screen'>
                <img className='size-48' src={sadRobot} alt="" />
                <div className="content flex flex-col gap-10">
                    <h1 className='text-4xl'><span>404</span> - Page Not Found</h1>
                    <p>Sorry, the page you are looking for does not exist.</p>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default NotFoundPage