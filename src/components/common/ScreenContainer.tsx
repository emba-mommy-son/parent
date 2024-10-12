import { View, Text, StatusBar, ScrollView } from 'react-native';
import React from 'react';
import clsx from 'clsx';

type ScreenContainerProps = {
  children: React.ReactNode;
  type?: 'view' | 'scroll';
  bgColor?: string;
  barStyle?: 'light-content' | 'dark-content';
};

const ScreenContainer = ({
  children,
  type = 'view',
  bgColor = 'red',
  barStyle = 'light-content',
  ...props
}: ScreenContainerProps) => {
  const ScrennComponent = type === 'view' ? View : ScrollView;

  return (
    <View className={`flex-1`}>
      <StatusBar barStyle={barStyle} animated={true} backgroundColor="yellow" />
      <ScrennComponent className={clsx('flex-1', 'px-8 py-10')}>{children}</ScrennComponent>
    </View>
  );
};

export default ScreenContainer;
