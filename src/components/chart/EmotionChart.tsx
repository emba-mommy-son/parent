import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface EmotionChartProps {
  showReport?: boolean;
}

const EmotionChart: React.FC<EmotionChartProps> = ({ showReport = true }) => {
  const data = [
    { emotion: '즐거움', score: 48, reliability: 0.5 },
    { emotion: '놀라움', score: 36, reliability: 0.8 },
    { emotion: '공포', score: 17, reliability: 0.4 },
    { emotion: '슬픔', score: 15, reliability: 0.7 },
    { emotion: '분노', score: 46, reliability: 0.5 },
    { emotion: '혐오', score: 7, reliability: 0.2 },
  ];

  const textScale = ['#4CAF50', '#FF9923', '#9C27B0', '#3F88AD', '#FF749E', '#6B6B6B'];
  const bgScale = ['#DFF3E4', '#FFF2CC', '#EAD8FA', '#CCE3FF', '#FFD9E1', '#E6E6E6'];

  return (
    <>
      <View className="flex flex-row justify-between items-center">
        <Text className="text-base text-black">감정 분포 요약</Text>
        {showReport && (
          <View className="flex flex-row items-center">
            <Text className="mb-1 mr-0.5 text-[#aaaaaa]">AI 분석 레포트</Text>
            <AntDesign name="right" size={14} style={{ color: '#cacaca' }} />
          </View>
        )}
      </View>

      <View className="flex flex-row flex-wrap mt-5 justify-between">
        {data.map((item, index) => (
          <View
            key={index}
            className="w-[30%] h-16 p-2 mb-4 rounded relative bg-[#ffffff] flex flex-col items-center"
            style={[styles.shadow]}>
            <View
              className={`absolute top-0 left-0 h-16 ${Number(item.score) === 100 ? 'rounded' : 'rounded-l'}`}
              style={{ width: `${item.score}%`, backgroundColor: bgScale[index] }}
            />
            <Text className="text-xl font-bold" style={{ color: textScale[index] }}>
              {item.score}%
            </Text>
            <Text className="text-[#585858]">{item.emotion}</Text>
            <Text className="absolute bottom-0.5 right-1 text-[10px] text-[#cbcbcb] mt-1">{item.reliability}</Text>
          </View>
        ))}
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
