import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Right from 'react-native-vector-icons/Entypo';
import TrashIcon from 'react-native-vector-icons/Feather';

import location from '@/services/location';
import { keys } from '@/tanstackQuery/keys';
import { useBoundaryList } from '@/tanstackQuery/queries/location';
import { RootStackParamList } from '@/types/navigation';
import useRootStore from '@/zustand';

type SafeAreaListProps = NativeStackScreenProps<RootStackParamList, '보호구역 목록'>['navigation'];

const SafeAreaList = ({ navigation }: { navigation: SafeAreaListProps }) => {
  const { nowSelectedChild } = useRootStore();
  const queryClient = useQueryClient();
  const { mutate: deleteBoundary } = useMutation({
    mutationFn: location.deleteBoundary,
    onSuccess: () => {
      ToastAndroid.show('구역이 삭제되었습니다.', 2000);
      // 보호구역 리스트 쿼리 키 무효화
      queryClient.invalidateQueries({
        queryKey: keys.getBoundary(nowSelectedChild?.id ?? 0),
      });
    },
    onError: () => {
      ToastAndroid.show('구역 삭제에 실패했습니다.', 2000);
    },
  });

  const [tabState, setTabState] = useState<'SAFE' | 'DANGER'>('SAFE');
  const [isEditMode, setIsEditMode] = useState(false);
  const boundaryData = useBoundaryList(nowSelectedChild?.id ?? 0);
  const [areaList, setAreaList] = useState(boundaryData);

  // 탭 스타일을 동적으로 생성하는 함수
  const getTabStyle = (tabType: 'SAFE' | 'DANGER') => {
    const isSelected = tabState === tabType;
    return {
      containerStyle: `flex-1 px-4 py-3 border-b-2 ${isSelected ? 'border-gray-900' : 'border-transparent'}`,
      textStyle: `text-center ${isSelected ? 'text-gray-900 font-medium' : 'text-gray-400'}`,
    };
  };

  // 항목 삭제 함수
  const handleDelete = (id: number) => {
    Alert.alert(
      '삭제 확인',
      '정말로 이 항목을 삭제하시겠습니까?',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        // 삭제 api 호출
        {
          text: '삭제',
          onPress: () => {
            setAreaList(prev => prev && prev.filter(item => item.boundaryId !== id));
            deleteBoundary(id);
          },
          style: 'destructive',
        },
      ],
      { cancelable: true },
    );
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  // boundaryData가 변경될 때마다 areaList를 업데이트
  useEffect(() => {
    setAreaList(boundaryData);
  }, [boundaryData]);

  return (
    <View className="flex-1">
      <View className="flex-row border-b border-gray-200 h-12">
        <TouchableOpacity onPress={() => setTabState('SAFE')} className={getTabStyle('SAFE').containerStyle}>
          <Text className={getTabStyle('SAFE').textStyle}>안전</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTabState('DANGER')} className={getTabStyle('DANGER').containerStyle}>
          <Text className={getTabStyle('DANGER').textStyle}>위험</Text>
        </TouchableOpacity>
      </View>
      <View className="w-full py-3 justify-center items-end px-4">
        <TouchableOpacity
          onPress={toggleEditMode}
          className={`${isEditMode ? 'bg-red-500' : 'bg-gray-500'} w-16 h-8 rounded-md flex justify-center items-center`}>
          <Text className="font-medium text-white mb-1">{isEditMode ? '완료' : '편집'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {(tabState === 'SAFE' ? areaList?.filter(item => !item.danger) : areaList?.filter(item => item.danger))?.map(
          item => (
            <TouchableOpacity
              key={item.boundaryId}
              className="flex-row h-20 justify-between items-center px-6 py-4 border-b border-gray-200">
              <Text className="text-base">{item.name}</Text>
              {isEditMode ? (
                <TouchableOpacity onPress={() => handleDelete(item.boundaryId)} className="p-2">
                  <TrashIcon name="trash-2" size={20} color="red" />
                </TouchableOpacity>
              ) : (
                <Right name="chevron-thin-right" size={16} color="black" />
              )}
            </TouchableOpacity>
          ),
        )}
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('보호 구역 등록 (1/3)')}
        className="absolute right-4 bottom-6 justify-center items-center pb-2 bg-gray-900 rounded-lg p-3 px-5">
        <Text className="text-white font-semibold mt-[-2px]">+ 추가</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SafeAreaList;
