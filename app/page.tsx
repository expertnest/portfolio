 
import PageWrapper from "@/components/wrapper/page-wrapper";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/ui/ShootingStarsAndStarsBackgroundDemo";
import { TimelineDemo } from "@/components/ui/TimelineDemo";
import MarketingCards from "@/components/ui/marketing-cards";
import About from "@/components/homepage/About";
import { AppleCardsCarouselDemo } from "@/components/ui/AppleCardsCarouselDemo";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HyperTextDemo } from '@/components/ui/HyperTextDemo'


export default function Home() {
  return (
    <div className="relative min-h-screen">
      <PageWrapper>
        
          <ShootingStarsAndStarsBackgroundDemo />
          <About />
          <MarketingCards />
          <div className="container mx-auto">
              <AppleCardsCarouselDemo />
          </div>
        
          <TimelineDemo />
          <BackgroundBeamsWithCollision>
           <HyperTextDemo />
          </BackgroundBeamsWithCollision>
      </PageWrapper>
    </div>
  );
}
