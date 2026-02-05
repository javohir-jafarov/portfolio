import React from 'react'
import { Link } from 'react-router-dom'


const links = [
    { txt: 'Home', link: '/' },
    { txt: 'About', link: '/about' },
    { txt: 'Projects', link: '/projects' },
    { txt: 'ContactMe', link: '/contact' }
]

const Navbar = () => {
    return (
            <div className="w-fill top-0 left-0 right-0  fixed backdrop-blur-2xl min-[700px]:px-15 p-5 ">
                <nav className='flex justify-between items-center'>
                    <Link to={'/'} className='transition-transform max-[830px]:text-[16px] hover:scale-120 active:scale-90 text-[20px]'>Javohir.</Link>
                    <ul className='flex  max-[830px]:gap-12 max-[830px]:text-10px max-[700px]:hidden gap-20 text-[18px] items-center'>
                        {links.map((item, index) => (
                            <Li key={index} txt={item.txt} links={item.link} />
                        ))}
                    </ul>
                    <svg className='min-[700px]:hidden transition-transform hover:scale-120 active:scale-90' width="32px" height="32px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </nav>
            </div>
    )
}

const Li = (props) => {
    return (
        <li className='transition-transform hover:scale-120 active:scale-90'>
            <Link to={props.links}>{props.txt}</Link>
        </li>
    )
}




export default Navbar