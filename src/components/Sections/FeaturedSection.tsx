import React, { useState } from 'react'
import Image from 'next/image'
import CrossIcon from '../../../public/assets/cross_icon.svg'

import { organizers } from '@/utils/fakeBackend'
import FeaturedCard from '../Cards/FearturedCard'

export default function FeaturedSection() {
  const organizersArray = organizers
  const [isVisible, setIsVisible] = useState(true) // State to manage visibility

  const handleClose = () => {
    setIsVisible(false) // Set visibility to false when closing
  }

  return isVisible ? (
    <>
      <div className='card-drop-shadow  mt-10 flex min-h-[280px]  flex-col gap-3 bg-[#DEF0FF] p-10 max-sm:min-h-[320px]'>
        <Image
          src={CrossIcon}
          alt='cancel_icon'
          className='absolute right-[50px] h-[20px] w-[20px] cursor-pointer'
          onClick={handleClose}
        />
        <span className='text-3xl font-bold text-primary '>
          Featured
          <br className='sm:hidden' /> Organizers
        </span>
        <span className='text-lg text-[#757575]'>
          Follow the organizers from these events and get notified when they create new ones.
        </span>
      </div>
      <div className='relative bottom-[150px] flex justify-between gap-10 overflow-x-auto p-5 max-sm:bottom-[100px]'>
        {organizersArray.map((organizer, index) => (
          <FeaturedCard key={index} organizer={organizer} />
        ))}
      </div>
    </>
  ) : null
}
