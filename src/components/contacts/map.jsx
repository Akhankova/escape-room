import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import * as S from './contacts.styled';
import useMap from './useMap';
import {URL_MARKER_DEFAULT, IconSize, IconAnchor} from '../../const';

export function Map({city, points}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [IconSize.first, IconSize.second],
    iconAnchor: [IconAnchor.first, IconAnchor.second],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [defaultCustomIcon, map, points]);

  return (
    <S.Map ref={mapRef}>
    </S.Map>
  );
}

export default Map;
