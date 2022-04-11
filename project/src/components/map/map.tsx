import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { useAppSelector } from '../../hooks';
import useMap from '../../hooks/useMap';
import { City } from '../../types/offer';
import { DEFAULT_MARKER_URL, CURRENT_MARKER_URL } from '../../const';
import { getOffersInCurrentCity } from '../../utils';

type MapProps = {
  className: string;
  city: City;
  selectedOfferId: number | null;
};

function createIcon(iconUrl: string) {
  const icon = new Icon({
    iconUrl: iconUrl,
    iconSize: [28, 40],
    iconAnchor: [14, 40],
  });
  return icon;
}

const defaultIcon = createIcon(DEFAULT_MARKER_URL);
const currentIcon = createIcon(CURRENT_MARKER_URL);

function Map({className, city, selectedOfferId}: MapProps): JSX.Element {
  const offers = useAppSelector(({DATA}) => DATA.offers);
  const offersInCurrentCity = getOffersInCurrentCity(offers, city.name);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView({
        lat: city.location.latitude,
        lng: city.location.longitude,
      });

      offersInCurrentCity.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOfferId !== null && offer.id === selectedOfferId
              ? currentIcon
              : defaultIcon,
          )
          .addTo(map);
      });
    }
  }, [map, city, offersInCurrentCity, selectedOfferId]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    />
  );
}

export default Map;
