import { useState } from 'react'
import { Pencil } from 'lucide-react'
import { useFormik } from 'formik'

const EventDetailsCard = () => {
  const [showEdit, setShowEdit] = useState(false)

  const editToggle = () => {
    setShowEdit(!showEdit)
  }

  const formik = useFormik({
    initialValues: {
      event_details: ''
    },
    onSubmit: values => {
      JSON.stringify(values, null, 2)
    }
  })
  return (
    <>
      <div className='rounded-xl border border-[#A0C5E5] p-5'>
        <div className='flex w-full items-center justify-between'>
          <span className='text-3xl font-bold'>About this event</span>
          <div className='cursor-pointer rounded-full bg-gray-200 p-2' onClick={editToggle}>
            <Pencil size={16} />
          </div>
        </div>

        {!showEdit && (
          <div className='mt-5 flex flex-col gap-3'>
            <span className='text-md '>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </span>
          </div>
        )}

        {/* Details of event */}

        {showEdit && (
          <div className='flex flex-col gap-3'>
            <form onSubmit={formik.handleSubmit} className='flex w-full flex-col '>
              <div className='mt-5 flex flex-col gap-2'>
                <span className='text-md'>
                  Add more details about your event and include what people can expect if they
                  attend.
                </span>
              </div>
              {/* Event Title */}
              <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                <textarea
                  className='h-[125px] bg-transparent outline-none placeholder:text-sm'
                  id='event_title'
                  name='event_title'
                  placeholder='Describe everything about event details here'
                  onChange={formik.handleChange}
                  value={formik.values.event_details}
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  )
}

export default EventDetailsCard
