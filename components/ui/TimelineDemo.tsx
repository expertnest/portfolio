import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024 - Present",
      job: "Web Designer & Developer, VisionTech Studio",
      content: (
        <div>
          <ul className="list-disc list-inside space-y-4 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-lg font-normal mb-4">
              February 2024 - Present
            </p>
            <li className="text-md md:text-lg">
              Lead end-to-end web projects, from UI/UX design in Figma to development with Next.js, React, and Tailwind CSS.
            </li>
            <li className="text-md md:text-lg">
              Collaborate closely with clients, defining project scope, ensuring alignment, and maintaining clear communication.
            </li>
            <li className="text-md md:text-lg">
              Build high-performance websites, integrating Framer Motion animations, SEO, and analytics for enhanced user experience.
            </li>
            <li className="text-md md:text-lg">
              Implement CMS solutions (Sanity, Supabase) to simplify content management and improve scalability.
            </li>
            <li className="text-md md:text-lg">
              Ensure web accessibility, performance, and privacy standards compliance throughout all projects.
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
          <p className="text-neutral-800 dark:text-neutral-200 text-lg font-normal mb-4">
            Atlanta, Georgia. February, 2023 − January, 2024
          </p>
          <li className="text-md md:text-lg">
            Led website migration from WordPress to Next.js and integrated Directus Headless CMS. Achieved a 39 percent increase
            in Google PageSpeed Insights’ Performance metric, enhancing user experience.
          </li>
          <li className="text-md md:text-lg">
            Utilized a modern frontend tech stack, including TypeScript, Tailwind CSS, and Next.js, to build responsive and performant
            web applications.
          </li>
          <li className="text-md md:text-lg">
            Integrated application with the ChatGPT API, training it to only provide context-specific responses from the law firm.
          </li>
          <li className="text-md md:text-lg">
            Implemented file-based routing, server and client components, data fetching, server-side rendering (SSR), SEO best practices,
            internationalization (i18n) to enhance user experiences, and created contact forms that directly route submissions to email.
          </li>
        </ul>
      ),
    },
    {
      title: "2021 - 2022",
      job: "Cosmos Blockchain",
      content: (
        <ul className="list-disc list-inside space-y-4 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
          <p className="text-neutral-800 dark:text-neutral-200 text-lg font-normal mb-4">
            Atlanta, Georgia. November, 2021 - December, 2022
          </p>
          <li className="text-md md:text-lg">
          Managed and maintained Linux-based cloud infrastructure on AWS and Linode, provisioning and configuring EC2 instances, setting up IAM roles and policies, managing SSH key access, and ensuring secure, scalable user authentication and permissions.
</li>
<li className="text-md md:text-lg">
Implemented firewall rules and security groups, and monitored Cosmos proof-of-stake nodes and validators for performance and updates.,
</li>


          
          <li className="text-md md:text-lg">
            Configured cloud servers on Linode using the Tendermint protocol in order to launch an active set of Stargaze and Osmosis Blockchain proof of stake  Validator nodes.
           
          </li>


        </ul>
      ),
    },
    {
      title: "2021",
      job: "Masters in Information Technology",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg font-normal mb-4">
            Atlanta, Georgia. Kennesaw State University. GPA: 4.0
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
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
