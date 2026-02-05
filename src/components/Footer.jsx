import React from 'react'

const date = new Date().getFullYear()

const Footer = () => {
  return (
    <>
        <div className="w-10/10 container flex backdrop-blur-2xl p-5 mx-auto bottom-0">
          <p className='flex mx-auto'>{date} | jafarovich.uz</p>
        </div>
    </>
  )
}

export default Footer