import Link from 'next/link'
import Image from 'next/image'

import ExternalLink from '../../../public/assets/external-link.svg'
import ChevronLeft from '../../../public/assets/chevron-left.svg'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/core/ui/select'

const LeftSideBar = ({ activeComponent }: { activeComponent: string }) => {
  return (
    <>
      <div className='md:card-drop-shadow w-[280px] bg-[#DEF0FF] max-md:bg-white '>
        <div className='mb-10 ml-2 mt-20 flex flex-col justify-center bg-[#DEF0FF] pl-3 max-md:ml-0 max-md:bg-white max-md:pl-1'>
          <div className='mb-5 flex items-center'>
            <Link href='/organizer/events'>
              <Image
                src={ChevronLeft}
                alt='chevron-left'
                className='mr-3 h-[25px] w-[25px] cursor-pointer stroke-[#3B5998] text-[#3B5998] max-sm:mr-0 max-sm:h-[30px] max-sm:w-[25px]'
              />
            </Link>
            <span className='text-lg font-bold text-[#3B5998]'>Events</span>
          </div>
          {/* Draft and Publish Trigger */}
          <Select>
            <SelectTrigger
              className='ml-3 h-[40px] w-[90px] border-none bg-btnsecondary text-white outline-none'
              color='text-white'
            >
              <SelectValue placeholder='Draft' />
            </SelectTrigger>
            <SelectContent className='border-none bg-primary text-white outline-none'>
              <SelectGroup className='cursor-pointer'>
                <SelectItem value='Draft'>Draft</SelectItem>
                <SelectItem value='Publish'>Publish</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Title */}
          <div className='ml-3 mt-10 flex flex-col gap-2'>
            <span className='text-3xl font-bold text-primary'>Music</span>
            <span className=' mt-3 text-sm font-bold text-[#757575]'>Monday, 31 July 2023</span>
            <div className='flex cursor-pointer items-center gap-2 text-sm font-bold text-[#3B5998]'>
              Preview your event
              <Image
                src={ExternalLink}
                alt='link'
                className='mr-5 h-[18px] w-[18px] stroke-[#3B5998] text-[#3B5998] max-sm:mr-0 max-sm:h-[30px] max-sm:w-[25px]'
              />
            </div>
          </div>

          <Link href='/create-event-page/create-event'>
            <div
              className={`flex h-[60px] cursor-pointer items-center   ${
                activeComponent === 'create-event'
                  ? 'bg-white text-primary'
                  : 'bg-transparent text-primary'
              }`}
            >
              <div className='flex-start flex w-[150px] items-center gap-3 p-2'>
                <div className='flex w-[25px] items-center justify-center rounded-full bg-primary'>
                  <span className='text-white'>1</span>
                </div>
                <span className='text-lg font-bold text-primary'>Basic Info</span>
              </div>
            </div>
          </Link>

          <Link href='/create-event-page/event-details'>
            <div
              className={`flex h-[60px] cursor-pointer items-center    ${
                activeComponent === 'event-details'
                  ? 'bg-white text-primary'
                  : 'bg-transparent text-primary'
              }`}
            >
              <div className='flex-start flex w-[150px]  items-center gap-3 p-2'>
                <div className='flex w-[25px] items-center justify-center rounded-full bg-primary'>
                  <span className='text-white'>2</span>
                </div>
                <span className='text-lg font-bold text-primary'>Details</span>
              </div>
            </div>
          </Link>

          <Link href='/create-event-page/create-event'>
            <div
              className={`flex h-[60px] cursor-pointer items-center    ${
                activeComponent === 'home' ? 'bg-white text-primary' : 'bg-transparent text-primary'
              }`}
            >
              <div className='flex-start flex w-[150px]  items-center gap-3 p-2'>
                <div className='flex w-[25px] items-center justify-center rounded-full bg-primary'>
                  <span className='text-white'>3</span>
                </div>
                <span className='text-lg font-bold text-primary'>Tickets</span>
              </div>
            </div>
          </Link>

          <Link href='/create-event-page/create-event'>
            <div
              className={`flex h-[60px] cursor-pointer items-center    ${
                activeComponent === 'home' ? 'bg-white text-primary' : 'bg-transparent text-primary'
              }`}
            >
              <div className='flex-start flex w-[150px]  items-center gap-3 p-2'>
                <div className='flex w-[25px] items-center justify-center rounded-full bg-primary'>
                  <span className='text-white'>4</span>
                </div>
                <span className='text-lg font-bold text-primary'>Publish</span>
              </div>
            </div>
          </Link>
          <Link href='/create-event-page/create-event'>
            <div
              className={`flex h-[60px] cursor-pointer items-center    ${
                activeComponent === 'home' ? 'bg-white text-primary' : 'bg-transparent text-primary'
              }`}
            >
              <div className='flex-start flex w-[150px]  items-center gap-3 p-2'>
                <span className='text-lg font-bold text-primary'>Dashboard</span>
              </div>
            </div>
          </Link>

          <div className='flex h-[70px] cursor-pointer items-center justify-center p-2'></div>
          <div className='flex h-[80px] cursor-pointer items-center justify-center p-2'></div>
        </div>
      </div>
    </>
  )
}

export default LeftSideBar
