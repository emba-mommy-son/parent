import { View, Text, StatusBar, ScrollView, Platform } from 'react-native';
import React from 'react';
import clsx from 'clsx';

type ScreenContainerProps = {
  children: React.ReactNode;
  type?: 'view' | 'scroll';
  bgColor?: string;
  barStyle?: 'light-content' | 'dark-content';
  barBgColor?: string;
};

const ScreenContainer = ({
  children,
  type = 'view',
  bgColor = 'white',
  barStyle = 'light-content',
  barBgColor = 'black',
  ...props
}: ScreenContainerProps) => {
  const ScrennComponent = type === 'view' ? View : ScrollView;

  return (
    <View className={`flex-1`}>
      <StatusBar barStyle={barStyle} animated={true} backgroundColor={barBgColor} />
      {Platform.OS === 'ios' && (
        // iOS에서 StatusBar 배경
        <View style={{ height: 20, backgroundColor: 'black' }} />
      )}
      <ScrennComponent className={clsx('flex-1', 'px-8 py-10')} style={{ backgroundColor: bgColor }}>
        {children}
      </ScrennComponent>
    </View>
  );
};

export default ScreenContainer;
