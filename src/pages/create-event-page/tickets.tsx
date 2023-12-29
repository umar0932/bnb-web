import TicketCard from '@/components/Cards/TicketCard'
import EventLayout from '@/components/Events/layouts/EventLayout'
import CreateTicketForm from '@/components/Forms/CreateTicketForm'
import { useState } from 'react'

const Tickets = () => {
  const [createTicket, setCreateTicket] = useState(false)

  const handleTicketToggle = () => {
    setCreateTicket(!createTicket)
  }

  return (
    <>
      <EventLayout>
        <div className='container w-full'>
          <div className='m-auto mt-10 flex w-[70%] flex-col gap-8 p-3 max-lg:w-[85%] max-sm:w-[100%]'>
            {createTicket ? (
              <CreateTicketForm handleToggle={handleTicketToggle} />
            ) : (
              <div>
                <div className='flex items-center justify-between'>
                  <span className='text-3xl font-bold'>Tickets</span>
                  <button
                    className='flex h-[43px] w-[120px] items-center justify-center rounded-sm bg-btnprimary p-3 text-white hover:bg-btnsecondary'
                    onClick={handleTicketToggle}
                  >
                    Add tickets
                  </button>
                </div>

                <div className='mt-10 flex flex-col gap-5'>
                  <TicketCard handleToggle={handleTicketToggle} />
                  <TicketCard handleToggle={handleTicketToggle} />
                  <TicketCard handleToggle={handleTicketToggle} />
                </div>
              </div>
            )}
          </div>
        </div>
      </EventLayout>
    </>
  )
}

export default Tickets
