import GoogleMapReact from 'google-map-react'

interface GoogleMapProps {
  selectedLocation: LatLng | null
}
export default function GoogleMap({ selectedLocation }: GoogleMapProps) {
  const defaultProps = {
    center: {
      lat: 36.7783, // Latitude of California
      lng: -119.4179 // Longitude of California
    },
    zoom: 11
  }

  return (
    <>
      <div style={{ height: '796px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC_REACT_APP_MAP_KEY as any
          }}
          center={selectedLocation || defaultProps.center}
          zoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
    </>
  )
}
