import React from "react";
import ShinyText from "../components/ui/ShinyText";
import { Button } from "@/components/ui/button";


const Hero = () => {
  return (
    <main className="relative px-4 md:px-8 lg:px-16 py-10 md:py-20">
      <div className="w-full pr-8 flex flex-col justify-center">
      <div className="bg-[#FFFFFF0F] w-[310px] rounded-[30px] mt-10 mx-auto lg:mx-0">
          <ShinyText
            text="GIF Studios"
            disabled={false}
            speed={3}
            className="pt-3 pb-3 "
          />
        </div>
        <div style={{ color: "var(--e-global-color-primary)" }} className="">
          <h1 className="text-2xl md:text-3xl font-bold mt-7 text-center lg:text-left"
            
          >
            Calling All Creatives
            <br /> Let’s Tell Great Stories Together!
          </h1>
          <p
            className="mt-3 text-sm md:text-base text-left "
            
          >
            We're on the hunt for creative minds ready to bring ideas to life.
            Show us your skills through a quick
            assignment and take the first step toward joining our dynamic
            team.
          </p>
        </div>
        <div className="flex gap-4 mt-3 justify-center lg:justify-start">
          <Button className="btn-primary cursor-pointer">Get Started</Button>
          <Button className="btn-primary cursor-pointer">Contact Us</Button>
        </div>
      </div>
      
    </main>
  );
};

export default Hero;
