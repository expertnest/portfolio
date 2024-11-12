 
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024 - Present",
      job: "Freelance",
      content: (
        <div>
        <ul className="list-disc list-inside space-y-4 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          February 2024 - Present
          </p>
          <li>
            Developed a modern website for Soch Performance, a braking systems company, using Next.js and Framer Motion. Enhanced user experience with internationalization, smooth animations, and integrated Google Analytics for performance tracking.
          </li>
          <li>
            Led the transformation of the Whitespace museum’s website from manual WordPress updates to a dynamic React solution. Utilized Sanity CMS for streamlined content management and created dynamic forms to easily add new artists, events, and gallery images.
          </li>
          <li>
            Improved content management efficiency and ensured compliance with web standards by implementing a cookie banner.
          </li>
        </ul>
      </div>
      
      ),
    },
    {
      title: "2023 - 2024",
      job: "Cheves Briceno Law Firm",
      content: (
        <ul className="list-disc list-inside space-y-4 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
             <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
             Atlanta, Georgia. February, 2023 − January, 2024
          </p>
        <li>
        Led website migration from WordPress to Next.js and integrated Directus Headless CMS. Achieved a 39 percent increase
        in Google PageSpeed Insights’ Performance metric, enhancing user experience
        </li>
        <li>
        Utilized a modern frontend tech stack, including TypeScript, Tailwind CSS, and Next.js, to build responsive and performant
        web applications
        </li>
        <li>
        Integrated application with the ChatGPT API, training it to only provide context-specific responses from the law firm.
        </li>
        <li>
        Implemented file-based routing, server and client components, data fetching, server-side rendering (SSR), SEO best prac-
        tices, internationalization (i18n) to enhance user experiences, and created contact forms that directly route submissions to email
        </li>
      </ul>
      ),
    },
    {
      title: "2021 - 2022",
      job: "Cosmos Blockchain",
      content: (
        <ul className="list-disc list-inside space-y-4 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
             <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
             Atlanta, Georgia. November, 2021 - December, 2022
          </p>
        <li>
        Utilized scripting tools to randomly generate thousands of images for NFT art collections, uploaded images to IPFS, and
        deployed collections based on sg721 contracts to the Cosmos Stargaze Marketplace
        </li>
        <li>
        Configured cloud servers on Linode using the Tendermint protocol in order to launch an active set of Stargaze and Osmosis
        Validator nodes
        </li>
        <li>
        Managed multiple cloud servers systems on Linode with Linux Ubuntu, created and managed system permissions and
user accounts, oversaw network security and firewalls, monitored network performance, cloud resources, and updates for Cosmos proof-of-stake nodes and validators
        </li>
       
      </ul>
      ),
    },
    {
      title: "2021",
      job: "Masters in Information Technology",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
           Atlanta, Georgia.  Kennesaw State University.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
         
          
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
