import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Heart } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from '@/core/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/core/ui/dropdown-menu'

import UserProfileIcon from '../../../public/assets/user_profile_icon.svg'
import TicketIconRed from '../../../public/assets/ticket_icon_red.svg'
import PlusIcon from '../../../public/assets/plus_icon.svg'

const AuthHeader = ({ colorScheme = 'default' }) => {
  return (
    <>
      <div className=' relative z-20  bg-transparent'>
        <nav className='  bg-transparent p-5 lg:flex lg:items-center lg:justify-between'>
          <div className='flex items-center justify-between'>
            <div className='w-[50px] rounded-lg bg-white p-2 text-center'>
              <span className='text-lg'>Logo</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <span className='mx-2 block cursor-pointer text-3xl lg:hidden'>
                  <Menu
                    size={25}
                    className={`text-${colorScheme === 'alternative' ? 'white' : 'secondary'}`}
                  />
                </span>
              </SheetTrigger>
              <SheetContent>
                <ul className='my-10 flex w-full flex-col items-center justify-between gap-5 bg-transparent  transition-all duration-500 ease-in '>
                  <li className='my-6 min-w-[150px]  md:my-0'>
                    <div>
                      <DropdownMenu>
                        <DropdownMenuTrigger className='outline-none'>
                          <div className='flex  cursor-pointer items-center  gap-2 text-secondary'>
                            johndoe@gmail.com
                            <Image
                              src={UserProfileIcon}
                              alt='user-profile-icon'
                              className='h-[17px] w-[17px]'
                            />
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='cursor-pointer border-[#07264E] bg-[#07264E] p-3 text-white'>
                          <Link href='/browse-events'>
                            <DropdownMenuItem className='cursor-pointer'>
                              Browse Events
                            </DropdownMenuItem>
                          </Link>
                          <DropdownMenuItem className='cursor-pointer'>
                            Manage my events
                          </DropdownMenuItem>
                          <Link href='/likes'>
                            <DropdownMenuItem className='cursor-pointer'>Liked</DropdownMenuItem>
                          </Link>
                          <Link href='/following'>
                            <DropdownMenuItem className='cursor-pointer'>
                              Following
                            </DropdownMenuItem>
                          </Link>

                          <Link href='/account-settings'>
                            <DropdownMenuItem className='cursor-pointer'>
                              Account Settings
                            </DropdownMenuItem>
                          </Link>
                          <DropdownMenuItem className='cursor-pointer'>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </li>

                  <li className='mx-4 my-6 md:my-0'>
                    <Link href='/create-event-page/welcome'>
                      <div className='flex  cursor-pointer items-center  gap-2 text-secondary'>
                        <p className='min-w-[100px] text-sm font-normal'>Create an event</p>
                        <Image
                          src={PlusIcon}
                          alt='plus_icon'
                          className='h-[12px] w-[12px] text-btnsecondary'
                        />
                      </div>
                    </Link>
                  </li>
                  <li className='mx-4 my-6 md:my-0'>
                    <Link href='/likes'>
                      <div className='flex  cursor-pointer items-center  gap-2 text-secondary'>
                        <p className='min-w-[100px] text-sm font-normal'>Like</p>
                        <Heart size={14} stroke='none' fill='#CC0001' />
                      </div>
                    </Link>
                  </li>
                  <li className='mx-4 my-6 md:my-0'>
                    <Link href='/orders'>
                      <div className='flex  cursor-pointer items-center  gap-2 text-secondary'>
                        <p className='min-w-[100px] text-sm font-normal'>Tickets</p>
                        <Image
                          src={TicketIconRed}
                          alt='ticket_icon'
                          className='h-[15px] w-[15px]'
                        />
                      </div>
                    </Link>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
          {colorScheme !== 'second-alternative' && (
            <ul
              className={`absolute display-${
                colorScheme === 'second-alternative' ? 'none' : ''
              }  left-0 top-[-400px] z-[-1] w-full gap-5 bg-transparent py-4 pl-7 opacity-0 transition-all duration-500 ease-in lg:static lg:z-auto lg:flex lg:items-center lg:justify-end lg:py-0 lg:pl-5 lg:opacity-100 `}
            >
              <li className='mx-6 my-6 min-w-[100px]  md:my-0'>
                <Link href='/create-event-page/welcome'>
                  <div
                    className={`flex cursor-pointer items-center  gap-2 text-secondary text-${
                      colorScheme === 'alternative' ? 'white' : 'secondary'
                    } `}
                  >
                    <p className='text-sm font-normal '>Create an event</p>
                    <Image
                      src={PlusIcon}
                      alt='plus_icon'
                      className='h-[12px] w-[12px] text-btnsecondary'
                    />
                    {/* <Cross size={12} stroke="none" fill="#CC0001" /> */}
                  </div>
                </Link>
              </li>
              <li className='mx-6 my-6   md:my-0'>
                <Link href='/likes'>
                  <div
                    className={`flex cursor-pointer items-center  gap-2 text-secondary text-${
                      colorScheme === 'alternative' ? 'white' : 'secondary'
                    } `}
                  >
                    <p className='text-sm font-normal '>Like</p>
                    <Heart size={14} stroke='#CC0001' />
                  </div>
                </Link>
              </li>
              <li className='mx-6 my-6   md:my-0'>
                <Link href='/orders'>
                  <div
                    className={`flex cursor-pointer items-center  gap-2 text-secondary text-${
                      colorScheme === 'alternative' ? 'white' : 'secondary'
                    } `}
                  >
                    <p className='text-sm font-normal '>Tickets</p>
                    <Image src={TicketIconRed} alt='ticket_icon' className='h-[15px] w-[15px]' />
                  </div>
                </Link>
              </li>
              <li className='my-6 min-w-[150px]  md:my-0'>
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger className='outline-none'>
                      <div
                        className={`flex cursor-pointer items-center  gap-2 text-secondary text-${
                          colorScheme === 'alternative' ? 'white' : 'secondary'
                        } `}
                      >
                        johndoe@gmail.com
                        <Image
                          src={UserProfileIcon}
                          alt='user-profile-icon'
                          className='h-[17px] w-[17px]'
                        />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='cursor-pointer border-[#07264E] bg-[#07264E] p-3 text-white'>
                      <Link href='/browse-events'>
                        <DropdownMenuItem className='cursor-pointer'>
                          Browse Events
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem className='cursor-pointer'>
                        Manage my events
                      </DropdownMenuItem>
                      <Link href='/likes'>
                        <DropdownMenuItem className='cursor-pointer'>Liked</DropdownMenuItem>
                      </Link>

                      <Link href='/following'>
                        <DropdownMenuItem className='cursor-pointer'>Following</DropdownMenuItem>
                      </Link>

                      <Link href='/account-settings'>
                        <DropdownMenuItem className='cursor-pointer'>
                          Account Settings
                        </DropdownMenuItem>
                      </Link>
                      <Link href='/'>
                        <DropdownMenuItem className='cursor-pointer'>Logout</DropdownMenuItem>
                      </Link>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </li>
            </ul>
          )}
        </nav>
        <div className='mx-5 border-b border-b-[#00437A]'></div>
      </div>
      {/* Event Page */}
    </>
  )
}

export default AuthHeader
