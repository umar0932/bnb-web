import React from 'react'
import { Button } from '@/core/ui/button'
import GoogleMaps from '../GoogleMaps/GoogleMaps'

interface VenueDetailsFormProps {
  selectedLocation: LatLng | null
  city: string
  state: string
  zipCode: string
  country: string
  setCity: React.Dispatch<React.SetStateAction<string>>
  setState: React.Dispatch<React.SetStateAction<string>>
  setZipCode: React.Dispatch<React.SetStateAction<string>>
  setCountry: React.Dispatch<React.SetStateAction<string>>
  handleSaveLocationClick: () => void
}

const VenueDetailsForm: React.FC<VenueDetailsFormProps> = ({
  selectedLocation,
  city,
  state,
  zipCode,
  country,
  setCity,
  setState,
  setZipCode,
  setCountry,
  handleSaveLocationClick
}) => {
  return (
    <div className='flex w-full flex-col gap-3'>
      <GoogleMaps selectedLocation={selectedLocation} />
      <div className='mt-2 flex flex-col gap-5 max-sm:items-center max-sm:justify-center'>
        <span className='text-4xl font-bold text-primary max-sm:text-3xl'>Street Address</span>
        <div className='flex w-[100%] flex-col gap-2 '>
          <span className='text-md ml-1  text-primary max-sm:text-sm'>
            Address 1 <span className='text-[red]'>*</span>
          </span>
          <input
            className='w-[100%] rounded-xl border-none bg-[#EFF8FF] p-4 outline-none placeholder:text-[#757575] '
            placeholder='Address 1'
            type='text'
          />
        </div>

        <div className='flex w-[100%] items-center justify-center gap-5 max-sm:flex-col'>
          <div className='flex w-[100%] flex-col  gap-2 '>
            <span className='text-md ml-1  text-primary max-sm:text-sm'>
              City<span className='text-[red]'>*</span>
            </span>
            <input
              value={city}
              onChange={e => setCity(e.target.value)}
              className='w-[100%] rounded-xl border-none bg-[#EFF8FF] p-4 outline-none placeholder:text-[#757575] '
              placeholder='City'
              type='text'
            />
          </div>
          <div className='flex w-[100%] flex-col  gap-2 '>
            <span className='text-md ml-1  text-primary max-sm:text-sm'>
              State <span className='text-[red]'>*</span>
            </span>
            <input
              value={state}
              onChange={e => setState(e.target.value)}
              className='w-[100%] rounded-xl border-none bg-[#EFF8FF] p-4 outline-none placeholder:text-[#757575] '
              placeholder='State'
              type='text'
            />
          </div>
          <div className='flex w-[100%] flex-col gap-2'>
            <span className='text-md ml-1  text-primary max-sm:text-sm'>Zip Code </span>
            <input
              value={zipCode}
              onChange={e => setZipCode(e.target.value)}
              className='w-[100%] rounded-xl border-none bg-[#EFF8FF] p-4 outline-none placeholder:text-[#757575]'
              placeholder='Zip Code'
              type='text'
            />
          </div>
        </div>
        <div className='mt-2 items-center justify-center max-md:w-[100%] max-sm:flex'>
          <div className='flex flex-col gap-2 max-md:w-[100%]'>
            <span className='text-md ml-1  text-primary max-sm:text-sm'>
              Country <span className='text-[red]'>*</span>
            </span>
            <input
              value={country}
              onChange={e => setCountry(e.target.value)}
              className='w-[32%] rounded-xl border-none bg-[#EFF8FF] p-4 outline-none placeholder:text-[#757575] max-md:w-[100%]'
              placeholder='Country'
              type='text'
            />
          </div>
        </div>
      </div>
      <Button
        className=' mt-3 flex h-[43px] w-[170px] items-center justify-center rounded-sm bg-[#DEF0FF] p-4 font-bold text-primary hover:bg-[#DEF0FF] max-sm:w-[160px]'
        onClick={handleSaveLocationClick}
      >
        Save Location
      </Button>
    </div>
  )
}

export default VenueDetailsForm
