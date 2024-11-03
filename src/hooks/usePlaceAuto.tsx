import { useEffect, useState } from 'react';

import { mapKey } from '@/secret/mapKey';

const GOOGLE_PLACES_API_KEY = mapKey;

// Google Places Autocomplete API 결과 타입 정의
type Suggestion = {
  place_id: string;
  description: string;
};

const usePlaceAuto = (input: string) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (input.length < 3) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${GOOGLE_PLACES_API_KEY}&language=ko&components=country:kr`,
        );
        const data = await response.json();
        setSuggestions(data.predictions || []);
        setError(null);
      } catch (err) {
        console.error('Autocomplete API Error:', err);
        setError('Failed to fetch suggestions');
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [input]);

  return { suggestions, loading, error };
};

export default usePlaceAuto;
