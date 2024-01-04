import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/core/ui/carousel'

import EventImage1 from '../../../public/assets/hero_section.png'
import EventImage2 from '../../../public/assets/create-event.png'
import EventImage3 from '../../../public/assets/event-details-background.png'

const images = [
  {
    url: EventImage1,
    alt: 'Event Image 1'
  },
  {
    url: EventImage2,
    alt: 'Event Image 2'
  },
  {
    url: EventImage3,
    alt: 'Event Image 3'
  }
]

const ImageCarousel = () => {
  return (
    <div className='div-drop-shadow backdrop-blur-90 m-auto mb-6 flex max-h-[400px] w-[95%] items-center justify-center rounded-lg bg-white bg-opacity-80 '>
      <Carousel className='max-h-[400px]'>
        <CarouselContent className='max-h-[400px] '>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Image src={image.url} alt={image.alt} className='rounded-lg' />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default ImageCarousel
