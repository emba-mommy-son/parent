import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import Colors from '@/constants/Colors';

const SmallSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.PRIMARY} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 15,
  },
});

export default SmallSpinner;
