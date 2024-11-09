import { useState } from 'react';

import { mapKey } from '@/secret/mapKey';

const GOOGLE_MAPS_API_KEY = mapKey;

type Coordinates = {
  latitude: number;
  longitude: number;
};

const useGeocoding = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 좌표 -> 주소 (역지오코딩)
  const reverseGeocode = async (latitude: number, longitude: number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}&language=ko`,
      );
      const data = await response.json();
      setAddress(data.results[0].formatted_address);
      if (data.results.length > 0) {
      } else {
        setError('No address found');
      }
    } catch (err) {
      setError('Failed to fetch address');
    } finally {
      setLoading(false);
    }
  };

  // 주소 -> 좌표 (지오코딩)
  const geocode = async (address: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${GOOGLE_MAPS_API_KEY}`,
      );
      const data = await response.json();
      if (data.results.length > 0) {
        const location = data.results[0].geometry.location;
        setCoordinates({
          latitude: location.lat,
          longitude: location.lng,
        });
      } else {
        setError('No coordinates found');
      }
    } catch (err) {
      setError('Failed to fetch coordinates');
    } finally {
      setLoading(false);
    }
  };

  return { address, coordinates, loading, error, reverseGeocode, geocode };
};

export default useGeocoding;
