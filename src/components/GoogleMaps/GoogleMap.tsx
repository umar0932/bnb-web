import GoogleMapReact from 'google-map-react'
export default function GoogleMap() {
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
          center={defaultProps.center}
          zoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
    </>
  )
}
