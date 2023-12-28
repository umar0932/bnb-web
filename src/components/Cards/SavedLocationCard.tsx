import React from 'react'
import GoogleMaps from '../GoogleMaps/GoogleMaps'

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

interface SavedLocationCardProps {
  location: LatLng
  address: AddressInfo
}

const SavedLocationCard: React.FC<SavedLocationCardProps> = ({ location, address }) => {
  return (
    <div className='card-drop-shadow w-full'>
      <div className='flex flex-col gap-3 border-b p-3'>
        <GoogleMaps selectedLocation={location} />

        <div className='mt-2 flex flex-col gap-2'>
          <span className='text-lg'>
            {address.city}, {address.state}, {address.zip}, {address.country}
          </span>
        </div>
      </div>
    </div>
  )
}

export default SavedLocationCard
