import { Checkbox } from '@/core/ui/checkbox'
import { useFormik } from 'formik'
import { useState } from 'react'

const CreateTicketForm = ({ handleToggle }: any) => {
  const [charCount, setCharCount] = useState(0)
  const maxCharLimit = 50
  const maxDescLimit = 500

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value
    if (inputValue.length <= maxCharLimit) {
      formik.handleChange(e) // Handle formik changes
      setCharCount(inputValue.length) // Update charCount
    }
  }

  const handleInputDescChange = (e: any) => {
    const inputValue = e.target.value
    if (inputValue.length <= maxDescLimit) {
      formik.handleChange(e) // Handle formik changes
      setCharCount(inputValue.length) // Update charCount
    }
  }

  const formik = useFormik({
    initialValues: {
      ticket_name: '',
      ticket_quantity: '',
      ticket_price: '',
      ticket_description: '',
      min_quantity: '',
      max_quantity: '',
      sales_start_date: '',
      sales_start_time: '',
      sales_end_date: '',
      sales_end_time: ''
    },
    onSubmit: values => {
      JSON.stringify(values, null, 2)
      console.log(values)
    }
  })
  return (
    <>
      <div className='flex flex-col gap-3'>
        <span className='text-3xl font-bold text-primary'>Create tickets</span>
        <form onSubmit={formik.handleSubmit} className='flex w-full flex-col '>
          {/*Ticket Name */}
          <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
            <span>
              Ticket Name<span className='text-btnsecondary'>*</span>
            </span>
            <input
              className='h-[25px] bg-transparent outline-none placeholder:text-sm'
              id='ticket_name'
              name='ticket_name'
              type='text'
              placeholder='Be clear and descriptive'
              onChange={handleInputChange} // Use custom function to handle input change
              value={formik.values.ticket_name}
              maxLength={maxCharLimit} // Set the maximum character limit
            />
          </div>
          <div className='mt-2 flex justify-end text-sm text-btnsecondary'>
            {charCount}/{maxCharLimit}
          </div>

          {/* Available Quantity */}
          <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
            <span>
              Available Quantity<span className='text-btnsecondary'>*</span>
            </span>
            <input
              className='h-[25px] bg-transparent outline-none placeholder:text-sm'
              id='ticket_quantity'
              name='ticket_quantity'
              type='text'
              placeholder='Number of tickets'
              value={formik.values.ticket_quantity}
              onChange={formik.handleChange}
            />
          </div>
          {/* Ticket Price */}

          <div className=' mt-7  flex flex-col rounded-lg bg-[#EFF8FF] p-3'>
            <span>
              Price<span className='text-btnsecondary'>*</span>
            </span>
            <input
              className='h-[25px] bg-transparent outline-none placeholder:text-sm'
              id='ticket_price'
              name='ticket_price'
              type='text'
              placeholder='Enter price for each ticket'
              value={formik.values.ticket_price}
              onChange={formik.handleChange}
            />
          </div>

          {/* Sales Start Time */}
          <div className='mt-5 flex flex-col gap-2'>
            <div className='mt-5 flex flex-wrap gap-10'>
              <div className='flex flex-col gap-2'>
                <span className='pl-3 text-[#313131]'>
                  Sales start <span className='text-btnsecondary'>*</span>
                </span>
                <input
                  type='date'
                  className='w-[250px] rounded-lg border border-solid border-[#9DCAEF] p-2 text-[#757575]  max-sm:w-[220px]'
                  id='sales_start_date'
                  name='sales_start_date'
                  value={formik.values.sales_start_date}
                  onChange={formik.handleChange}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <span className='pl-3 text-[#313131]'>Start time</span>
                <input
                  type='time'
                  className='w-[250px] rounded-lg border border-solid border-[#9DCAEF] p-2 text-[#757575]  max-sm:w-[220px]'
                  id='sales_start_time'
                  name='sales_start_time'
                  value={formik.values.sales_start_time}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
          </div>

          {/* Sales End Time */}
          <div className='mt-5 flex flex-col gap-2'>
            <div className=' flex flex-wrap gap-10'>
              <div className='flex flex-col gap-2'>
                <span className='pl-3 text-[#313131]'>
                  Sales end <span className='text-btnsecondary'>*</span>
                </span>
                <input
                  type='date'
                  className='w-[250px] rounded-lg border border-solid border-[#9DCAEF] p-2 text-[#757575]  max-sm:w-[220px]'
                  id='sales_end_date'
                  name='sales_end_date'
                  value={formik.values.sales_end_date}
                  onChange={formik.handleChange}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <span className='pl-3 text-[#313131]'>End time</span>
                <input
                  type='time'
                  className='w-[250px] rounded-lg border border-solid border-[#9DCAEF] p-2 text-[#757575]  max-sm:w-[220px]'
                  id='sales_end_time'
                  name='sales_end_time'
                  value={formik.values.sales_end_time}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
          </div>

          {/* Advanced Settings */}
          <div className='mt-10 flex flex-col gap-3'>
            <span className='text-3xl font-bold text-primary'>Advanced Settings</span>
            <div className='flex items-center space-x-2'>
              <Checkbox className='text-btnseondary' defaultChecked={true} />
              <span>Show ticket sale end dates and sale status at checkout</span>
            </div>
            <div className=' mt-3  flex flex-col rounded-lg border border-[#9DCAEF] bg-white p-3'>
              <span>
                Description<span className='text-btnsecondary'>*</span>
              </span>
              <textarea
                className='h-[180px] bg-transparent outline-none placeholder:text-sm'
                id='ticket_description'
                name='ticket_description'
                placeholder='Enter detailed description of this ticket'
                value={formik.values.ticket_description}
                onChange={handleInputDescChange}
                maxLength={maxDescLimit}
              />
            </div>
            <div className='mt-2 flex justify-end text-sm text-btnsecondary'>
              {charCount}/{maxDescLimit}
            </div>

            {/* Tickets per order */}

            <span className='mt-3 text-2xl text-primary'>Tickets per order</span>
            <div className='flex gap-7 max-lg:flex-col max-lg:gap-3'>
              <div className=' mt-3  flex flex-col rounded-lg border border-[#9DCAEF] bg-white p-3'>
                <span>
                  Minimum quantity<span className='text-btnsecondary'>*</span>
                </span>
                <input
                  className='h-[25px] w-[260px] bg-transparent outline-none placeholder:text-sm'
                  id='min_quantity'
                  name='min_quantity'
                  value={formik.values.min_quantity}
                  onChange={formik.handleChange}
                />
              </div>
              <div className=' mt-3  flex flex-col rounded-lg border border-[#9DCAEF] bg-white p-3'>
                <span>
                  Maximum quantity<span className='text-btnsecondary'>*</span>
                </span>
                <input
                  className='h-[25px] w-[260px] bg-transparent outline-none placeholder:text-sm'
                  id='max_quantity'
                  name='max_quantity'
                  value={formik.values.max_quantity}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            <div className=' mt-7  flex flex-col rounded-lg border border-[#9DCAEF] bg-white p-3'>
              <span>Sales Channel</span>
              <input
                className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                id='ticket_price'
                name='ticket_price'
                type='text'
                readOnly
                defaultValue='Online Only'
              />
            </div>
            <div className='mt-3 flex items-center space-x-2'>
              <Checkbox className='text-btnseondary' defaultChecked={true} />
              <span>e-ticket</span>
            </div>
          </div>
        </form>

        <div className='mt-5 flex w-full justify-end gap-5 p-3'>
          <button className='flex h-[43px] w-[120px] items-center justify-center rounded-sm bg-[#DEF0FF] p-3 font-bold text-primary'>
            Discard
          </button>

          <button
            onClick={handleToggle}
            type='submit'
            className='flex h-[43px] w-[120px] items-center justify-center rounded-sm bg-btnprimary p-3 font-bold text-white hover:bg-btnsecondary'
          >
            Save
          </button>
        </div>
      </div>
    </>
  )
}

export default CreateTicketForm
