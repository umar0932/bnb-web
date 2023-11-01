import Image from 'next/image'

import BnbImage1 from '../../../public/assets/benefit_section_image-1.png'
import BnbImage2 from '../../../public/assets/benefit_section_image-2.png'
import AttendeeIcon from '../../../public/assets/attendee_icon.svg'
import AdIcon from '../../../public/assets/ad_icon.svg'
import MarketingIcon from '../../../public/assets/marketing_icon.svg'

const BenefitSection = () => {
  return (
    <>
      <div className='mt-20 flex flex-col bg-primary p-10 max-md:p-2'>
        <div className='container flex gap-10 px-20 max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:gap-0 max-lg:px-5'>
          <div className='mt-5 flex w-full flex-col justify-center gap-4 max-lg:order-2 max-md:mb-10 max-md:mt-0'>
            <span className='text-3xl font-bold text-white'>Reach the right people</span>
            <span className='text-md  text-[#B2DBFE] md:text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              <br className='max-lg:hidden' />
              non vestibulum nulla. Praesent auctor molestie ornare.Lorem ipsum
              <br className='max-lg:hidden' />
              dolor sit amet, consectetur adipiscing elit.
              <br className='max-lg:hidden' /> Curabitur non vestibulum nulla. Praesent auctor
              molestie ornare.
            </span>
          </div>
          <div className='relative top-[-130px] max-lg:top-[-100px] max-lg:order-1'>
            <Image src={BnbImage1} alt='benefit_section_image' />
          </div>
        </div>
        <div className='flex gap-10 max-xl:gap-2 max-md:flex-col max-md:items-center max-md:justify-center'>
          <div className='p-10'>
            <Image src={BnbImage2} alt='benefit_section_image' className=' ' />
          </div>
          <div className=' mt-4 flex flex-col gap-16 p-10 max-xl:gap-10 max-lg:p-2 max-md:mt-0'>
            <div className='flex gap-3 max-sm:flex-col max-sm:items-center max-sm:justify-center'>
              <div className='flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-full bg-[#DEF0FF] '>
                <Image src={AttendeeIcon} alt='event_ticket_icon' className='h-[30px] w-[30px]' />
              </div>
              <div className='flex flex-col gap-3 p-2 max-sm:items-center max-sm:justify-center max-sm:text-center'>
                <span className='text-lg font-bold text-white'>Attendee Discovery</span>
                <span className='text-base text-[#B2DBFE]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                  <br className='max-lg:hidden' /> non vestibulum nulla. Praesent auctor molestie
                  ornare.
                </span>
              </div>
            </div>
            <div className='flex gap-3 max-sm:flex-col max-sm:items-center max-sm:justify-center'>
              <div className='flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-full bg-[#DEF0FF]'>
                <Image src={AdIcon} alt='analytics_icon' className='h-[30px] w-[30px]' />
              </div>
              <div className='flex flex-col gap-3 p-2 max-sm:items-center max-sm:justify-center max-sm:text-center'>
                <span className='text-lg font-bold text-white'>Bnb Ads</span>
                <span className='text-base text-[#B2DBFE]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                  <br className='max-lg:hidden' /> non vestibulum nulla. Praesent auctor molestie
                  ornare.
                </span>
              </div>
            </div>
            <div className='flex gap-3 max-sm:flex-col max-sm:items-center max-sm:justify-center'>
              <div className='flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-full bg-[#DEF0FF]'>
                <Image src={MarketingIcon} alt='event_ticket_icon' className='h-[30px] w-[30px]' />
              </div>
              <div className='flex flex-col gap-3 p-2 max-sm:items-center max-sm:justify-center max-sm:text-center'>
                <span className='text-lg font-bold text-white'>Marketing Tools</span>
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

export default BenefitSection
