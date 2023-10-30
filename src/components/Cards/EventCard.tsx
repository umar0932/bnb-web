import { useState } from 'react'
import Image from 'next/image'

import { Event } from '@/interfaces'

import HeartIcon from '../../core/icons/HeartIcon' // Import the HeartIcon component


interface EventCardProps {
  event: Event // Use the Event interface for the event prop
}

const EventCard = ({ event }: EventCardProps) => {
  const [isLiked, setIsLiked] = useState(false)

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <>
      <div className='drop-shadow-custom flex w-[300px] flex-shrink-0 flex-col bg-[#F6FBFF]'>
        <Image src={event.imageSrc} alt='event_image' />

        <div className='flex flex-col gap-1 p-5 max-sm:p-2'>
          <div
            className={`absolute top-[177px] flex h-[40px] w-[40px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#DEF0FF]   ${
              isLiked ? 'text-red-500' : 'text-[#003A6D]'
            }`}
          >
            <HeartIcon isLiked={isLiked} onClick={toggleLike} /> {/* Use the HeartIcon component */}
          </div>
          <div className='mt-4 flex flex-col gap-1'>
            <span className='text-md text-secondary'>
              {event.title}
              <span className='font-bold text-[#061735]'>{event.sub_title}</span>
            </span>
            <span className='text-sm text-[#757575]'>{event.location}</span>
            <span className='text-sm font-bold text-[#00B007]'>
              {event.creatorFollowers}
              <span className=' ml-2 text-sm font-normal text-[#757575]'>Creator Followers</span>
            </span>
            <div className='flex flex-col'>
              <span className='text-md text-end text-[#C70039]'>{event.date}</span>
              <div className='flex items-center justify-between'>
                <span className='text-md text-end font-bold text-[#FF3D00]'>{event.price}</span>
                <span className='text-md text-end text-[#C70039]'>{event.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventCard
