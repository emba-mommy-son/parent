import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import tempImg from '../../assets/images/sample_img.png';

type LocationAtMapProps = {
  lng: Longitude;
  lat: Latitude;
};

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const GoogleMapView = ({ lat, lng }: LocationAtMapProps) => {
  const customMarkers = [
    {
      id: 0,
      title: 'fff',
      description: 'ddd',
      latlng: { latitude: 37.541, longitude: 126.986 },
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}
        zoomControlEnabled={true}
        scrollDuringRotateOrZoomEnabled={false}>
        {/* 마커 띄우는거 안됨 ㅠ */}
        {/* {customMarkers.map(marker => (
          <Marker key={marker.id} coordinate={marker.latlng} title={marker.title} description={marker.description} />
        ))} */}
      </MapView>
    </View>
  );
};

export default GoogleMapView;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
