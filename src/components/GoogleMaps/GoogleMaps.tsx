import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '400px',
  marginTop: '50px'
}

const center = {
  lat: -3.745,
  lng: -38.523
}

interface LatLng {
  lat: number
  lng: number
}

interface GoogleMapProps {
  selectedLocation: LatLng | null
}

function GoogleMaps({ selectedLocation }: GoogleMapProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_REACT_APP_MAP_KEY as any
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback() {
    setMap(null)
  }, [])
  console.log('Selected Location', selectedLocation)

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={selectedLocation || center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {selectedLocation && (
        <Marker
          position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
          // You can customize the marker further if needed
          //   label='A'
          title='Selected Location'
        />
      )}
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(GoogleMaps)
