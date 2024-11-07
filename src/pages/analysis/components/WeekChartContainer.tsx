import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

import Colors from '@/constants/Colors';
import { useChildStressReport } from '@/tanstackQuery/queries/analysis';
import useRootStore from '@/zustand';

const WeekChartContainer = () => {
  const { nowSelectedChild } = useRootStore();
  const stressData = useChildStressReport(nowSelectedChild?.id ?? 0);
  const [isData, setIsData] = useState(false);
  const [data, setData] = useState([
    { title: '3', value: 15 },
    { title: '3', value: 30 },
    { title: '3', value: 26 },
    { title: '3', value: 40 },
    { title: '3', value: 20 },
    { title: '3', value: 30 },
    { title: '3', value: 24 },
  ]);

  useEffect(() => {
    if (stressData && stressData?.stressLevels.length > 0) {
      setIsData(true);
      setData(
        stressData.stressLevels.map(day => ({
          title: day.date.split('-')[2],
          value: day.intensity,
        })),
      );
    } else {
      setIsData(false);
      setData([
        { title: '3', value: 15 },
        { title: '3', value: 30 },
        { title: '3', value: 26 },
        { title: '3', value: 40 },
        { title: '3', value: 20 },
        { title: '3', value: 30 },
        { title: '3', value: 24 },
      ]);
    }
  }, [stressData]);

  return (
    <View className="flex-1 justify-center items-center rounded-xl overflow-hidden mt-8">
      <Text className="text-[#000000] text-base mr-auto ml-2.5">지난 7일간 스트레스 지수</Text>
      <LineChart
        width={Dimensions.get('window').width * 0.9}
        height={Dimensions.get('window').height * 0.3}
        data={data}
        color={'#FD5FAE'}
        thickness={3}
        hideDataPoints={true}
        curved={true}
        hideYAxisText
        yAxisColor="lightgray"
        xAxisColor="lightgray"
      />
      {!isData && (
        <View
          className="absolute top-0 w-full h-[85%] mt-6 justify-center items-center"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <Text className="text-black text-sm">스트레스 기록이 없습니다.</Text>
        </View>
      )}
    </View>
  );
};

export default WeekChartContainer;
