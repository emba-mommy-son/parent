import React from 'react';
import { Image, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import sampleMap from '@/assets/images/sample_map.png';
import Card from '@/components/Card';
import CardCover from '@/components/CardCover';
import { TimeFormat } from '@/utils/formatter/TimeFormat';

const LocationCard = () => {
  const isLogin = true;
  const currentTime = TimeFormat();

  const data = {
    location1: '광주광역시',
    location2: '광산구 임방울대로 32',
  };

  return (
    <Card>
      <View className="flex flex-row justify-between">
        <View className="flex flex-row">
          <Text className="text-black">현위치</Text>
          <Text className="text-[#aaaaaa]">&nbsp;&nbsp;|&nbsp;&nbsp;{currentTime}</Text>
        </View>
        <View className="flex flex-row items-center">
          <Text className="mb-1 mr-0.5 text-[#aaaaaa]">상세</Text>
          <AntDesign name="right" size={14} style={{ color: '#cacaca' }} />
        </View>
      </View>
      <View className="relative flex flex-row items-center p-1 mt-3">
        <Image source={sampleMap} className="w-20 h-20 rounded-2xl mr-5" />
        <Entypo name="location-pin" size={36} style={{ color: '#FF5185', position: 'absolute', top: 26, left: 26 }} />
        <View>
          <Text className="text-black text-lg">{data.location1}</Text>
          <Text className="text-black text-lg">{data.location2}</Text>
        </View>
      </View>
      {!isLogin && <CardCover height={124} text="자녀의 실시간 위치를 확인할 수 있습니다" />}
    </Card>
  );
};

export default LocationCard;
