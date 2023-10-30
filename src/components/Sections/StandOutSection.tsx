import Image from 'next/image'

import EventTicketIcon from '../../../public/assets/event_ticket_icon.svg'
import AnalyticsIcon from '../../../public/assets/analytics_icon.svg'
import AppIcon from '../../../public/assets/app_icon.svg'
import MobileImage from '../../../public/assets/mobile_prototype.png'

const StandOutSection = () => {
  return (
    <>
      <div className='mt-5 flex w-full max-sm:flex-col max-sm:items-center max-sm:justify-center'>
        <div className='linear-gradient my-10 flex w-[40%] items-center justify-center p-10    max-sm:w-full'>
          <div className=''>
            <Image src={MobileImage} alt='mobile_prototype_image' />
          </div>
        </div>
        <div className='flex w-[60%] flex-col bg-primary p-10 max-lg:p-5  max-sm:w-full'>
          <div className='mt-5 flex w-full flex-col items-center justify-center gap-4  text-center'>
            <span className='text-3xl font-bold text-white'>Host standout events</span>
            <span className='text-md text-center text-[#B2DBFE] md:text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non vestibulum
              nulla.
              <br className='max-sm:hidden' /> Praesent auctor molestie ornare.
            </span>
          </div>
          <div className=' mt-8 flex flex-col gap-16 p-10 max-lg:p-2 max-md:gap-10'>
            <div className='flex gap-3 max-sm:flex-col max-sm:items-center max-sm:justify-center'>
              <div className='flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-full bg-[#DEF0FF] '>
                <Image
                  src={EventTicketIcon}
                  alt='event_ticket_icon'
                  className='h-[30px] w-[30px]'
                />
              </div>
              <div className='flex flex-col gap-3 p-2 max-sm:items-center max-sm:justify-center max-sm:text-center'>
                <span className='text-lg font-bold text-white'>Event Ticketing</span>
                <span className='text-base text-[#B2DBFE]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                  <br className='max-lg:hidden' /> non vestibulum nulla. Praesent auctor molestie
                  ornare.
                </span>
              </div>
            </div>
            <div className='flex gap-3 max-sm:flex-col max-sm:items-center max-sm:justify-center'>
              <div className='flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-full bg-[#DEF0FF]'>
                <Image src={AnalyticsIcon} alt='analytics_icon' className='h-[30px] w-[30px]' />
              </div>
              <div className='flex flex-col gap-3 p-2 max-sm:items-center max-sm:justify-center max-sm:text-center'>
                <span className='text-lg font-bold text-white'>Reports & Analytics</span>
                <span className='text-base text-[#B2DBFE]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                  <br className='max-lg:hidden' /> non vestibulum nulla. Praesent auctor molestie
                  ornare.
                </span>
              </div>
            </div>
            <div className='flex gap-3 max-sm:flex-col max-sm:items-center max-sm:justify-center'>
              <div className='flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-full bg-[#DEF0FF]'>
                <Image src={AppIcon} alt='event_ticket_icon' className='h-[30px] w-[30px]' />
              </div>
              <div className='flex flex-col gap-3 p-2 max-sm:items-center max-sm:justify-center max-sm:text-center'>
                <span className='text-lg font-bold text-white'>Organizer App</span>
                <span className='text-base text-[#B2DBFE]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                  <br className='max-lg:hidden' /> non vestibulum nulla. Praesent auctor molestie
                  ornare.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StandOutSection
