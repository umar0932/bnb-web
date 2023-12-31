import { useState } from 'react'
import Image from 'next/image'
import { useFormik } from 'formik'
import CreatableSelect from 'react-select/creatable'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../../core/ui/select'

import BasicInfoIcon from '../../../public/assets/basic_info_icon.svg'
import { Input } from '@/core/ui/input'

const options = [
  { value: 'event', label: 'event' },
  { value: 'concert', label: 'concert' },
  { value: 'confrences', label: 'confrences' },
  { value: 'seminars', label: 'seminars' },
  { value: 'networking sessions', label: 'networking sessions' },
  { value: 'charity events', label: 'charity events' },
  { value: 'corporate events', label: 'corporate events' },
  { value: 'educational event', label: 'educational event' },
  { value: 'technical event', label: 'technical event' },
  { value: 'ted talk', label: 'ted talk' },
  { value: 'exhibition', label: 'exhibition' },
  { value: 'Talk Show', label: 'Talk Show' },
  { value: 'Workshops', label: 'Workshops' }
]

const BasicInfoForm = () => {
  const [value, setValue] = useState<any[]>([])
  const [charCount, setCharCount] = useState(0)

  const maxCharLimit = 75
  const [tagCount, setTagCount] = useState(0)

  const maxTagLimit = 10
  // Handle the tag selection
  const handleTagChange = (newValue: any) => {
    if (newValue.length <= maxTagLimit) {
      setValue(newValue)
      setTagCount(newValue.length)
    }
  }

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value
    if (inputValue.length <= maxCharLimit) {
      formik.handleChange(e) // Handle formik changes
      setCharCount(inputValue.length) // Update charCount
    }
  }

  const formik = useFormik({
    initialValues: {
      event_title: '',
      organizer_name: '',
      tags: '',
      tagval: ''
    },
    onSubmit: values => {
      JSON.stringify(values, null, 2)
    }
  })
  return (
    <>
      <div className='flex flex-col rounded-lg bg-white p-10 max-sm:p-3'>
        <div className='flex gap-2'>
          <Image
            src={BasicInfoIcon}
            alt='basic_info_icon'
            className='mr-5 h-[35px] w-[25px] max-sm:mr-0 max-sm:h-[30px] max-sm:w-[25px]'
          />
          <div className='flex w-full flex-col'>
            <span className='text-4xl font-bold text-primary max-sm:text-3xl'>Basic Info</span>
            <span className='text-md text-[#757575] max-sm:text-sm'>
              Name your event and tell event-goers why they should come. Add details that highlight
              what makes it unique.
            </span>

            {/* Form */}
            <form onSubmit={formik.handleSubmit} className='flex w-full flex-col '>
              {/* Event Title */}
              <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                <span>
                  Event Title<span className='text-btnsecondary'>*</span>
                </span>
                <Input
                  className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                  id='event_title'
                  name='event_title'
                  type='text'
                  placeholder='Be clear and descriptive'
                  onChange={handleInputChange} // Use custom function to handle input change
                  value={formik.values.event_title}
                  maxLength={maxCharLimit} // Set the maximum character limit
                />
              </div>
              <div className='mt-2 flex justify-end text-sm text-btnsecondary'>
                {charCount}/{maxCharLimit}
              </div>

              {/* Organizer Name */}

              <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                <span>Organizer</span>
                <Input
                  className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                  id='organizer_name'
                  name='organizer_name'
                  type='text'
                  placeholder='Tell Attendees who is organizing this event'
                  onChange={formik.handleChange}
                  value={formik.values.organizer_name}
                />
              </div>
              <span className='text-md mt-1 text-[#757575] max-sm:text-sm'>
                This profile describes a unique organizer and shows all of the events on one page.{' '}
                <span className=' cursor-pointer text-[#1556AD] underline'>
                  View Organizer Info
                </span>
              </span>

              <div className='mt-5 flex gap-20  max-md:flex-col max-md:gap-5'>
                <div className='w-full '>
                  <Select>
                    <SelectTrigger className='w-full border-none bg-[#EFF8FF] text-[#757575]'>
                      <SelectValue placeholder='Type' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value='party'>Party</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className='w-full'>
                  <Select>
                    <SelectTrigger className='w-full border-none bg-[#EFF8FF] text-[#757575]'>
                      <SelectValue placeholder='Category' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value='party'>Party</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className='mt-5 flex flex-col gap-2'>
                <span className='text-xl font-bold text-primary'>Tags</span>
                <span className='text-md text-[#757575] max-sm:text-sm'>
                  Improve discoverability of your event by adding tags relevant to the subject
                  matter.
                </span>
                <div className=' flex  flex-col flex-wrap rounded-lg bg-[#EFF8FF] p-3 '>
                  <span>Add Tags</span>

                  <CreatableSelect
                    onChange={handleTagChange}
                    isMulti
                    isOptionDisabled={() => value.length >= 10}
                    options={options}
                    placeholder='Add search key'
                    styles={{
                      control: baseStyles => ({
                        ...baseStyles,
                        backgroundColor: 'transparent',
                        border: 'none'
                      })
                    }}
                  />
                </div>
                <div className='flex justify-between'>
                  <span className='text-btnsecondary'>{tagCount}/10 Tags</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default BasicInfoForm
