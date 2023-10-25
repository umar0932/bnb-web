import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header/Header'
import { useAutocomplete } from '@/core/hooks/useAutocomplete'
import ArrowIcon from '../../public/assets/arrow_down.svg'
import CurrentLocation from '../../public/assets/current_location.svg'
import BrowseOnline from '../../public/assets/browse_online.svg'
import NextEventImage from '../../public/assets/next_event_image.png'
import { events } from '@/utils/fakeBackend'

import EventCard from '@/components/Cards/EventCard'
import EventSection from '@/components/HomePage/EventSection'
import FeaturedSection from '@/components/Sections/FeaturedSection'
import Footer from '@/components/Footer/Footer'

export default function FindNextEvent() {
  const eventsArray = events

  const { searchInputRef, findMyLocation } = useAutocomplete()
  const [isAdditionalDivOpen, setIsAdditionalDivOpen] = useState(false)

  const toggleAdditionalDiv = () => {
    setIsAdditionalDivOpen(!isAdditionalDivOpen)
  }
  const slicedEvents = eventsArray.slice(0, 4)

  return (
    <>
      <div className='flex flex-col bg-[#EFF8FF]'>
        <Header />
        {/* Location Search  */}
        <div className='relative mt-20 flex  bg-secondary p-20'>
          <div className=' relative flex flex-col gap-4 max-lg:w-full max-lg:items-center max-lg:justify-center'>
            <span className='pl-2 text-xl text-white max-sm:pl-0'>Find best event in</span>

            <div className='flex items-center '>
              <input
                className='w-full max-w-[240px] bg-transparent p-1   text-start text-4xl font-bold text-[#DEF0FF]  outline-none placeholder:text-[#DEF0FF]'
                placeholder='California'
                ref={searchInputRef}
                type='text'
              />
              <Image
                src={ArrowIcon}
                alt='arrow_icon'
                className='h-[25px] w-[25px] cursor-pointer max-sm:h-[20px] max-sm:w-[20px]'
                onClick={toggleAdditionalDiv}
              />
            </div>
            {isAdditionalDivOpen && (
              <div className='absolute  top-[90px] flex flex-col gap-3 bg-[#F6FBFF] p-4  max-sm:p-3'>
                <div className='flex cursor-pointer gap-5' onClick={toggleAdditionalDiv}>
                  <Image src={CurrentLocation} alt='current_location' onClick={findMyLocation} />
                  <span className='text-base text-[#3B5998]'>Use my current location</span>
                </div>
                <div className='border border-[#9CB2DF]'></div>
                <div className='flex cursor-pointer gap-6'>
                  <Image src={BrowseOnline} alt='browse_online_events' />
                  <span className='text-base text-[#3B5998]'>Browse online events</span>
                </div>
              </div>
            )}
          </div>
          <div className=' absolute  right-0 top-[90px] mr-20 max-lg:hidden'>
            <Image src={NextEventImage} alt='next-event-image' className=' h-[290px] w-[595px]' />
          </div>
        </div>

        {/* Nearest Results */}
        <div className='mt-20 flex flex-col bg-white p-10 max-sm:p-3'>
          <span className='gap-10 pl-10 pt-10  text-3xl font-bold text-primary max-sm:flex-col max-sm:pl-0 '>
            Nearest California
          </span>
          <div className='mt-10  flex w-full justify-between gap-10 overflow-auto p-5'>
            {slicedEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
        {/* Event Section Component */}
        <EventSection />

        {/* Featured Organizers Sections */}
        <FeaturedSection />

        <Footer />
      </div>
    </>
  )
}
