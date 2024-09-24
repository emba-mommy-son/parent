import { TouchableOpacity } from 'react-native';
import React from 'react';
import { useChildModalStore } from '../../../zustand/useChildModalStore';

const ChildrenModalBackground = () => {
  const { isModalVisible, toggleModal } = useChildModalStore();
  return (
    <>
      <TouchableOpacity
        onPress={toggleModal}
        className={`relative w-full h-full pb-10 bg-my_black opacity-40 z-0 ${
          isModalVisible ? 'flex' : 'none'
        }`}></TouchableOpacity>
    </>
  );
};

export default ChildrenModalBackground;
