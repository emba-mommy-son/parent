import React, { useState } from 'react';
import { Modal, Pressable, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import goal from '@/services/goal';
import { keys } from '@/tanstackQuery/keys';
import { AxiosError } from 'axios';
// 아이콘
import EntypoIcons from 'react-native-vector-icons/Entypo';

interface PlusTodoModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  childId: number;
}

export const TodoModal = ({ isModalOpen, setIsModalOpen, childId }: PlusTodoModalProps) => {
  const queryClient = useQueryClient();
  const [input, setInput] = useState<string>('');

  /** todo 생성 */
  const { mutate: createGoal } = useMutation({
    mutationFn: (content: string) => goal.createGoal(childId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: keys.getGoals(childId),
      });
      ToastAndroid.show('할일 생성에 성공했습니다', 2000);
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      ToastAndroid.show('할일 생성에 실패했습니다', 2000);
      console.error(error.response?.data);
    },
  });

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleCreateTodo = () => {
    if (!input.trim()) {
      ToastAndroid.show('내용을 입력해주세요', 2000);
      return;
    }
    createGoal(input);
    setIsModalOpen(false);
  };

  return (
    <Modal animationType="none" visible={isModalOpen} transparent={true} onRequestClose={handleModalClose}>
      <Pressable className="flex-1 bg-black/50 justify-center items-center" onPress={handleModalClose}>
        <View
          className="relative bg-white rounded-xl w-[280px] flex flex-col items-center justify-center p-3 space-y-4"
          onStartShouldSetResponder={() => true}>
          <View className="absolute top-2 right-2">
            <EntypoIcons name="cross" size={20} onPress={handleModalClose} />
          </View>
          <Text className="text-black font-bold text-lg">TODO 추가</Text>
          <TextInput
            className="w-full h-40 rounded-xl bg-white border-[1px] border-gray-700"
            value={input}
            onChangeText={setInput}
            multiline={true}
            textAlignVertical="top"
          />
          <TouchableOpacity onPress={handleCreateTodo}>
            <View className="bg-[#FF5185] flex flex-row rounded-lg mt-2">
              <Text className="text-white text-base font-bold w-full text-center py-1.5">등록</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};
