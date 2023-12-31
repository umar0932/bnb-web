import EventCard from '@/components/Cards/EventCard'
import Copyright from '@/components/Copyright/Copyright'
import Header from '@/components/Header/Header'

import { events } from '@/utils/fakeBackend'

const Likes = () => {
  const eventsArray = events
  return (
    <>
      <div className=' min-2xl:items-center flex h-[100vh] flex-col'>
        <Header colorScheme='likes-page-header' />
        <div className=' mt-10 flex  h-full items-center justify-center bg-[#DEF0FF]'>
          <div className=' flex gap-10 overflow-auto bg-[#DEF0FF] p-10'>
            {eventsArray.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
        <Copyright />
      </div>
    </>
  )
}

export default Likes
