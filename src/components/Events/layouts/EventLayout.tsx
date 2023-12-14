import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Menu from '../../../../public/assets/menu.svg'

import { Sheet, SheetContent, SheetTrigger } from '@/core/ui/sheet'

import LeftSideBar from '../LeftSideBar'

interface EventLayoutProps {
  children: ReactNode
}

const EventLayout: React.FC<EventLayoutProps> = ({ children }) => {
  const router = useRouter()
  const activeComponent = router.pathname.split('/').pop() || ''
  console.log(activeComponent)
  return (
    <>
      <div className='flex flex-col'>
        {/* Left Side */}

        <div className='flex w-full '>
          <div className='flex max-md:hidden'>
            <LeftSideBar activeComponent={activeComponent} />
          </div>

          {/* Right Side */}

          <div className='flex w-full flex-col gap-5'>
            <div className='card-drop-shadow h-[60px] w-full bg-white p-5 md:hidden'>
              <Sheet>
                <SheetTrigger>
                  <div className='flex items-center gap-2 text-lg'>
                    <Image
                      src={Menu}
                      alt='menu'
                      className='mr-3 h-[22px] w-[22px] cursor-pointer stroke-black text-black max-sm:mr-0 max-sm:h-[30px] max-sm:w-[25px]'
                    />
                    <span> Details</span>
                  </div>
                </SheetTrigger>
                <SheetContent>
                  <LeftSideBar activeComponent={activeComponent} />
                </SheetContent>
              </Sheet>
            </div>
            <div className='w-full items-center justify-center'>{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventLayout
