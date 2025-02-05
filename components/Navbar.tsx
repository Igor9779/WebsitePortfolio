import { Socials } from '@/constans'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
      <div className='fixed top-0 bg-transparent z-[20] w-full flex gap-5 md:justify-between md:px-60 p-5'>
          <h1 className='text-white text-[45px]'>
              Igor <span className='font-thin'>Bondarenko</span>
              <span className='text-red-500'>.</span>
          </h1>
          <div className='flex flex-row gap-5'>
        {Socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-80 transition-transform transform hover:scale-105 transition-opacity duration-300 ease-in-out'
          >
          <Image className="hover:opacity-80 transition-transform transform hover:scale-105 transition-opacity duration-300 ease-in-out"
            key={social.name}
            src={social.src}
            alt={social.name}
            width={24}
            height={24}
            />
            </a>
              ))}
          </div>
    </div>
  )
}

export default Navbar