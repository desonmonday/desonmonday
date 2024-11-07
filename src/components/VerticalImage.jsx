import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const CarouselSize = () => {
    const images = [
        "img/ceo.jpg",
        "img/ceo_chat.jpg",
        "img/staff.jpg",
        "img/staff.jpg",
        "img/staff.jpg",
        "img/staff.jpg",
        "img/staff.jpg",

    ]
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="w-full">
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center justify-center p-2">
                  <img src={image} alt={index} className="w-full h-full"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}


export default CarouselSize