import React from 'react';
import { Text, View } from 'react-native';

import Button from '@/components/buttons/Button';

const SettingScreen = () => {
  return (
    <View className="w-full h-full items-center justify-center bg-slate-500">
      <Text className="bg-red-500 text-lg w-[100%]">설정 페이지임 @@@@@@@@@@</Text>
      <View className="w-full flex items-center">
        {/* flex 속성 추가 */}
        <Button
          size="hug"
          type="primary"
          onPress={() => {
            console.log('first');
          }}>
          버튼dfdfdf
        </Button>
      </View>
    </View>
  );
};

export default SettingScreen;
