import { Sheet, SheetContent, SheetTrigger } from '@/core/ui/sheet'
import EventLayout from './EventLayout'

import Menu from '../../../../public/assets/menu.svg'

import Image from 'next/image'

const EventHeaderLayout = () => {
  return (
    <>
      <div>
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
          <SheetContent></SheetContent>
        </Sheet>
      </div>
    </>
  )
}

export default EventHeaderLayout
