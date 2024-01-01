import EventsOrdersTable from '@/components/Events/EventsOrderTable'
import EventLayout from '@/components/Events/layouts/EventLayout'

const Dashboard = () => {
  return (
    <>
      <EventLayout>
        <div className='container w-full'>
          <div className='m-auto mt-10 flex w-[70%] flex-col gap-8 p-3 max-lg:w-[85%] max-sm:w-[100%]'>
            <span className='text-3xl font-bold text-primary'>Dashboard</span>
            {/* Sales Card */}
            <div className='flex items-center gap-8 max-sm:flex-col'>
              <div className='card-drop-shadow flex h-[130px] w-[250px] flex-col gap-2 rounded-xl p-4'>
                <span className='text-[#757575]'>Net Sales</span>
                <span className='text-4xl font-bold text-primary'>$0.00</span>
              </div>
              <div className='card-drop-shadow flex h-[130px] w-[250px] flex-col gap-2 rounded-xl p-4'>
                <span className='text-[#757575]'>Tickets Sold</span>
                <span className='text-4xl font-bold text-primary'>0/250</span>
                <div className='mt-1 flex gap-5 text-sm'>
                  <span className='text-[#757575]'>0 paid</span>
                  <span className='text-[#757575]'>0 free</span>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className='mt-3'>
              <EventsOrdersTable />
            </div>
          </div>
        </div>
      </EventLayout>
    </>
  )
}

export default Dashboard
