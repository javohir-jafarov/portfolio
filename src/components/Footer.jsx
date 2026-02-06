import React from 'react'

const date = new Date().getFullYear()

const data = [
  {link: 'https://www.instagram.com/javohir_dev', name: 'instagram'},
  {link: 'https://t.me/java2454', name: 'telegram'},
  {link: 'https://www.github.com/javohir-jafarov', name: 'github'}
]

const Footer = () => {
  return (
    <>
        <div className="w-10/10 container flex backdrop-blur-2xl p-5 mx-auto bottom-0 gap-5 justify-between flex-wrap-reverse">
          <p className='flex mx-auto max-md:text-[10px]'>{date} | jafarovich.uz</p>
          <ul className='flex gap-5 items-center flex-wrap'>
            {data.map((data) => (
            <li>
              <a className='underline' href={data.link}>{data.name}</a>
            </li>
          ))}
          </ul>
        </div>
    </>
  )
}

export default Footer