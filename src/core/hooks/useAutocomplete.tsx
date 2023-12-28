import { useEffect, useRef, useState } from 'react'

interface LatLng {
  lat: number
  lng: number
}

interface Address {
  city: string
  state: string
  zip: string
  country: string
  plain: () => string
}

interface GeolocationPosition {
  coords: {
    latitude: number
    longitude: number
  }
}

interface AddressInfo {
  city: string
  state: string
  zip: string
  country: string
}

const apiKey = process.env.NEXT_PUBLIC_REACT_APP_MAP_KEY || ''
const mapApiJs = 'https://maps.googleapis.com/maps/api/js'
const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json'

function loadAsyncScript(src: string): Promise<HTMLScriptElement> {
  return new Promise(resolve => {
    const script = document.createElement('script')
    Object.assign(script, {
      type: 'text/javascript',
      async: true,
      src
    })
    script.addEventListener('load', () => resolve(script))
    document.head.appendChild(script)
  })
}

export function useAutocomplete(
  onAddressChange: (latLng: LatLng, addressInfo: AddressInfo) => void
) {
  const searchInputRef = useRef<HTMLInputElement | null>(null)
  const [address, setAddress] = useState<Address>({
    city: '',
    state: '',
    zip: '',
    country: '',
    plain: () => '' // Add the plain property here
  })

  const initMapScript = (): Promise<void | HTMLScriptElement> => {
    if (window.google) {
      return Promise.resolve()
    }
    const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`
    return loadAsyncScript(src)
  }

  const extractAddressInfo = (place: google.maps.places.PlaceResult): AddressInfo => {
    const addressInfo: AddressInfo = {
      city: '',
      state: '',
      zip: '',
      country: ''
    }

    if (!Array.isArray(place?.address_components)) {
      return addressInfo
    }

    place.address_components.forEach(component => {
      const types = component.types
      const value = component.long_name

      if (types.includes('locality')) {
        addressInfo.city = value
      }

      if (types.includes('administrative_area_level_1')) {
        addressInfo.state = value
      }

      if (types.includes('postal_code')) {
        addressInfo.zip = value
      }

      if (types.includes('country')) {
        addressInfo.country = value
      }
    })

    return addressInfo
  }

  const onChangeAddress = (autocomplete: google.maps.places.Autocomplete): void => {
    const place = autocomplete.getPlace()
    setAddress(extractAddressInfo(place))

    const location = place.geometry?.location
    if (location) {
      onAddressChange(
        {
          lat: location.lat(),
          lng: location.lng()
        },
        extractAddressInfo(place)
      )
    }
  }

  const initAutocomplete = (): void => {
    if (!searchInputRef.current) return

    const autocomplete = new window.google.maps.places.Autocomplete(searchInputRef.current)
    autocomplete.setFields(['address_component', 'geometry'])
    autocomplete.addListener('place_changed', () => onChangeAddress(autocomplete))
  }

  const reverseGeocode = ({ coords }: GeolocationPosition): void => {
    const url = `${geocodeJson}?key=${apiKey}&latlng=${coords.latitude},${coords.longitude}`
    if (searchInputRef.current) {
      searchInputRef.current.value = 'Getting your location...'
    }
    fetch(url)
      .then(response => response.json())
      .then(location => {
        const place = location.results[0]
        const _address = extractAddressInfo(place)
        setAddress(_address)
        if (searchInputRef.current) {
          searchInputRef.current.value = _address.country
        }
      })
  }

  const findMyLocation = (): void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          reverseGeocode(position)
        },
        error => {
          console.error('Error getting geolocation:', error)
        }
      )
    }
  }

  useEffect(() => {
    initMapScript().then(() => initAutocomplete())
  }, [])

  return {
    searchInputRef,
    address,
    findMyLocation
  }
}
