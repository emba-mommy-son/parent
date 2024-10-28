import React from 'react';
import { Text, View } from 'react-native';
import Svg from 'react-native-svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { VictoryPie } from 'victory-native';

import Card from '@/components/Card';
import CardCover from '@/components/CardCover';

const EmotionStatsCard = () => {
  const isLogin = true;

  const data = [
    { x: '호기심/의문', y: 30 },
    { x: '즐거움', y: 25 },
    { x: '불안', y: 15 },
    { x: '불편함', y: 20 },
  ];

  const colorScale = ['#FFAFC7', '#FF749E', '#C0627E', '#825361'];

  return (
    <Card>
      <View className="flex flex-row justify-between items-center">
        <Text className="text-base text-black">감정 통계</Text>
        <View className="flex flex-row items-center">
          <Text className="mb-1 mr-0.5 text-[#aaaaaa]">AI 분석 레포트</Text>
          <AntDesign name="right" size={14} style={{ color: '#cacaca' }} />
        </View>
      </View>

      <View className="mt-[-5px]">
        <Svg width={200} height={150} style={{ alignSelf: 'center' }}>
          <VictoryPie
            standalone={false}
            width={200}
            height={160}
            innerRadius={56}
            data={data}
            colorScale={colorScale}
            labels={() => null}
          />
        </Svg>
      </View>

      <View className="flex flex-row flex-wrap mt-4 ml-1 justify-between">
        {data.map((item, index) => (
          <View key={index} className="flex flex-row items-center mb-1.5 min-w-[42%]">
            <View className="w-2.5 h-2.5 mr-2 rounded-full" style={{ backgroundColor: colorScale[index] }} />
            <Text>{`${item.x}: ${item.y}%`}</Text>
          </View>
        ))}
      </View>

      {!isLogin && <CardCover height={236} text="자녀의 감정 통계를 확인할 수 있습니다" />}
    </Card>
  );
};

export default EmotionStatsCard;
