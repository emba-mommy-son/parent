import { View, Text } from 'react-native';
import React from 'react';
import sampleImg2 from '@/assets/images/sample_img2.png';
import sampleImg3 from '@/assets/images/sample_img3.png';
import ModalChildButton from './ModalChildButton';

const ChildrenModalEvalArea = () => {
  return (
    <View className="flex justify-center items-center bottom-10 flex-row z-20">
      <View className="justify-between relative items-center flex flex-row z-20  bg-my_white py-2 pr-2  rounded-full shadow-xl shadow-black pl-4">
        <ModalChildButton
          img={sampleImg3}
          name="김이름"
          onPressHandler={() => {
            console.log('dd');
          }}
        />
        <ModalChildButton
          img={sampleImg2}
          name="김가을"
          onPressHandler={() => {
            console.log('ff');
          }}
        />
        {/* <ModalChildButton
          img={'none'}
          name='홍길동'
          onPressHandler={() => {
            console.log('first');
          }}
        /> */}
        <View
          className="w-[52px] h-[52px] ml-[-8px] rounded-full flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }}>
          <Text className="text-[#ffffff] text-xl">+</Text>
        </View>
      </View>
    </View>
  );
};

export default ChildrenModalEvalArea;
