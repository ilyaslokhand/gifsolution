import React from 'react'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { Button } from '@/components/ui/button'
import ShinyText from '@/components/ui/ShinyText'

const Service = () => {
  const services = [
    {
      title: "Creative Video Production",
      description:
        "From concept to final cut, we craft compelling videos that capture hearts and bring stories to life — frame by frame.",
    },
    {
      title: "Visual Storytelling & Development",
      description:
        "We don’t just shoot — we imagine, storyboard, and sculpt narratives that resonate, inspire, and spark connection.",
    },
    {
      title: (
        <>
          Post-Production <br /> Magic
        </>
      ),
      description:
        "Where raw footage transforms into art. Our editing, color grading, and sound design turn ideas into cinematic experiences.",
    },
  ]

  return (
     <div className="mt-10  mb-5 px-4 md:px-8">
      <div className="flex justify-center mb-6">
        <div className="bg-[#FFFFFF0F] w-[260px] md:w-[310px] rounded-[30px]">
          <ShinyText
            text="Our Services"
            disabled={false}
            speed={3}
            className="pt-3 pb-3 text-center"
          />
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-bold mt-7">Our Creative Services</h1>
        <p className="mt-3 text-sm md:text-base text-left">
          We turn ideas into powerful visuals and sound. From video to animation, we bring your story to life—frame by frame.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
      {services.map(({ title, description }, index) => (
        <div
          key={index}
          className={`
            ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}
          `}
        >
          <SpotlightCard
            spotlightColor="rgba(0, 229, 255, 0.2)"
            className="flex flex-col justify-between p-5 min-h-[200px] h-full"
          >
            <div className="flex flex-col h-full">
              <h2 className="text-xl font-semibold mb-3">{title}</h2>
              <p className="flex-grow text-sm md:text-base text-gray-300">
                {description}
              </p>
              <Button className="btn-primary w-1/2 mx-auto mt-6 cursor-pointer">Read More</Button>
            </div>
          </SpotlightCard>
    </div>
  ))}
</div>

    </div>
  )
}

export default Service
