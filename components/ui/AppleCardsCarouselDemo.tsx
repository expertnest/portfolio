"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { TITLE_TAILWIND_CLASS } from "@/utils/constants";

// Define the type for a card object
type CardData = {
  category: string;
  title: string;
  src: string;
  link:string
 content: JSX.Element;
};

// Define props for the DummyContent component
interface DummyContentProps {
  category: string;
  title: string;
  src: string;
  pic1:string;
  pic2:string;
  pic3:string;
  categoryOne: string;
  categoryTwo: string;
  categoryThree: string;
  descriptionOne: string;
  descriptionTwo: string;
  descriptionThree: string
  url:string;
}
import { useEffect, useState } from 'react';

export function AppleCardsCarouselDemo() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 640); // adjust to your breakpoints
    handleResize(); // check initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = data.map((card, index) => (
    isSmallScreen ? (
      <a key={card.src} href={card.link} className="block">
        <Card card={card} index={index} />
      </a>
    ) : (
      <Card key={card.src} card={card} index={index} />
    )
  ));

  return (
    <div className="w-full h-full py-20 sm:pt-[170px] md:pt-0 mx-auto  text-center md:pt-5">
           <h2 className={`${TITLE_TAILWIND_CLASS} mt-2 font-semibold tracking-tight dark:text-white text-gray-900`}>
     Latest Projects
        </h2>
        <p className="max-w-[500px] text-gray-600 dark:text-gray-400 mt-2 mx-auto md:text-2xl text-center ">
       Check out my latest works
        </p>
      <Carousel items={cards} />
    </div>
  );
}


const DummyContent: React.FC<DummyContentProps> = ({  pic1, pic2, pic3, categoryOne, categoryTwo, categoryThree, descriptionOne, descriptionTwo, descriptionThree, url }) => {
  return (
    <>
      {[...new Array(1)].map((_, index) => (
        <div className=" " mx-auto  key={"dummy-content" + index}>

         <div
              
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <p className="font-bold text-neutral-700 dark:text-neutral-200">
                  {categoryOne}:  
                </p>{" "}
                {descriptionOne}
              </p>
              <Image
                src={pic1}
                alt="Macbook mockup from Aceternity UI"
                height={500}
                width={500}
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-2" 
              />
            </div>

            <div
           
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                  {categoryTwo}:  
                </span>{" "}
                {descriptionTwo}
              </p>
              <Image
                src={pic2 || "https://assets.aceternity.com/macbook.png"}
                alt="Macbook mockup from Aceternity UI"
                height={500}
                width={500}
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-2"
              />
            </div>
            <div
             
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                  {categoryThree}:  
                </span>{" "}
                {descriptionThree}
              </p>
              <Image
                src={pic3 || "https://assets.aceternity.com/macbook.png"}
                alt="Macbook mockup from Aceternity UI"
                height={500}
                width={500}
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-2"
              />
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <div className="text-center">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-neutral-700 dark:text-neutral-200 pt-2 hover:underline"
            >
              Visit Website
            </a>
            </div>       
              </p>

        </div>
       
      ))}
    </>
  );
};

// Updated data array with explicit typing
const data: CardData[] = [
  {
    category: "Web Development",
    title: "Soch Performance",
    src: "/soch-1.png",
    link:"https://www.sampledemo.website/en",
    content: <DummyContent category="Artificial Intelligence" title="You can do more with AI." src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" pic1="/soch-1.png" pic2="/soch-2.png" pic3="/soch-3.png" 
    categoryOne="Next.js" categoryTwo="Internationalization " categoryThree="Tailwind CSS and Framer Motion" descriptionOne="provided a robust foundation for performance and scalability, enabling fast load times and efficient rendering across devices, which was essential for Soch Performance’s competitive positioning." descriptionTwo="allowed the site to cater to a diverse audience by supporting multiple languages, making Soch Performance accessible to global users and enhancing its market reach." descriptionThree=" facilitated rapid and responsive design, streamlining the development process and ensuring a visually cohesive layout that aligns with Soch’s high-end brand image." url="https://www.sampledemo.website/en"/>,


  },
  {
    category: "Web Development",
    title: "Cheves Briceno Law Firm",
    src: "/briceno1.png",
    link:"https://ai-blog-updated.vercel.app/en",
    content: <DummyContent category="Productivity" title="Enhance your productivity." src="/briceno1.jpg" pic1="/briceno1.png" pic2="/briceno-2.png" pic3="/briceno-3.png" 
    categoryOne="Next.js " categoryTwo="Directus CMS" categoryThree="Dynamic SEO " descriptionOne="was key for improving performance and flexibility, especially with the app directory feature, making it well-suited for the law firm’s modern needs and SEO requirements." descriptionTwo="provided a seamless headless CMS solution for managing dynamic blog content, allowing the firm to easily add, edit, and organize posts while maintaining strong SEO practices." descriptionThree="involved optimizing for search engines with language support in both English and Spanish, a dynamic sitemap, and elevated Google PageSpeed scores, ensuring the site reaches a broader, international audience effectively." url="https://ai-blog-updated.vercel.app/en"/>,
  },
  {
    category: "Web Development",
    title: "Whitespace",
    src: "/white1.png",
    link:"https://whitespace-livid.vercel.app/",
    content: <DummyContent category="Product" title="Launching the new Apple Vision Pro." src="/white.png" pic1="/white1.png" pic2="/white2.png" pic3="/white3.png"
    categoryOne="Next.js" categoryTwo="Sanity CMS" categoryThree="GROQ " descriptionOne="was the foundation for the museum's new website, providing speed, scalability, and a more modern alternative to WordPress, which significantly enhanced the site's performance and user experience." descriptionTwo="offered a flexible and user-friendly backend, allowing museum editors to easily manage content like artists, events, and galleries, making it ideal for the museum’s dynamic and expanding needs." descriptionThree="enabled efficient data querying within Sanity, streamlining content retrieval for artist profiles, events, and galleries, which allowed for a robust and highly tailored display of the museum’s offerings." url="https://whitespace-livid.vercel.app/"/>,
  },
  {
    category: "Web Development",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/gen1.png",
    link:"https://genjutsuatl.com",
    content: <DummyContent category="Product" title="Maps for your iPhone 15 Pro Max." src="https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" pic1="/gen1.png" pic2="/gen2.png" pic3="/gen3.png"
    categoryOne="HTML " categoryTwo="CSS" categoryThree="JavaScript" descriptionOne="provided the structural foundation for the website, enabling a clear, organized layout that effectively showcased GenjutsuATL’s services and portfolio." descriptionTwo="was instrumental in creating a visually appealing design, reflecting the agency’s creative style while ensuring that the website remained consistent and professional across various screen sizes." descriptionThree="added interactivity to the site, powering dynamic animations and video elements, which enhanced user engagement and allowed visitors to experience GenjutsuATL's filmmaking artistry firsthand." url="https://genjutsuatl.com"/>,
  },
];
