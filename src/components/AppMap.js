import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext'

import { Map, Marker } from 'pigeon-maps'

export default function AppMap() {
  const { lat, lng } = useContext(UserContext)

  const [center, setCenter] = useState([lat, lng])
  const [zoom, setZoom] = useState(11)

  return (
    <Map height={300} center={center} zoom={zoom}
      onBoundsChanged={({ center, zoom }) => {
        setCenter([lat, lng])
        setZoom(zoom)
      }}>
      <Marker width={50} anchor={[lat, lng]} />
    </Map>
  )
}