import { MoreVertical } from 'lucide-react'
import { Dot } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../../core/ui/dropdown-menu'

const TicketCard = ({ handleToggle }: any) => {
  return (
    <>
      <div className='container flex flex-col gap-3 rounded-lg  border border-[#98989866] p-4'>
        <div className='flex w-full justify-between'>
          <span className='text-2xl font-bold text-primary'> General Admission</span>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='cursor-pointer bg-primary text-white'>
              <DropdownMenuItem className='cursor-pointer' onClick={handleToggle}>
                Edit
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className='flex w-full items-center justify-between max-lg:flex-col max-lg:items-start '>
          <div className='flex gap-3 max-sm:flex-col max-sm:gap-1'>
            <div className='flex items-center'>
              <Dot className='text-green-500' size={30} />
              <span className='text-[#06173566]'>On Sale</span>
            </div>
            <div className='flex items-center'>
              <Dot size={30} />
              <span className='text-[#06173566]'>Ends Dec 12,2023 at 3PM</span>
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <span className='text-[#06173566]'>Sold: 3/50</span>
            <span className='text-[#06173566]'>Free</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default TicketCard
