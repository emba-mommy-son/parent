import { type NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import { RootStackParamList } from '@/types/navigation';
import useRootStore from '@/zustand';
import { useSummaryReport } from '@/tanstackQuery/queries/analysis';

const AnalysisModal = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { selectedDate, nowSelectedChild } = useRootStore();
  const data = useSummaryReport({
    childId: nowSelectedChild?.id || 0,
    year: Number(selectedDate.split('-')[0]),
    month: Number(selectedDate.split('-')[1]),
    day: Number(selectedDate.split('-')[2]),
  });

  // 배경 색상 배열
  const bgScale = ['#FFD9E1', '#E6E6E6', '#DFF3E4', '#FFF2CC', '#EAD8FA', '#CCE3FF'];

  return (
    <View className="h-[600px] px-5">
      <View className="w-full flex flex-row justify-between">
        <Text className="font-medium text-lg text-[#000000]">
          {selectedDate.split('-')[1]}월 {selectedDate.split('-')[2]}일
        </Text>
      </View>

      <View className="h-[140px] overflow-hidden">
        <View className="flex flex-row space-x-2 mt-4 h-[30px]">
          {data?.descriptionTag?.map((tag: string, index: number) => (
            <View
              key={index}
              style={[
                styles.tag,
                { backgroundColor: bgScale[index % bgScale.length] }, // 색상 순환 적용
              ]}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
        <Text className="text-black text-base mt-2">{data?.description}</Text>
      </View>

      <TouchableOpacity
        className="bg-my_secondary rounded flex justify-center items-center py-1.5 mt-4"
        onPress={() =>
          navigation.navigate('Chart', {
            selectedDate: `${selectedDate.split('-')[0]}년 ${selectedDate.split('-')[1]}월 ${selectedDate.split('-')[2]}일`,
          })
        }>
        <Text className="text-[#ffffff] text-lg">분석 레포트 보러가기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  tagText: {
    color: '#000000',
  },
});

export default AnalysisModal;
