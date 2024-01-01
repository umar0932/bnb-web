import Image from 'next/image'
import { useState, useEffect } from 'react'
import GoogleMaps from '../GoogleMaps/GoogleMaps'

import { useAutocomplete } from '../../core/hooks/useAutocomplete'

import LocationIcon from '../../../public/assets/location_form_icon.svg'
import SearchIcon from '../../../public/assets/search_icon.svg'
import { Button } from '@/core/ui/button'
import SavedLocationCard from '../Cards/SavedLocationCard'
import OnlineMeetingForm from './OnlineMeetingForm'
import VenueDetailsForm from './VenueDetailsForm'

interface LatLng {
  lat: number
  lng: number
}

interface AddressInfo {
  city: string
  state: string
  zip: string
  country: string
}

export default function LocationForm() {
  const [activeButton, setActiveButton] = useState('Venue')
  const [selectedLocation, setSelectedLocation] = useState<LatLng | null>(null)
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [country, setCountry] = useState('')
  const [isLocationSelected, setIsLocationSelected] = useState(false)
  const [showLocationCard, setShowLocationCard] = useState(false)

  const handleAddressChange = (latLng: LatLng, addressInfo: AddressInfo) => {
    setSelectedLocation(latLng)
    setCity(addressInfo.city)
    setState(addressInfo.state)
    setZipCode(addressInfo.zip)
    setCountry(addressInfo.country)

    setIsLocationSelected(true)
  }

  const { searchInputRef } = useAutocomplete(handleAddressChange)

  const handleButtonClick = (buttonName: any) => {
    setActiveButton(buttonName === activeButton ? null : buttonName)
  }

  const handleSearchButtonClick = () => {
    // Trigger the search manually when the button is clicked

    setIsLocationSelected(true)
  }

  const handleSaveLocationClick = (latLng: LatLng) => {
    setSelectedLocation(latLng)
    setIsLocationSelected(false)
    setShowLocationCard(true)
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

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Trigger the search when Enter is pressed
    if (event.key === 'Enter') {
      handleSearchButtonClick()
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
            </div>
            {activeButton === 'Online' ? (
              <OnlineMeetingForm />
            ) : (
              <div className='mt-5 flex max-w-[580px] rounded-lg bg-[#EFF8FF]'>
                <input
                  className='w-[90%] border-none bg-transparent p-4 outline-none placeholder:text-[#757575] max-sm:w-[80%]'
                  placeholder='Search for venue'
                  type='text'
                  ref={searchInputRef}
                  onKeyPress={handleKeyPress}
                />
                <div
                  className='flex w-[10%] flex-shrink-0 cursor-pointer items-center justify-center rounded-lg bg-[#DEF0FF] p-3 max-sm:w-[20%]'
                  onClick={handleSearchButtonClick}
                >
                  <Image
                    src={SearchIcon}
                    alt='search_icon'
                    style={{ width: '25px', height: '25px' }}
                  />
                </div>
              </div>
            )}

            {activeButton === 'Venue' && isLocationSelected && (
              <VenueDetailsForm
                selectedLocation={selectedLocation}
                city={city}
                state={state}
                zipCode={zipCode}
                country={country}
                setCity={setCity}
                setState={setState}
                setZipCode={setZipCode}
                setCountry={setCountry}
                handleSaveLocationClick={handleSaveLocationClick}
              />
            )}

            {activeButton === 'Venue' && showLocationCard && (
              <div className='mt-5'>
                <SavedLocationCard
                  location={selectedLocation!}
                  address={{ city, state, zip: zipCode, country }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
