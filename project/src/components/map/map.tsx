import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap';
import { City, Offer } from '../../types/offer';
import { DEFAULT_MARKER_URL } from '../../const';

type MapProps = {
  className: string;
  city: City;
  offers: Offer[];
};

function createIcon(iconUrl: string) {
  const icon = new Icon({
    iconUrl: iconUrl,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  return icon;
}

function Map({className, city, offers}: MapProps):JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(createIcon(DEFAULT_MARKER_URL))
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    />
  );
}

export default Map;
