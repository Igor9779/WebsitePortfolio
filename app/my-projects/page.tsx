import ProjectSlider from '@/components/ProjectSlider'
import React from 'react'

const Page = () => {
  return (
      <div className='flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[#0C011A]'>
          <div className='flex flex-col gap-3'>
              <h1 className='text-[50px] text-white font-semibold'>
                  My works <span className='text-red-500'>.</span>
              </h1>
              <p className='max-w-[400px] text-[16px] text-gray-200 md:text-gray-400'>
                  As you could guess, here I&apos;ll show and describe to you a few of my works that I did and,
                  I hope you will like them!
              </p>
          </div>

          <ProjectSlider />
    </div>
  )
}

export default Page