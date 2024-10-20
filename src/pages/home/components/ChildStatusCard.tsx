import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from '@/components/Card';
import sampleImg2 from '@/assets/images/sample_img2.png';

const ChildStatusCard = () => {
  const score = 71;

  return (
    <Card>
      <View className="flex flex-row items-start justify-between">
        <View>
          <Text className="text-base text-black mb-0.5">건강한 상태</Text>
          <Text>지난 밤 수면의 질이 좋습니다</Text>
        </View>
        <Image source={sampleImg2} className="rounded-full w-12 h-12" />
      </View>
      <View className="flex flex-row justify-between items-end mt-6 mb-2">
        <Text>score</Text>
        <View className="flex flex-row items-end">
          <Text className="text-black text-base mb-[-2px]">{score}</Text>
          <Text className="text-xs">/100</Text>
        </View>
      </View>
      <View className="w-full bg-black rounded-full h-2">
        <View
          className={`bg-my_primary h-2 ${Number(score) === 100 ? 'rounded-full' : 'rounded-l-full'}`}
          style={{ width: `${score}%` }}></View>
      </View>
    </Card>
  );
};

export default ChildStatusCard;
