import { View, Text } from 'react-native';
import React from 'react';
import sampleImg2 from '../../../assets/images/sample_img2.png';
import sampleImg3 from '../../../assets/images/sample_img3.png';
import addChildButton from '../../../assets/images/add_child_button.png';
import ModalChildButton from './ModalChildButton';

const ChildrenModalEvalArea = () => {
  return (
    <View className="flex justify-center items-center bottom-10 flex-row z-20">
      <View className="h-16 justify-between relative items-center flex flex-row z-20  bg-gray-50 py-3 px-2 rounded-full shadow-xl shadow-black">
        <ModalChildButton
          img={'none'}
          onPressHandler={() => {
            console.log('first');
          }}
        />
        <ModalChildButton
          img={sampleImg2}
          onPressHandler={() => {
            console.log('dd');
          }}
        />
        <ModalChildButton
          img={sampleImg2}
          onPressHandler={() => {
            console.log('ff');
          }}
        />
      </View>
    </View>
  );
};

export default ChildrenModalEvalArea;
