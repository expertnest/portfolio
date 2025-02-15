"use client";

import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { FlipWords } from "./flip-words";
import { BorderBeam } from "./border-beam";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[16rem] mt-12 rounded-md bg-neutral-900 overflow-hidden">
      <h2 className="z-10 flex flex-col md:flex-row items-center gap-2 md:gap-6 text-3xl md:text-5xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 via-white to-white text-center max-w-5xl">
        Crafting Experiences in
      </h2>
      <FlipWords words={["Web Development", "Applications", "UI/UX Design"]} />
      <ShootingStars />
      <StarsBackground />
      <div className="hidden md:block">
        <BorderBeam />
      </div>
    </div>
  );
}
