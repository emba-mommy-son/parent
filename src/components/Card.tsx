import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface CardProps {
  children: ReactNode;
  isMargin?: boolean;
  isPadding?: boolean;
}

const Card = ({ children, isMargin = true, isPadding = true }: CardProps) => {
  return (
    <View style={isMargin && styles.margin}>
      <View className="w-full bg-white rounded-lg mb-4" style={[styles.shadow, isPadding && styles.padding]}>
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
  margin: {
    marginHorizontal: 20,
  },
  padding: {
    padding: 16,
  },
});

export default Card;
