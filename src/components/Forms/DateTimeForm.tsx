import { useState } from 'react'
import Image from 'next/image'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../../core/ui/select'
import { Checkbox } from '@/core/ui/checkbox'

import CalendarIcon from '../../../public/assets/calendar_icon.svg'
import { Button } from '@/core/ui/button'
import { Input } from '@/core/ui/input'

const DateTimeForm = () => {
  const [activeButton, setActiveButton] = useState('SingleEvent')

  const handleButtonClick = (buttonName: any) => {
    setActiveButton(buttonName === activeButton ? null : buttonName)
  }

  const buttonStyles = (buttonName: any) => {
    return {
      height: '55px',
      width: '180px',
      borderRadius: '8px',
      backgroundColor: '#EFF8FF',
      border: activeButton === buttonName ? '1px solid #00437A' : '1px solid transparent'
    }
  }
  return (
    <>
      <div className='mt-10 flex flex-col rounded-lg bg-white p-10 max-sm:p-3'>
        <div className='flex gap-2'>
          <Image
            src={CalendarIcon}
            alt='basic_info_icon'
            className='mr-5 h-[35px] w-[25px] max-sm:mr-0 max-sm:h-[30px] max-sm:w-[25px]'
          />
          <div className='flex w-full flex-col'>
            <span className='text-4xl font-bold text-primary max-sm:text-3xl'>Time & Date</span>
            <span className='text-md text-[#757575] max-sm:text-sm'>
              Tell event-goers when your event starts and ends so they can make plans to attend.
            </span>

            <div className='mt-5 flex gap-5 max-md:flex-wrap max-md:items-center max-md:justify-center'>
              <Button
                className='h-[55px] w-[180px] rounded-lg bg-[#EFF8FF]'
                style={buttonStyles('SingleEvent')}
                onClick={() => handleButtonClick('SingleEvent')}
              >
                Single Event
              </Button>
              <Button
                className='h-[55px] w-[180px] rounded-lg bg-[#EFF8FF]'
                style={buttonStyles('RecurringEvent')}
                onClick={() => handleButtonClick('RecurringEvent')}
              >
                Recurring Event
              </Button>
            </div>

            <div className='mt-5 flex flex-col gap-2'>
              <span className='font-bold text-[#313131]'>From:</span>
              <div className='flex flex-wrap gap-10'>
                <div className='flex flex-col gap-2'>
                  <span className='pl-3 text-[#313131]'>Day</span>
                  <Input
                    type='date'
                    className='w-[250px] rounded-lg border border-solid border-[#9DCAEF] p-2 text-[#757575]  max-sm:w-[220px]'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='pl-3 text-[#313131]'>Time</span>
                  <Input
                    type='time'
                    className='w-[250px] rounded-lg border border-solid border-[#9DCAEF] p-2 text-[#757575]  max-sm:w-[220px]'
                  />
                </div>
              </div>
            </div>
            <div className='mt-5 flex flex-col gap-2'>
              <span className='font-bold text-[#313131]'>To:</span>
              <div className='flex flex-wrap gap-10'>
                <div className='flex flex-col gap-2'>
                  <span className='pl-3 text-[#313131]'>Day</span>
                  <Input
                    type='date'
                    className='w-[250px] rounded-lg border border-solid border-[#9DCAEF] p-2 text-[#757575] max-sm:w-[220px]'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='pl-3 text-[#313131]'>Time</span>
                  <Input
                    type='time'
                    className='w-[250px] rounded-lg border border-solid border-[#9DCAEF] p-2 text-[#757575]  max-sm:w-[220px]'
                  />
                </div>
              </div>
            </div>
            <div className='mt-3 flex flex-col gap-2'>
              <div className='flex items-center space-x-2'>
                <Checkbox className='text-btnseondary' defaultChecked={true} />
                <span>Display start time.</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Checkbox defaultChecked={true} />
                <span>Display end time.</span>
              </div>
            </div>
            <div className='mt-10 flex flex-wrap gap-10'>
              <div className='flex flex-col gap-2'>
                <span className=' font-bold'>Time Zone</span>
                <Select>
                  <SelectTrigger className='w-[250px] border-none bg-[#EFF8FF] text-[#757575] max-sm:w-[220px]'>
                    <SelectValue placeholder='(GMT-4)United State' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='(GMT-5) UK'>(GMT-5) UK</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className='flex flex-col gap-2'>
                <span className=' font-bold'>Event Language</span>
                <Select>
                  <SelectTrigger className='w-[250px] border-none bg-[#EFF8FF] text-[#757575] max-sm:w-[220px]'>
                    <SelectValue placeholder='United State' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='United State'>United State</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DateTimeForm
