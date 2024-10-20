import React from 'react';
import { TouchableOpacity } from 'react-native';

import useRootStore from '@/zustand';

const ChildrenModalBackground = () => {
  const { isModalVisible, toggleModal } = useRootStore();
  return (
    <TouchableOpacity
      onPress={toggleModal}
      className={`relative w-full h-full pb-10 bg-black opacity-40 z-0 ${
        isModalVisible ? 'flex' : 'none'
      }`}></TouchableOpacity>
  );
};

export default ChildrenModalBackground;
