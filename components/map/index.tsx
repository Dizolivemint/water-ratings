import { useState, useEffect, useRef, useCallback } from 'react';
import {
  GoogleMapProvider,
  useGoogleMap
} from '@ubilabs/google-maps-react-hooks';
import styles from './map.module.css';

const mapOptions = {
  zoom: 10,
  center: { lat: 40.7128, lng: -74.006 }
}

export default function Map() {
  const [mapContainer, setMapContainer] = useState<HTMLDivElement | null>(null);
  const mapRef = useRef(null);

  useEffect(() => {
    setMapContainer(mapRef.current);
  }, [mapRef]);

  return (
    <GoogleMapProvider 
      googleMapsAPIKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
      options={mapOptions}
      mapContainer={mapContainer}
    >
      <div ref={node => setMapContainer(node)} style={{height: '100vh'}}/>
      <Location />
    </GoogleMapProvider>
  );
}

function Location() {
  const [lat, setLat] = useState(43.6532);
  const [lng, setLng] = useState(-79.39);

  const { map } = useGoogleMap();
  
  const markerRef = useRef<google.maps.Marker>();

  useEffect(() => {
    if (!map || markerRef.current) {
      return;
    }
    markerRef.current = new google.maps.Marker({ map })
  }, [map]);

  useEffect(() => {
    if (!markerRef.current || !map) return;
    if (isNaN(lat) || isNaN(lng)) return;
    markerRef.current.setPosition({ lat, lng });
    map.panTo({ lat, lng });
  }
  , [map, lat, lng])

  return (
    <div className={styles.input}>
      <input 
        type="number" 
        value={lat} 
        onChange={e => setLat(parseFloat(e.target.value))} 
        step="0.01"
      />
      <input
        type="number"
        value={lng}
        onChange={e => setLng(parseFloat(e.target.value))}
        step="0.01"
      />
    </div>
  )
}