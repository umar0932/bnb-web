import { useState } from 'react'
import Image from 'next/image'

import { Organizer } from '@/interfaces'

import { Button } from '@/core/ui/button'

import CardCrossIcon from '../../../public/assets/cross_small_icon.svg'

interface OrganizerCardProps {
  organizer: Organizer
}

const FeaturedCard = ({ organizer }: OrganizerCardProps) => {
  const [isVisible, setIsVisible] = useState(true) // State to manage visibility

  const handleClose = () => setIsVisible(false)

  return isVisible ? (
    <div className='card-drop-shadow flex min-w-[300px] flex-col rounded-3xl bg-[#F6FBFF] p-5'>
      <div className='flex w-full justify-end'>
        <div className='flex w-[35px] cursor-pointer rounded-full bg-[#F2F2F2] p-3'>
          <Image src={CardCrossIcon} alt='cancel_icon' onClick={handleClose} />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-10'>
        <div className='flex items-center gap-5'>
          <Image src={organizer.imageSrc} alt='organizer_logo' className='h-[90px] w-[90px]' />
          <div className='flex flex-col gap-2'>
            <span className='text-lg font-bold text-primary'>{organizer.name}</span>
            <span className='text-md text-[#757575]'>{organizer.countFollowers} Followers</span>
          </div>
        </div>
        <Button className='text-md mt-5 w-[170px] rounded-lg bg-btnprimary p-2 text-white hover:bg-btnsecondary'>
          Follow
        </Button>
      </div>
    </div>
  ) : null
}

export default FeaturedCard
