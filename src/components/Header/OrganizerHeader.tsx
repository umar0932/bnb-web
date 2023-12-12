import React from 'react'
import Image from 'next/image'
import ProfileIcon from '../../../public/assets/user_profile_icon.svg'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/core/ui/dropdown-menu'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/core/ui/navigation-menu'
import { GoHome } from 'react-icons/go'
import { BiCalendar } from 'react-icons/bi'
import { CiViewList } from 'react-icons/ci'
import { IoSettingsOutline } from 'react-icons/io5'
import { BsGrid3X3GapFill } from 'react-icons/bs'

export default function OrganizerHeader() {
  return (
    <>
      <div className='card-drop-shadow flex justify-end bg-[#DEF0FF] p-3'>
        <div className='flex items-center gap-5'>
          <NavigationMenu className='lg:hidden'>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='rounded-full'>
                  <BsGrid3X3GapFill size={25} />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className='flex w-[260px] flex-wrap'>
                    <Link href='/organizer/home'>
                      <div className='flex w-full cursor-pointer items-center gap-4 p-5 hover:bg-btnprimary hover:text-white '>
                        <GoHome size={18} />
                        <span>Home</span>
                      </div>
                    </Link>

                    <Link href='/organizer/events'>
                      <div className='flex w-full cursor-pointer items-center gap-4 p-5 hover:bg-btnprimary hover:text-white  '>
                        <BiCalendar />
                        <span>Events</span>
                      </div>
                    </Link>

                    <Link href='/organizer/orders'>
                      <div className='flex w-full cursor-pointer items-center gap-4 p-5 hover:bg-btnprimary hover:text-white  '>
                        <CiViewList />
                        <span>Orders</span>
                      </div>
                    </Link>
                    <Link href='/organizer/settings'>
                      <div className='flex w-full cursor-pointer items-center gap-4 p-5 hover:bg-btnprimary hover:text-white '>
                        <IoSettingsOutline />
                        <span>Settings</span>
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className='outline-none'>
              <div className='flex w-[200px] flex-shrink-0 items-center gap-2 rounded-full bg-white p-3'>
                <span>johndoe@gmail.com</span>
                <Image src={ProfileIcon} alt='user_profile_icon' className='h-[17px] w-[17px]' />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='cursor-pointer border-[#07264E] bg-[#07264E] p-3 text-white'>
              <DropdownMenuItem className='cursor-pointer'>Switch to Attendee</DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  )
}
