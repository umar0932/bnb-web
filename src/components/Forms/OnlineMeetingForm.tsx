import { Input } from '@/core/ui/input'
import React from 'react'

export default function OnlineMeetingForm() {
  return (
    <>
      <div className='flex flex-col gap-3'>
        <div className='mt-5 flex max-w-[580px] rounded-lg bg-[#EFF8FF]'>
          <input
            className='w-[90%] border-none bg-transparent p-4 outline-none placeholder:text-[#757575] max-sm:w-[80%]'
            placeholder='Enter Meeting Link'
            type='text'
          />
        </div>
      </div>
    </>
  )
}
