import EventDetailsCard from '@/components/Cards/EventDetailsCard'
import EventSummaryCard from '@/components/Cards/EventSummaryCard'
import UploadImageCard from '@/components/Cards/UploadImageCard'
import EventLayout from '@/components/Events/layouts/EventLayout'

const EventDetails = () => {
  return (
    <>
      <EventLayout>
        <div className='container'>
          <div className='mt-5 flex flex-col gap-10 px-10 max-sm:px-2'>
            <UploadImageCard />
            <EventSummaryCard />
            <EventDetailsCard />
            <div className='mt-5 flex w-full justify-end gap-5 p-3'>
              <button className='flex h-[43px] w-[120px] items-center justify-center rounded-sm bg-[#DEF0FF] p-3 font-bold text-primary'>
                Discard
              </button>

              <button className='flex h-[43px] w-[120px] items-center justify-center rounded-sm bg-btnprimary p-3 font-bold text-white hover:bg-btnsecondary'>
                Save
              </button>
            </div>
          </div>
        </div>
      </EventLayout>
    </>
  )
}

export default EventDetails
