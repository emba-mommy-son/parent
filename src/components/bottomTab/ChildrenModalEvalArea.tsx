import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '@/types/navigation';
import useRootStore from '@/zustand';

import ModalChildButton from './ModalChildButton';

type ChildModalEvalAreaProp = NativeStackScreenProps<RootStackParamList, 'ChildrenModalEvalArea'>['navigation'];

const ChildrenModalEvalArea = ({ navigation }: { navigation: ChildModalEvalAreaProp }) => {
  const { children, setNowSelectedChild, toggleModal } = useRootStore();

  return (
    <View className="flex justify-center items-center bottom-10 flex-row z-20">
      <View className="justify-between relative items-center flex flex-row z-20 bg-white py-2 pr-2 rounded-full shadow-xl shadow-black pl-4">
        {!!children && children.length === 0 ? (
          <View>
            <Text className="mr-4">자녀를</Text>
            <Text className="mr-4">등록해주세요</Text>
          </View>
        ) : (
          <>
            {children.map(child => (
              <ModalChildButton
                key={child.id}
                img={child.profileImage || 'none'}
                name={child.name}
                onPressHandler={() => {
                  setNowSelectedChild(child);
                  toggleModal();
                }}
              />
            ))}
          </>
        )}
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterInfo')}
          className="w-[52px] h-[52px] ml-[-8px] rounded-full flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }}>
          <Text className="text-[#ffffff] text-xl">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChildrenModalEvalArea;
