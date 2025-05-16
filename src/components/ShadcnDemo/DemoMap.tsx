import type {LatLngExpression} from 'leaflet'
import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

const LOS_GATOS_COORDINATES: LatLngExpression = [37.236044, -121.961768]

export const DemoMap = () => {
  return (
    <div style={{height: '100%', width: '100%'}}>
      <MapContainer
        center={LOS_GATOS_COORDINATES}
        zoom={13}
        scrollWheelZoom={false}
        style={{height: '80vh', width: '100%'}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={LOS_GATOS_COORDINATES}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
