import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryPie } from 'victory-native';

import { useChildEachEmotionReport } from '@/tanstackQuery/queries/analysis';
import useRootStore from '@/zustand';

const LanguagePatternChart = () => {
  const { nowSelectedChild, selectedDate } = useRootStore();
  const emotionData = useChildEachEmotionReport({ childId: nowSelectedChild?.id ?? 0, dateTime: selectedDate });
  const [data, setData] = useState([
    { x: '긍정적 단어 사용', y: 20 },
    { x: '부정적 단어 사용', y: 30 },
    { x: '중립적 단어 사용', y: 50 },
  ]);

  useEffect(() => {
    if (emotionData) {
      const total = emotionData.positive + emotionData.negative + emotionData.neutral;
      setData([
        { x: '긍정적 단어 사용', y: Math.round((emotionData.positive / total) * 100) },
        { x: '부정적 단어 사용', y: Math.round((emotionData.negative / total) * 100) },
        { x: '중립적 단어 사용', y: Math.round((emotionData.neutral / total) * 100) },
      ]);
    }
  }, [emotionData]);

  const colorScale = ['#FFAFC7', '#FF749E', '#C0627E', '#825361'];

  return (
    <View className="py-5">
      <Text className="text-base text-black">언어 사용 패턴</Text>
      <View className="flex items-center justify-center mt-[-24px]">
        <Svg width={200} height={150} style={{ alignSelf: 'center' }}>
          <VictoryPie
            standalone={false}
            width={200}
            height={200}
            // innerRadius={56}
            data={data}
            colorScale={colorScale}
            labels={() => null}
          />
        </Svg>
        {!emotionData && (
          <View
            className="absolute top-0 w-full h-full justify-center rounded-lg items-center"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <Text className="text-black text-base">감정 데이터가 없습니다</Text>
          </View>
        )}
      </View>

      <View className="flex flex-row flex-wrap mx-2 mt-6 justify-between">
        {data.map((item, index) => (
          <View key={index} className="flex flex-row items-center mb-1.5 min-w-[42%]">
            <View className="w-2.5 h-2.5 mr-2 rounded-full" style={{ backgroundColor: colorScale[index] }} />
            <Text>{`${item.x}: ${item.y}%`}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default LanguagePatternChart;
