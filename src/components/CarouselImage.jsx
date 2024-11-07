import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const CarouselImage = () => {
  return (
    <Carousel>
  <CarouselContent>
    <CarouselItem>
    <img src='img/ceo_chat.jpg' />
    </CarouselItem>
    <CarouselItem>
    <img src='img/ceo_with_staff.jpg' />
    </CarouselItem>
    <CarouselItem>

      <img src='img/staff.jpg' />
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

  )
}

export default CarouselImage