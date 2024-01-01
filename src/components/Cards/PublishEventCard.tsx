import Image from 'next/image'

import EventImage from '../../../public/assets/browse_event2.png'
import TicketIcon from '../../../public/assets/publish_ticket_icon.svg'
import UserIcon from '../../../public/assets/publish_customer_icon.svg'
import ExternalLink from '../../../public/assets/external-link.svg'

const PublishEventCard = () => {
  return (
    <>
      <div className='mt-5 flex rounded-lg border border-[#98989866] max-lg:flex-col '>
        <div className='flex w-[50%] max-lg:w-[100%] max-lg:items-center max-lg:justify-center'>
          <Image
            src={EventImage}
            alt='event_image'
            className='flex h-full items-center justify-center rounded-lg object-cover'
          />
        </div>
        <div className='flex w-[50%] flex-col gap-1 p-4 max-lg:w-[100%]'>
          <span className='text-2xl font-bold text-primary'>Music</span>
          <span className='text-sm text-primary max-sm:text-xs'> Dec 12,2023 at 3 PM</span>
          <span className='text-sm text-primary max-sm:text-xs'>
            16M 1902 Main Avenue, California, USA, 54000
          </span>
          <div className='mt-2 flex items-center gap-4'>
            <div className='flex items-center gap-2 '>
              <Image src={TicketIcon} alt='ticket_icon' />
              <span>$0.0</span>
            </div>
            <div className='flex items-center gap-2'>
              <Image src={UserIcon} alt='user_icon' />
              <span>7</span>
            </div>
          </div>
          <div className='mt-2 flex items-center'>
            <span className='text-sm text-primary max-sm:text-xs'>
              One of the greatest music concert ever in your town, full of zeal,zest and enthusiasm.
            </span>
          </div>
          <div className='mt-3 flex w-full items-center justify-center border-t border-[#98989866] p-1 '>
            <div className='mt-2 flex cursor-pointer items-center gap-2 text-lg font-bold text-[#3B5998] max-sm:text-sm'>
              Preview your event
              <Image
                src={ExternalLink}
                alt='link'
                className='mr-5 h-[18px] w-[18px] stroke-[#3B5998] text-[#3B5998] max-sm:mr-0 max-sm:h-[30px] max-sm:w-[15px]'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PublishEventCard
