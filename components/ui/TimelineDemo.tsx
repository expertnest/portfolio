import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024 - Present",
      job: "Web Designer & Full Stack Developer, VisionTech Studio",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-lg font-normal mb-4">
            Atlanta, Georgia. February, 2024 − Present
          </p>
          <ul className="list-disc list-inside space-y-4 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            <li className="text-md md:text-lg">
              Spearheaded full-cycle website builds from Figma UI/UX design to deploying high-performance, responsive sites with Next.js and Tailwind CSS.
            </li>
            <li className="text-md md:text-lg">
              Collaborated directly with clients to define project scope, align deliverables with business goals, and maintain consistent communication throughout.
            </li>
            <li className="text-md md:text-lg">
              Integrated Framer Motion, SEO best practices, and analytics to boost engagement and performance.
            </li>
            <li className="text-md md:text-lg">
              Deployed CMS platforms like Sanity and Directus with Supabase and Convex for scalable content management and backend architecture.
            </li>
            <li className="text-md md:text-lg">
              Ensured compliance with modern web accessibility, performance, and privacy standards.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2023 - 2024",
      job: "Web Developer, Cheves Briceno Law Firm",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg font-normal mb-4">
            Atlanta, Georgia. February, 2023 − January, 2024
          </p>
          <ul className="list-disc list-inside space-y-4 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            <li className="text-md md:text-lg">
              Led migration from WordPress to a modern Next.js architecture, integrating Directus as a headless CMS. Improved Google PageSpeed Performance by 39%, significantly enhancing load times and user experience.
            </li>
            <li className="text-md md:text-lg">
              Developed responsive, high-performance web applications using a modern frontend stack: TypeScript, Tailwind CSS, and Next.js.
            </li>
            <li className="text-md md:text-lg">
              Integrated the ChatGPT API with custom fine-tuning to deliver responses strictly contextualized to the law firm’s internal knowledge base.
            </li>
            <li className="text-md md:text-lg">
              Engineered key site features including file-based routing, hybrid rendering with server and client components, optimized data fetching, SSR, SEO optimization, internationalization (i18n), and dynamic contact forms routing directly to email.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2021 - 2022",
      job: "Blockchain Developer, Cosmos Blockchain ",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg font-normal mb-4">
            Atlanta, Georgia. November, 2021 − December, 2022
          </p>
          <ul className="list-disc list-inside space-y-4 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            <li className="text-md md:text-lg">
              Managed and maintained Linux-based cloud infrastructure on AWS and Linode, provisioning EC2 instances, configuring IAM roles and policies, managing SSH key access, and securing scalable user authentication and permissions.
            </li>
            <li className="text-md md:text-lg">
              Implemented firewall rules and security groups, and monitored Cosmos proof-of-stake nodes and validators for performance and software updates.
            </li>
            <li className="text-md md:text-lg">
              Configured cloud servers on Linode using the Tendermint protocol to launch active Stargaze and Osmosis blockchain validator nodes.
            </li>
          </ul>
        </div>
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
