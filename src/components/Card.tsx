import { View, StyleSheet } from 'react-native';
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <View className="mx-5 relative">
      <View className="w-full bg-white rounded-lg p-4 mb-4" style={[styles.shadow]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#646464',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
});

export default Card;
