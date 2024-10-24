import clsx from 'clsx';
import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, View, ViewStyle } from 'react-native';

type ScreenContainerProps = {
  children: React.ReactNode;
  type?: 'view' | 'scroll';
  bgColor?: string;
  barStyle?: 'light-content' | 'dark-content';
  barBgColor?: string;
  myScreenStyle?: string;
  ContainerStyle?: ViewStyle;
  isPadding?: boolean;
};

const ScreenContainer = ({
  children,
  type = 'view',
  bgColor = 'white',
  barStyle = 'light-content',
  barBgColor = '#211c2c',
  isPadding = true,
  myScreenStyle,
  ContainerStyle,
  ...props
}: ScreenContainerProps) => {
  return (
    <View style={{ flex: 1, backgroundColor: bgColor }}>
      <StatusBar barStyle={barStyle} animated={true} backgroundColor={barBgColor} />
      {/* {Platform.OS === 'ios' && (
        // iOS에서 StatusBar 배경
        <View style={{ height: 20, backgroundColor: 'black' }} />
      )} */}

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 44 : StatusBar.currentHeight || 44}>
        <ScrollView
          className={clsx('flex-1', isPadding ? 'px-4 py-8' : 'px-0 py-0')}
          contentContainerStyle={{ flexGrow: 1, ...ContainerStyle }}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ScreenContainer;
