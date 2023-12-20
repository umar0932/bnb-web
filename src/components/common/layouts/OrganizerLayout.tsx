import React, { ReactNode } from 'react'
import { useRouter } from 'next/router'
import OrganizerHeader from '@/components/Header/OrganizerHeader'
import { GoHome } from 'react-icons/go'
import { BiCalendar } from 'react-icons/bi'
import { CiViewList } from 'react-icons/ci'
import { IoSettingsOutline } from 'react-icons/io5'
import Image from 'next/image'

import Link from 'next/link'

import HelpIcon from '../../../../public/assets/help_icon.svg'

interface OrganizerLayoutProps {
  children: ReactNode
}

const OrganizerLayout: React.FC<OrganizerLayoutProps> = ({ children }) => {
  const router = useRouter()
  const activeComponent = router.pathname.split('/').pop()
  console.log(activeComponent)
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex'>
          <div className='w-[80px] bg-white p-5 max-sm:hidden'>Logo</div>
          <div className='w-full'>
            {' '}
            <OrganizerHeader />
          </div>
        </div>
        {/* Left Side */}
        <div className='flex w-full '>
          <div className='card-drop-shadow w-[80px] bg-[#DEF0FF] max-lg:hidden'>
            <div className='mb-10 mt-20 flex flex-col justify-center bg-[#DEF0FF]'>
              <Link href='/organizer/home'>
                <div
                  className={`flex h-[70px] cursor-pointer items-center justify-center p-2 ${
                    activeComponent === 'home' ? 'bg-btnsecondary text-white' : ''
                  }`}
                >
                  <GoHome
                    size={27}
                    className={` ${activeComponent === 'home' ? 'text-white' : 'text-[#3B5998]'}`}
                  />
                </div>
              </Link>
              <Link href='/organizer/events'>
                <div
                  className={`flex h-[70px] cursor-pointer items-center justify-center p-2 ${
                    activeComponent === 'events' ? 'bg-btnsecondary text-white' : ''
                  }`}
                >
                  <BiCalendar
                    size={27}
                    className={` ${activeComponent === 'events' ? 'text-white' : 'text-[#3B5998]'}`}
                  />
                </div>
              </Link>
              <Link href='/organizer/orders'>
                <div
                  className={`flex h-[70px] cursor-pointer items-center justify-center p-2 ${
                    activeComponent === 'orders' ? 'bg-btnsecondary text-white' : ''
                  }`}
                >
                  <CiViewList
                    size={27}
                    className={` ${activeComponent === 'orders' ? 'text-white' : 'text-[#3B5998]'}`}
                  />
                </div>
              </Link>
              <Link href='/organizer/settings'>
                <div
                  className={`flex h-[70px] cursor-pointer items-center justify-center p-2 ${
                    activeComponent === 'settings' ? 'bg-btnsecondary text-white' : ''
                  }`}
                >
                  <IoSettingsOutline
                    size={27}
                    className={` ${
                      activeComponent === 'settings' ? 'text-white' : 'text-[#3B5998]'
                    }`}
                  />
                </div>
              </Link>
              <div className='flex h-[70px] cursor-pointer items-center justify-center p-2'></div>
              <div className='flex h-[80px] cursor-pointer items-center justify-center p-2'></div>

              <Link href='/help-center'>
                <div className='mt-5 flex h-[80px] cursor-pointer items-center justify-center p-2'>
                  <Image src={HelpIcon} alt='help_icon' className='h-[22px] w-[22px]' />
                </div>
              </Link>
            </div>
          </div>
          {/* Right Side */}
          <div className='flex w-full flex-col gap-5'>
            <div className='card-drop-shadow  mt-20 w-[130px] rounded-r-lg bg-btnprimary p-2 text-center capitalize text-white'>
              {activeComponent}
            </div>

            <div className='w-full items-center justify-center'>{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrganizerLayout
