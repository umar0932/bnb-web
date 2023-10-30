import Image from 'next/image'
import { useState } from 'react'

import useAutocomplete from '../../core/hooks/useAutocomplete'

import LocationIcon from '../../../public/assets/location_form_icon.svg'
import SearchIcon from '../../../public/assets/search_icon.svg'

const LocationForm = () => {
  const { searchInputRef } = useAutocomplete()
  const [activeButton, setActiveButton] = useState('Venue')

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
            src={LocationIcon}
            alt='basic_info_icon'
            className='mr-5 h-[35px] w-[25px] max-sm:mr-0 max-sm:h-[30px] max-sm:w-[25px]'
          />
          <div className='flex w-full flex-col'>
            <span className='text-4xl font-bold text-primary max-sm:text-3xl'>Location</span>
            <span className='text-md text-[#757575] max-sm:text-sm'>
              Help people in the area discover your event and let attendees know where to show up.
            </span>

            {/* Form */}
            <div className='mt-5 flex gap-5 max-md:flex-wrap max-md:items-center max-md:justify-center'>
              <button
                className='h-[55px] w-[180px] rounded-lg bg-[#EFF8FF]'
                style={buttonStyles('Venue')}
                onClick={() => handleButtonClick('Venue')}
              >
                Venue
              </button>
              <button
                className='h-[55px] w-[180px] rounded-lg bg-[#EFF8FF]'
                style={buttonStyles('Online')}
                onClick={() => handleButtonClick('Online')}
              >
                Online
              </button>
              <button
                className='h-[55px] w-[180px] rounded-lg bg-[#EFF8FF]'
                style={buttonStyles('ToBeAnnounced')}
                onClick={() => handleButtonClick('ToBeAnnounced')}
              >
                To be announced
              </button>
            </div>
            <div className='mt-5 flex max-w-[580px] rounded-lg bg-[#EFF8FF]'>
              <input
                className='w-[90%] border-none bg-transparent p-4 outline-none placeholder:text-[#757575] max-sm:w-[80%]'
                placeholder='Search for venue'
                type='text'
                ref={searchInputRef}
              />
              <div className='flex w-[10%] flex-shrink-0 cursor-pointer items-center justify-center rounded-lg bg-[#DEF0FF] p-3 max-sm:w-[20%]'>
                <Image
                  src={SearchIcon}
                  alt='search_icon'
                  style={{ width: '25px', height: '25px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LocationForm
