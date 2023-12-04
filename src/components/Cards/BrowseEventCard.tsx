import Image, { StaticImageData } from 'next/image'

interface BrowseEvent {
  imageSrc: StaticImageData
  title: string
  sub_title: string
  location: string
  creatorFollowers: string
  date: string
  price: string
  time: string
}

interface BrowseEventCardProps {
  browse_event: BrowseEvent // Use the Event interface for the event prop
}
export default function BrowseEventCard({ browse_event }: BrowseEventCardProps) {
  return (
    <>
      <div className='flex w-full gap-3 rounded-lg bg-[#F6FBFF] max-sm:flex-col'>
        <div className='flex w-[30%] max-md:w-full max-sm:justify-center max-sm:p-5'>
          <Image src={browse_event.imageSrc} alt='browse_event_image' />
        </div>
        <div className='flex w-[70%] flex-col p-5 max-md:w-full max-md:p-2'>
          <div className='flex w-full justify-between'>
            <span className='text-xl text-[#003A6D]'>
              {browse_event.title}{' '}
              <span className='text-xl font-bold text-primary'>{browse_event.sub_title}</span>
            </span>
            <span className='font-bold text-[#F00]'>{browse_event.price}</span>
          </div>
          <span className='text-[#757575]'>{browse_event.location}</span>
          <span className='font-bold text-[#00B007]'>
            {browse_event.creatorFollowers}{' '}
            <span className='font-normal text-[#757575]'> Creator Followers</span>
          </span>
          <div className='flex flex-col text-end'>
            <span className='text-[#C70039]'>{browse_event.date}</span>
            <span className='text-[#C70039]'>{browse_event.time}</span>
          </div>
        </div>
      </div>
    </>
  )
}
