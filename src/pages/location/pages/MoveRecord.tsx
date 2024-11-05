import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { keys } from '@/tanstackQuery/keys';
import { useChildLocation } from '@/tanstackQuery/queries/location';
import { RootStackParamList } from '@/types/navigation';
import { dateToString } from '@/utils/formatter/DateFormat';
import useRootStore from '@/zustand';

type SafeAreaListProps = NativeStackScreenProps<RootStackParamList, '이동 기록'>['navigation'];

const MoveRecord = () => {
  const queryClient = useQueryClient();
  const { nowSelectedChild } = useRootStore();
  const [nowData, setNowDate] = useState(new Date());
  const locationData = useChildLocation(nowSelectedChild?.id ?? 0);

  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: keys.getLocation(nowSelectedChild?.id ?? 0),
    });
  }, []);

  return (
    <View className="flex-1">
      <View className="w-full py-3 justify-center items-end px-4">
        <Text className="font-medium text-black">{dateToString(nowData)}</Text>
      </View>
      <ScrollView>
        {locationData && locationData?.length > 0 ? (
          locationData?.map((item: ChildLocationType) => (
            <View
              key={item.boundaryId}
              className="flex-row justify-between items-center px-6 py-4 border-b border-gray-200">
              <Text className={clsx({ 'text-my_pink font-medium': item.danger, 'text-my_blishGreen': !item.danger })}>
                {item.name}
              </Text>
            </View>
          ))
        ) : (
          <View className="justify-center items-center h-48">
            <Text className="text-black text-lg">자녀의 이동 기록이 없습니다.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default MoveRecord;
