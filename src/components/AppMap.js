import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext'

import { Map, Marker } from 'pigeon-maps'

export default function AppMap() {
  const [center, setCenter] = useState([50.879, 4.6997])
  const [zoom, setZoom] = useState(11)

  const { lat, lng } = useContext(UserContext)

  console.log('::center', center)
  console.log('::lat, lng', lat, lng)

  return (
    <Map height={300} width={50} center={center} zoom={zoom}
      onBoundsChanged={({ center, zoom }) => {
        setCenter(center)
        setZoom(zoom)
      }}>
      <Marker width={50} anchor={[lat, lng]} />
    </Map>
  )
}