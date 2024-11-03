import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import clsx from 'clsx';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { RootStackParamList } from '@/types/navigation';
import { dateToString } from '@/utils/formatter/DateFormat';

type SafeAreaListProps = NativeStackScreenProps<RootStackParamList, '이동 기록'>['navigation'];

const MoveRecord = ({ navigation }: { navigation: SafeAreaListProps }) => {
  const [nowData, setNowDate] = useState(new Date());
  const childMoveRecords = [
    { id: 1, title: '학교', time: '19:50', isDanger: false },
    { id: 2, title: 'PC방', time: '18:21', isDanger: true },
    { id: 3, title: '수학학원', time: '18:01', isDanger: false },
    { id: 4, title: '영어학원', time: '16:24', isDanger: false },
  ];

  return (
    <View className="flex-1">
      <View className="w-full py-3 justify-center items-end px-4">
        <Text className="font-medium text-black">{dateToString(nowData)}</Text>
      </View>
      <ScrollView>
        {childMoveRecords.map(item => (
          <View key={item.id} className="flex-row justify-between items-center px-6 py-4 border-b border-gray-200">
            <Text className={clsx({ 'text-my_pink font-medium': item.isDanger, 'text-black': !item.isDanger })}>
              {item.title}
            </Text>
            <Text className="text-base">{item.time}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MoveRecord;
