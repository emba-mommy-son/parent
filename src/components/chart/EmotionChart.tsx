import { useNavigation } from '@react-navigation/native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import { useChildEachEmotionReport } from '@/tanstackQuery/queries/analysis';
import { RootStackParamList } from '@/types/navigation';
import useRootStore from '@/zustand';

interface EmotionChartProps {
  showReport?: boolean;
}

const EmotionChart: React.FC<EmotionChartProps> = ({ showReport = true }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { nowSelectedChild, selectedDate } = useRootStore();
  const eachEmotionData = useChildEachEmotionReport({
    childId: nowSelectedChild?.id ?? 0,
    dateTime: showReport ? new Date().toISOString().split('T')[0] : selectedDate,
  });
  const [isData, setIsData] = useState(false);
  const [data, setData] = useState([
    { emotion: '즐거움', score: 48, reliability: 0.5 },
    { emotion: '놀라움', score: 36, reliability: 0.8 },
    { emotion: '공포', score: 17, reliability: 0.4 },
    { emotion: '슬픔', score: 15, reliability: 0.7 },
    { emotion: '분노', score: 46, reliability: 0.5 },
    { emotion: '혐오', score: 7, reliability: 0.2 },
    // { emotion: '즐거움', score: 0, reliability: 0 },
    // { emotion: '놀라움', score: 0, reliability: 0 },
    // { emotion: '공포', score: 0, reliability: 0 },
    // { emotion: '슬픔', score: 0, reliability: 0 },
    // { emotion: '분노', score: 0, reliability: 0 },
    // { emotion: '혐오', score: 0, reliability: 0 },
  ]);

  const calculateReliability = (emotionCount: number, totalMessages: number) => {
    return totalMessages > 0 ? emotionCount / totalMessages : 0;
  };

  useEffect(() => {
    if (eachEmotionData) {
      setIsData(true);
      setData([
        {
          emotion: '즐거움',
          score: eachEmotionData.delightPercentage,
          reliability: calculateReliability(eachEmotionData.delightCount, eachEmotionData.totalAnalyzedMessages),
        },
        {
          emotion: '놀라움',
          score: eachEmotionData.surprisePercentage,
          reliability: calculateReliability(eachEmotionData.surpriseCount, eachEmotionData.totalAnalyzedMessages),
        },
        {
          emotion: '공포',
          score: eachEmotionData.horrorPercentage,
          reliability: calculateReliability(eachEmotionData.horrorCount, eachEmotionData.totalAnalyzedMessages),
        },
        {
          emotion: '슬픔',
          score: eachEmotionData.sorrowPercentage,
          reliability: calculateReliability(eachEmotionData.sorrowCount, eachEmotionData.totalAnalyzedMessages),
        },
        {
          emotion: '분노',
          score: eachEmotionData.angerPercentage,
          reliability: calculateReliability(eachEmotionData.angerCount, eachEmotionData.totalAnalyzedMessages),
        },
        {
          emotion: '혐오',
          score: eachEmotionData.aversionPercentage,
          reliability: calculateReliability(eachEmotionData.aversionCount, eachEmotionData.totalAnalyzedMessages),
        },
      ]);
    } else {
      setIsData(false);
    }
  }, [eachEmotionData]);

  const textScale = ['#4CAF50', '#FF9923', '#9C27B0', '#3F88AD', '#FF749E', '#6B6B6B'];
  const bgScale = ['#DFF3E4', '#FFF2CC', '#EAD8FA', '#CCE3FF', '#FFD9E1', '#E6E6E6'];

  return (
    <>
      <View className="flex flex-row justify-between items-center">
        <Text className="text-base text-black">감정 분포 요약</Text>
        {showReport && (
          <TouchableOpacity onPress={() => navigation.navigate('Chart')} className="flex flex-row items-center">
            <Text className="mb-1 mr-0.5 text-[#aaaaaa]">AI 분석 레포트</Text>
            <AntDesign name="right" size={14} style={{ color: '#cacaca' }} />
          </TouchableOpacity>
        )}
      </View>

      <View className="flex flex-row flex-wrap mt-5 justify-between">
        {data.map((item, index) => (
          <View
            key={index}
            className="w-[30%] h-16 py-2 mb-4 overflow-hidden rounded relative bg-[#ffffff] flex flex-col items-center"
            style={[styles.shadow]}>
            <View
              className={`absolute top-0 left-0 h-16 ${Number(item.score) < 100 ? 'rounded' : 'rounded-l'}`}
              style={{ width: `${item.score > 100 ? 100 : item.score}%`, backgroundColor: bgScale[index] }}
            />
            <Text className="text-xl font-bold" style={{ color: textScale[index] }}>
              {item.score}%
            </Text>
            <Text className="text-[#585858]">{item.emotion}</Text>
            <Text className="absolute bottom-0.5 right-1 text-[10px] text-[#cbcbcb] mt-1">{item.reliability}</Text>
          </View>
        ))}
        {showReport && (
          <View className="flex flex-row items-center justify-center gap-1 w-full pt-2 pb-1">
            <Feather name="info" size={14} style={{ color: '#cacaca' }} />
            <Text className="mb-1 mr-0.5 text-[#aaaaaa] text-xs">백분율은 정보 신뢰도를 의미합니다.</Text>
          </View>
        )}
        {!isData && (
          <View
            className="absolute top-0 w-full h-full justify-center rounded-lg items-center"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <Text className="text-black text-base">감정 데이터가 없습니다</Text>
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#646464',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
});

export default EmotionChart;
