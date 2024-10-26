import React from 'react';
import { Dimensions, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const WeekChartContainer = () => {
  const data = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }, { value: 20 }, { value: 30 }];

  return (
    <View className="flex-1 justify-center items-center rounded-lg overflow-hidden">
      <LineChart
        width={Dimensions.get('window').width * 0.9}
        height={Dimensions.get('window').height * 0.3}
        data={data}
        color={'#177AD5'}
        thickness={3}
        hideDataPoints={true}
        curved={true}
        hideYAxisText
        yAxisColor="transparent"
        xAxisColor="transparent"
      />
    </View>
  );
};

export default WeekChartContainer;
