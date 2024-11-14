"use client";
import { TITLE_TAILWIND_CLASS } from '@/utils/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ProjectsData = [
    {
      id: 1,
      name: 'Nextjs 14',
      description: '',
      image: 'https://utfs.io/f/a8df6965-e6df-417a-ab0b-b3ad33d701d7-hcfblw.png',
      imageDark: "https://utfs.io/f/c5588304-c7ff-43f9-b164-3b9c78474b73-rv0oux.png",
      url: "https://nextjs.org/"
    },
    {
      id: 2,
      name: 'TypeScript',
      description: ' ',
      image: 'https://utfs.io/f/5b51351d-218b-4931-a296-0a9275030aaf-8myeez.png',
      url: "https://www.typescriptlang.org/"
    },
    {
      id: 3,
      name: 'Tailwind CSS',
      description: ' ',
      image: 'https://utfs.io/f/666774c0-dc3a-4d5a-84b7-cc96e682db61-bhgw4o.png',
      url: "https://tailwindui.com/"
    },
    {
      id: 4,
      name: 'Shadcn UI',
      description: ' ',
      image: 'https://utfs.io/f/bc4c7cdb-dc42-452c-8744-0ad2c3232e7f-exyul9.png',
      imageDark: "https://utfs.io/f/f9ae4f1b-76a1-4505-afc0-dfcbea05012d-62drog.png",
      url: "https://ui.shadcn.com"
    },
    
    {
      id: 6,
      name: 'Supabase (PostgreSQL)',
      description: ' ',
      image: 'https://utfs.io/f/c62a5d13-91e4-476f-9d36-786d9995c97f-rqpuxo.png',
      url: "https://supabase.com/"
    },
    {
      id: 7,
      name: 'Prisma ORM',
      description: ' ',
      image: 'https://utfs.io/f/c3933696-cd5c-4de7-a24e-1822df8c4215-g7gclc.png',
      url: "https://prisma.io/"
    },
    {
      id: 8,
      name: 'Stripe Subsctiptions & One time payments',
      description: ' ',
      image: 'https://utfs.io/f/a2fbe9db-35f8-4738-a4c4-0b9a29f4efc7-er2coj.png',
      url: "https://stripe.com"
    },
    {
      id: 9,
      name: 'Tanstack Query',
      description: ' ',
      image: 'https://utfs.io/f/ee162388-f998-4740-bfc4-9d9a7050f485-90gb5l.png',
      url: "https://tanstack.com/query/v5"
    },
    {
      id: 10,
      name: 'Upstash (Redis)',
      description: ' ',
      image: 'https://utfs.io/f/c01790c1-7c12-4a5e-b50f-a44358124853-3mzznq.png',
      url: "https://upstash.com/"
    },
    {
      id: 5,
      name: 'Figma',
      description: ' ',
      image: '/figmaLogo.png',
      url: "https://clerk.com/"
    },
    {
      id: 11,
      name: 'Convex',
      description: ' ',
      image: '/convexLogo.png',
      url: "https://upstash.com/"
    },
    {
      id: 12,
      name: 'CosmWasm',
      description: ' ',
      image: '/cosmWasmLogo.png',
      url: "https://upstash.com/"
    },
  ]
  
const SpringAnimatedFeatures = () => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white md:dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center sm:mt-[200px] md:mt-3">
      {/* Radial gradient for faded look */}
      <div className=" pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className="relative z-20 flex flex-col items-center justify-center w-full lg:w-[75%] text-center">
        <h2 className={`${TITLE_TAILWIND_CLASS} mt-2 font-semibold tracking-tight dark:text-white text-gray-900`}>
        Behind the Code
        </h2>
        <p className="max-w-[500px] text-gray-600 dark:text-gray-400 mt-2">
        The technologies that fuel my creations!
        </p>

        <div className="grid w-full grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 sm:p-3 md:p-0">
          {ProjectsData.map((project) => (
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', bounce: 0.7 }}
              key={project.id}
              className="text-center border p-6 rounded-md dark:bg-black"
            >
              <Link href={project?.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project?.imageDark ? project?.imageDark : project.image}
                  width={40}
                  height={30}
                  className="mb-3 rounded"
                  alt={project.name}
                />
                <div className="mb-1 text-sm font-medium">
                  {project.name}
                </div>
                <div className="max-w-[250px] mx-auto text-sm font-normal text-gray-600 dark:text-gray-400">
                  {project.description}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpringAnimatedFeatures;
