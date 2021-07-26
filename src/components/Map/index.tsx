import React from 'react';
import Leaflet from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ISearchLocale } from '../../types/searchLocaleTypes';
import MapContainerCustom from './MapContainerCustom';
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

const Map: React.FC = () => {

  const locale = useSelector<RootState, ISearchLocale>((state) => state.reducerLocale)
  const position ={lat: locale.location.lat, lng: locale.location.lng}

  const iconCustom = Leaflet.icon({
    iconUrl: './images/icon-location.svg',
    iconSize: [36, 47]
  })

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ width: '100%', height: '100%'}}
      zoomControl={false}
    >
      <MapContainerCustom
        center={position}
        zoom={13}
      />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
       position={position}
       icon={iconCustom}
      >
        
        {
          locale.ip !== '' && (
            <Popup>
              {
                `${locale.location.city}, ${locale.location.country} - ${locale.location.city}, ${locale.location.postalCode}`
              }
            </Popup>
          )
        }
      </Marker>

    </MapContainer>
  )
}

export default Map;