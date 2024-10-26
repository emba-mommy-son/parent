import React, { useState } from 'react';

import GoogleMapView from '@/components/location/MapView';
import ScreenContainer from '@/components/ScreenContainer';

const LocationScreen = () => {
  // const location = useChildLocation; 자녀 위치 받아오는 쿼리 훅
  const [location, setLocation] = useState({ lat: 37.58008433707483, lng: 126.96762175737622 });

  return (
    <ScreenContainer bgColor="white" isPadding={false}>
      <GoogleMapView lat={location.lat} lng={location.lat} />
    </ScreenContainer>
  );
};

export default LocationScreen;
