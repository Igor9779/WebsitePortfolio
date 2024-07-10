import ServiceSlider from '@/components/ServiceSlider'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
      <div className='relative flex items-center bg-[#0C011A] h-screen overflow-hidden'>
          <div className='pl-20 md:pl-58 flex flex-col gap-3 pb-60 md:pb-0'>
            <h1 className='text-[50px] text-white font-semibold'>
                My skills <span className='text-red-500'>.</span>
            </h1>
            <p className='max-w-[350px] text-[16px] text-gray-200 md:text-gray-400'>
                  For the past 11 months, I have been learning Front-End development,
                  which has provided me with a solid foundation to advance in the IT field and helped me land my first job.
                  Thanks to my soft skills, I easily connect with people and can quickly adapt to different situations.
                  I also take responsibility for any task and love learning new things, as you can read in my recommendation.
                  Here, I will list some of my tech skills:
            </p>
          </div>
          <div className='absolute -eft-10 bottom-10 rotate-12 animate-pulse duration-75'>
            <Image
                src='/assets/bulb.png'
                alt="bulb"
                width={260}
                height={260}
                className="w-full h-full hidden md:block"
            />
          </div>
          <ServiceSlider />
    </div>
  )
}

export default Page