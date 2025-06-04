import Image from 'next/image'
import { TITLE_TAILWIND_CLASS } from '@/utils/constants'
 



const About =()=> {

 

    return (

        <div className='sm:mt-[100px] md:mt-2'>
        <div className="h-[33rem] w-full dark:bg-black bg-white   ] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
      <div className="flex flex-col md:flex-row justify-center items-center  md:gap-x-32 sm:gap-x-4 max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <Image className='rounded-xl'src='/profile1.webp' width={325} height={100} alt="Profile" />
        <div className="relative z-20 flex flex-col sm:items-center md:items-start justify-center w-full lg:w-full md:text-left sm:text-center">
        <h2 className={`${TITLE_TAILWIND_CLASS} mt-2 font-semibold tracking-tight dark:text-white text-gray-900 sm:mt-8 sm:pb-4 md:pb-0 md:mt-0`}>
        Welcome to my Web Dev Journey
        </h2>
        <p className="max-w-[650px] text-gray-600 dark:text-gray-400 mt-2 w-full md:text-xl">
        I build fast, accessible websites and apps with a focus on user experience. Skilled in Next.js, React, and Tailwind CSS, I also manage cloud infrastructure on AWS and Linode, using Linux to deploy and secure scalable systems. My work blends modern frontend development with solid backend and server expertise.  </p>
      </div>
      </div>
      
    </div>
        </div>
        </div>
    )
}

export default About