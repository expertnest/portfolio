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
        <div className="relative z-20 flex flex-col sm:items-center md:items-start justify-center w-full lg:w-[75%] md:text-left sm:text-center">
        <h2 className={`${TITLE_TAILWIND_CLASS} mt-2 font-semibold tracking-tight dark:text-white text-gray-900 sm:mt-8 sm:pb-4 md:pb-0 md:mt-0`}>
        Welcome to Web Dev Journey
        </h2>
        <p className="max-w-[500px] text-gray-600 dark:text-gray-400 mt-2">
        I am a web developer with a Master’s in Information Technology from Kennesaw State University, specializing in creating modern, high-performance websites and applications. With expertise in tools like Next.js, React, and Tailwind CSS, I focus on delivering seamless user experiences, optimizing site performance, and implementing efficient content management solutions. My work emphasizes accessibility, responsiveness, and leveraging the latest technologies to meet unique client needs.
        </p>
      </div>
      </div>
      
    </div>
        </div>
        </div>
    )
}

export default About