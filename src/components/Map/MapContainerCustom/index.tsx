import React from 'react';
import { useMap } from 'react-leaflet';
import { IPropsMapCustom } from '../../../types/searchLocaleTypes';

const MapContainerCustom: React.FC<IPropsMapCustom> = ({center, zoom}) => {
  const mapCustom = useMap()
  mapCustom.setView(center, zoom)
  return null
}

export default MapContainerCustom;