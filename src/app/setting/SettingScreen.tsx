import { View, Text } from 'react-native';
import React from 'react';
import Button from '../../components/common/buttons/Button';

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
