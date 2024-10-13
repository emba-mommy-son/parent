import { View, Text, StatusBar, ScrollView, Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import React from 'react';
import clsx from 'clsx';

type ScreenContainerProps = {
  children: React.ReactNode;
  type?: 'view' | 'scroll';
  bgColor?: string;
  barStyle?: 'light-content' | 'dark-content';
  barBgColor?: string;
  myScreenStyle?: string;
};

const ScreenContainer = ({
  children,
  type = 'view',
  bgColor = 'white',
  barStyle = 'light-content',
  barBgColor = 'black',
  myScreenStyle,
  ...props
}: ScreenContainerProps) => {
  const ScreenComponent = type === 'view' ? View : ScrollView;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
      <StatusBar barStyle={barStyle} animated={true} backgroundColor={barBgColor} />
      {/* {Platform.OS === 'ios' && (
        // iOS에서 StatusBar 배경
        <View style={{ height: 20, backgroundColor: 'black' }} />
      )} */}

      <KeyboardAvoidingView
        style={{ flex: 1, paddingHorizontal: 4, paddingVertical: 8 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 44 : StatusBar.currentHeight || 44}>
        <ScrollView className={clsx('flex-1', 'px-4 py-8', myScreenStyle)} contentContainerStyle={{ flexGrow: 1 }}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ScreenContainer;
