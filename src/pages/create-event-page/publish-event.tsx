import PublishEventCard from '@/components/Cards/PublishEventCard'
import EventLayout from '@/components/Events/layouts/EventLayout'

import { Checkbox } from '@/core/ui/checkbox'

const PublishEvent = () => {
  return (
    <>
      <EventLayout>
        <div className='container w-full'>
          <div className='m-auto mt-10 flex w-[70%] flex-col gap-8 p-3 max-lg:w-[85%] max-sm:w-[100%]'>
            <span className='text-3xl font-bold text-primary'>Publish Event</span>
            <PublishEventCard />
            <div className='flex items-center space-x-2'>
              <Checkbox className='text-btnseondary' defaultChecked={true} />
              <span className='text-lg'>Publish Now</span>
            </div>

            <div className='mt-5 flex w-full justify-end gap-5 p-3'>
              <button className='flex h-[43px] w-[120px] items-center justify-center rounded-sm bg-btnprimary p-3 font-bold text-white hover:bg-btnsecondary'>
                Publish
              </button>
            </div>
          </div>
        </div>
      </EventLayout>
    </>
  )
}

export default PublishEvent
