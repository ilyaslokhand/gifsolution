import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import client2 from "../Images/client2.png"
import client5 from "../Images/client5.png"
import client6 from "../Images/client6.png"
import client7 from "../Images/client7.png"
import client10 from "../Images/client10.png"
import logobackground from "../Images/logobackground.jpg"

const ClientLogos = () => {
  const logos = [client2, client5, client6, client7, client10]

  return (
    <div className="mt-10  pb-20">
      <h2 className='text-center '>Trusted by more than 1000+ company</h2>
      <div
        className="w-full relative flex items-center rounded-[30px] px-6 py-10 overflow-hidden mt-3"
        style={{
          backgroundImage: `url(${logobackground})`,
          backgroundPosition: "bottom center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Carousel className="w-full ">
          <CarouselContent>
            {logos.map((logo, index) => (
              <CarouselItem key={index} className="flex basis-1/1 md:basis-1/3 lg:basis-1/4 justify-center items-center"
>
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-16 w-auto object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </div>
  )
}

export default ClientLogos
