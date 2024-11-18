 
import PageWrapper from "@/components/wrapper/page-wrapper";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/ui/ShootingStarsAndStarsBackgroundDemo";
import { TimelineDemo } from "@/components/ui/TimelineDemo";
import MarketingCards from "@/components/ui/marketing-cards";
import About from "@/components/homepage/About";
import { AppleCardsCarouselDemo } from "@/components/ui/AppleCardsCarouselDemo";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HyperTextDemo } from '@/components/ui/HyperTextDemo'
import BlogCards from "@/components/homepage/BlogCards";
{/* import BlogPostPage from "@/components/homepage/BlogPost";
import { BackgroundBeamsDemo } from "@/components/ui/BackgroundBeamsDemo";
import { ParticlesDemo } from "@/components/ui/ParticlesDemo"; */}
 


export default function Home() {
  return (
    <div className="relative min-h-screen">
      <PageWrapper>
       
      
        <ShootingStarsAndStarsBackgroundDemo />
      
           
       
         
          <About />
          <MarketingCards />

 
          <AppleCardsCarouselDemo />
 
          
 
       
         
       
            
       

        
          <TimelineDemo />
         
          <BlogCards/>
          <BackgroundBeamsWithCollision>
           <HyperTextDemo />
          </BackgroundBeamsWithCollision>
      </PageWrapper>
    </div>
  );
}
