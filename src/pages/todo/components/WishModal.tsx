// 리액트
import React from 'react';
import { Modal, Pressable, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';

// 아이콘
import EntypoIcons from 'react-native-vector-icons/Entypo';

interface WishModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  rewardImage?: string;
}

export const WishModal = ({ isModalOpen, setIsModalOpen, rewardImage }: WishModalProps) => {
  const [selectedImage, setSelectedImage] = useState<{
    uri: string;
    type: string;
    name: string;
  } | null>(null);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleImageSelect = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.7,
        maxWidth: 1024,
        maxHeight: 1024,
        selectionLimit: 1,
      });

      const asset = result.assets?.[0];
      // 타입 단언
      if (!asset?.uri || !asset?.type || !asset?.fileName) return;

      if (result.assets && result.assets[0]) {
        const file = {
          uri: asset.uri,
          type: asset.type,
          name: asset.fileName,
        };
        setSelectedImage(file);
      }
    } catch (error) {
      console.error('이미지 선택 에러:', error);
    }
  };

  //   const handleSubmit = () => {};

  return (
    <Modal animationType="none" visible={isModalOpen} transparent={true} onRequestClose={handleModalClose}>
      <Pressable className="flex-1 bg-black/50 justify-center items-center" onPress={handleModalClose}>
        <View
          className="relative bg-white rounded-xl w-[280px] flex flex-col items-center justify-center p-3 space-y-4"
          onStartShouldSetResponder={() => true}>
          <View className="absolute top-2 right-2">
            <EntypoIcons name="cross" size={25} onPress={handleModalClose} />
          </View>
          <Text className="text-black font-bold text-lg">{rewardImage ? '선물 수정' : '선물 등록'}</Text>
          <TouchableOpacity onPress={handleImageSelect}>
            {selectedImage?.uri || rewardImage ? (
              <Image
                source={{ uri: selectedImage?.uri || rewardImage }}
                className="w-40 h-40 rounded-full"
                resizeMode="cover"
              />
            ) : (
              <View className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center">
                <Text>이미지 선택</Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('출력')}
            className={`${!selectedImage ? 'opacity-50' : ''}`}
            disabled={!selectedImage}>
            <View className="bg-[#FF5185] flex flex-row rounded-lg mt-2">
              <Text className="text-white text-base font-bold w-full text-center py-1.5">등록</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};
