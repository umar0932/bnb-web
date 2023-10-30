import React from 'react'
import StaticImage from 'next/image'
import Link from 'next/link'

import useAutocomplete from '../../core/hooks/useAutocomplete'

import CurrentLocation from '../../../public/assets/current_location.svg'
import BrowserLocations from '../../../public/assets/browse_online.svg'

const Autocomplete = () => {
  const { searchInputRef, findMyLocation } = useAutocomplete()
  return (
    <div className='App'>
      <div>
        <div className='search'>
          {/*  */}
          <div className='flex flex-col'>
            <div className='mt-3 flex   p-2'>
              {/* <Autocomplete /> */}
              <input
                className='w-full border-b border-[#757575]  p-2 text-3xl font-bold text-primary outline-none placeholder:text-primary'
                placeholder='California'
                ref={searchInputRef}
                type='text'
              />
            </div>
            <div className='mt-2 flex flex-col bg-[#F6FBFF] p-5'>
              <div className=' flex gap-5 border-b border-[#9CB2DF] p-2'>
                <StaticImage
                  src={CurrentLocation}
                  alt='current-location'
                  onClick={findMyLocation}
                  className='cursor-pointer'
                />
                <span className='cursor-pointer text-[#3B5998]' onClick={findMyLocation}>
                  Use my current location
                </span>
              </div>
              <Link href='/browse-events'>
                <div className='flex gap-5 p-2'>
                  <StaticImage src={BrowserLocations} alt='browse-location' />
                  <span className='text-[#3B5998]'>Browse online events</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Autocomplete
