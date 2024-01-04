import AuthHeader from '@/components/Header/AuthHeader'
import { useState } from 'react'
import { Button } from '../core/ui/button'
import Image from 'next/image'

import CompanyLogo from '../../public/assets/company_logo.svg'
import CalendarIcon from '../../public/assets/calendar_icon.svg'
import LocationIcon from '../../public/assets/location_icon.svg'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../core/ui/select'
import ReportDialog from '@/components/Dialogs/ReportDialog'
import Footer from '@/components/Footer/Footer'
import Checkout from '@/components/Checkout/Checkout'
import ImageCarousel from '@/components/Events/ImageCarousel'

export default function EventDetails() {
  const [count, setCount] = useState(1)
  const [showCheckout, setShowCheckout] = useState(false)
  const [showReportDialog, setShowReportDialog] = useState(false)

  const incrementCount = () => {
    // Calculate the incremented value and update the state
    const incrementedValue = count + 1
    console.log(incrementedValue)
    setCount(incrementedValue)
  }
  const decrementCount = () => {
    // Calculate the incremented value and update the state

    const decrementedValue = count - 1
    console.log(decrementedValue)
    if (decrementedValue > 0) {
      setCount(decrementedValue)
    }
  }
  const handleReserveClick = () => {
    setShowCheckout(true)
  }
  const handleCloseCheckout = () => {
    setShowCheckout(false) // Close the dialog
  }

  const handleReportClick = () => {
    setShowReportDialog(true)
  }

  return (
    <>
      <div className=' flex  flex-col'>
        {/* <div className='event-details-background relative '>
          <AuthHeader colorScheme='alternative' />
          <div className='via-[rgba(6, 23, 53, 0.04)] absolute left-0 top-0 z-10 h-[800px] w-full bg-gradient-to-b from-[#061735] to-transparent '></div>

          <div className=' flex h-[741px] flex-col items-center '>
            <div
              className={`absolute bottom-10 right-10 z-30 flex h-[40px] w-[40px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#DEF0FF]   ${
                isLiked ? 'text-red-500' : 'text-[#003A6D]'
              }`}
            >
              <HeartIcon isLiked={isLiked} onClick={toggleLike} />{' '}
            </div>
          </div>
        </div> */}

        <div className='flex flex-col gap-3'>
          <AuthHeader />
          <ImageCarousel />
        </div>

        {/* Event name and Date  */}
        <div className='m-auto w-[95%]'>
          <div className=' flex w-full flex-col gap-4 rounded-md bg-secondary p-10'>
            <div className='flex items-center justify-between max-sm:flex-col max-sm:justify-center max-sm:gap-3'>
              <span className='text-5xl font-bold text-white max-lg:text-4xl max-sm:text-center'>
                Danica hairstylist: Haircut
              </span>
              <span className='text-3xl font-bold text-white max-lg:text-2xl'>10 June</span>
            </div>
            <span className='text-2xl font-bold text-[#DEF0FF] max-lg:text-xl max-sm:text-center max-sm:text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie leo sed
              turpis venenatis sagittis
            </span>
          </div>

          {/* Event-Details Components */}
          <div className='flex flex-col gap-10 bg-white p-10'>
            {/* Section 1 */}
            <div className='flex w-full justify-between gap-20 max-md:flex-col'>
              {/* Card-1 */}
              <div className='card-drop-shadow flex w-[600px] flex-col gap-7 rounded-lg bg-[#F6FBFF] p-5 max-md:w-full'>
                <div className='mt-2 flex justify-between'>
                  <span className='w-full text-lg font-bold text-primary'>General Admission</span>
                  <div className='flex items-center gap-3'>
                    <div
                      className='border-text-btnsecondary flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border border-[#CC0001] text-[#CC0001]'
                      onClick={decrementCount}
                    >
                      <span className='text-center text-3xl'>-</span>
                    </div>
                    <div className='font-bold text-secondary'>{count}</div>
                    <div
                      className='flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-btnsecondary text-white'
                      onClick={incrementCount}
                    >
                      <span className='text-center text-2xl'>+</span>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <Button
                    className='h-[38px] w-[150px] bg-btnprimary text-white hover:bg-btnsecondary'
                    onClick={handleReserveClick}
                  >
                    Reserve
                  </Button>
                  {showCheckout && <Checkout isOpen={showCheckout} onClose={handleCloseCheckout} />}

                  <span className='text-[#F00]'>$45</span>
                </div>
              </div>

              {/* Company Follow Card */}
              <div className='card-drop-shadow flex w-full items-center justify-between gap-5 rounded-lg bg-[#F6FBFF] p-5 max-lg:flex-col'>
                <div className='flex items-center gap-10 max-sm:flex-col'>
                  <div className='rounded-full'>
                    <Image src={CompanyLogo} alt='company_logo' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <span className='text-lg font-bold text-primary'>ABC Company</span>
                    <span className='text-[#757575]'>87654 Followers</span>
                  </div>
                </div>
                <div className='flex'>
                  <Button className='h-[38px] w-[150px] bg-btnprimary text-white hover:bg-btnsecondary'>
                    Follow
                  </Button>
                </div>
              </div>
            </div>

            {/* Section-2 */}
            <div className='flex w-full items-center justify-between gap-20 max-md:flex-col'>
              {/* Card-1 */}
              <div className='card-drop-shadow flex w-[600px] flex-col gap-7 rounded-lg bg-[#F6FBFF] p-5 max-md:w-full max-sm:p-3'>
                <div className=' flex flex-col gap-3'>
                  <span className='w-full text-lg font-bold text-primary'>Where and when</span>
                  <div className='flex items-center gap-2'>
                    <Image src={CalendarIcon} alt='calendar-icon' className='h-[15px] w-[15px]' />
                    <div className='flex w-full flex-col'>
                      <Select>
                        <SelectTrigger className='text-md w-full border-none bg-transparent text-[#003A6D]'>
                          <SelectValue placeholder='Wednesday, April 22' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {/* <SelectLabel>Fruits</SelectLabel> */}
                            <SelectItem value=''>Thursday, April 23</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <span className='pl-3 text-sm text-[#757575]'>9:00 PM GMT+5:00</span>
                    </div>
                  </div>

                  <div className='flex items-center gap-2'>
                    <Image src={LocationIcon} alt='calendar-icon' className='h-[15px] w-[15px]' />
                    <div className='flex w-full flex-col pl-3'>
                      <span className='text-md text-[#003A6D]'>California, United States</span>
                      <span className=' text-sm text-[#757575]'>9:00 PM GMT+5:00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Follow Card */}
              <div className='card-drop-shadow flex w-full  items-center  gap-5 rounded-lg bg-[#F6FBFF] p-5'>
                <div className='flex w-full flex-col gap-5'>
                  <div className='flex justify-between'>
                    <span className=' text-lg font-bold text-primary'>About this event</span>
                    <span className='font-bold text-btnsecondary'>1 hr</span>
                  </div>
                  <span className='text-md text-[#003A6D]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie leo
                    sed turpis venenatis sagittisLorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Maecenas molestie leo sed turpis venenatis sagittis Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Maecenas molestie leo sed turpis venenatis
                    sagittisLorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                    molestie leo sed turpis venenatis sagittis
                  </span>
                </div>
              </div>
            </div>
            <div className='flex justify-end'>
              <span
                className='cursor-pointer text-btnprimary underline'
                onClick={handleReportClick}
              >
                Report this event
              </span>
              {showReportDialog && (
                <ReportDialog
                  isOpen={showReportDialog}
                  onClose={() => setShowReportDialog(false)}
                />
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
