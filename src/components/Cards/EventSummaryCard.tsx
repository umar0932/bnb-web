import { useState } from 'react'
import { Pencil } from 'lucide-react'
import { useFormik } from 'formik'

const EventSummaryCard = () => {
  const [charCount, setCharCount] = useState(0)
  const maxCharLimit = 150
  const [showEdit, setShowEdit] = useState(false)

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value
    if (inputValue.length <= maxCharLimit) {
      formik.handleChange(e) // Handle formik changes
      setCharCount(inputValue.length) // Update charCount
    }
  }

  const editToggle = () => {
    setShowEdit(!showEdit)
  }

  const formik = useFormik({
    initialValues: {
      event_title: '',
      event_summary: ''
    },
    onSubmit: values => {
      JSON.stringify(values, null, 2)
    }
  })
  return (
    <>
      <div className='rounded-xl border border-[#A0C5E5] p-5'>
        <div className='flex w-full items-center justify-between'>
          <span className='text-3xl font-bold'>Event Overview</span>
          <div className='cursor-pointer rounded-full bg-gray-200 p-2' onClick={editToggle}>
            <Pencil size={16} />
          </div>
        </div>

        {!showEdit && (
          <div className='mt-5 flex flex-col gap-3'>
            <span className='text-lg font-bold'>Musical Concert</span>
            <span className='text-md '>
              Musical Concert at main hall, BrookField Road alongside with AutoShow Arena London
              most beautiful place
            </span>
          </div>
        )}

        {/* Details of event */}

        {showEdit && (
          <div className='flex flex-col gap-3'>
            <form onSubmit={formik.handleSubmit} className='flex w-full flex-col '>
              <div className='mt-5 flex flex-col gap-2'>
                <span className='text-2xl font-bold text-primary'>Event title</span>
                <span className='text-md'>
                  Be clear and descriptive with a title that tells people what your event is about.
                </span>
              </div>
              {/* Event Title */}
              <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                <span>
                  Event Title<span className='text-btnsecondary'>*</span>
                </span>
                <input
                  className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                  id='event_title'
                  name='event_title'
                  type='text'
                  placeholder='Specify your event name'
                  onChange={formik.handleChange}
                  value={formik.values.event_title}
                />
              </div>
              <div className='mt-5 flex flex-col gap-2'>
                <span className='text-2xl font-bold text-primary'>Summary</span>
                <span className='text-md'>
                  Grab people's attention with a short description about your event. Attendees will
                  see this at the top of your event page. (140 characters max)
                </span>
              </div>

              {/* Event Summary */}
              <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                <span>
                  Event Summary<span className='text-btnsecondary'>*</span>
                </span>
                <input
                  className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                  id='event_summary'
                  name='event_summary'
                  type='text'
                  placeholder='Write attention grabbing description'
                  onChange={handleInputChange} // Use custom function to handle input change
                  value={formik.values.event_summary}
                  maxLength={maxCharLimit} // Set the maximum character limit
                />
              </div>
              <div className='mt-2 flex justify-end text-sm text-btnsecondary'>
                {charCount}/{maxCharLimit}
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  )
}

export default EventSummaryCard
