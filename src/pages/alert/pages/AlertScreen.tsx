import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import ScreenContainer from '@/components/ScreenContainer';

// 현재 코드는 더미데이터 출력용임. 넘어오는 데이터 구조에 따라 로직을 변경할 필요가 있음.
const AlertScreen = () => {
  const noAlert = false;

  type AlertData = {
    [date: string]: string[];
  };

  const lastAccessTime = '';
  const data: AlertData = {
    '2024.10.26': ['스트레스가 3일간 지속되었습니다', '자녀가 안전구역을 벗어났습니다'],
    '2024.10.25': [
      '자녀가 학교에서 나왔습니다',
      '자녀가 학교에 도착했습니다',
      '자녀가 집에서 나왔습니다',
      '자녀가 학교에 도착했습니다',
      '자녀가 집에서 나왔습니다',
    ],
  };

  return (
    <ScreenContainer barStyle="dark-content">
      {noAlert ? (
        <View className="bg-[#F4F4F4] flex flex-column justify-center items-center pt-4 pb-5 gap-1.5">
          <Feather name="info" size={18} color={'#9c9c9c'} />
          <Text>도착한 알림이 없습니다.</Text>
        </View>
      ) : (
        <ScrollView className="px-4 pb-2.5">
          {Object.keys(data).map((date, index) => (
            <View key={index} className="mb-5">
              <Text className="text-center text-gray-500 mb-2">{date}</Text>
              {data[date].map((message, msgIndex) => (
                <View
                  key={msgIndex}
                  className="flex flex-row justify-between items-center py-3"
                  style={styles.alertContainer}>
                  <Text style={msgIndex < 2 ? styles.newMessage : styles.oldMessage}>{message}</Text>
                  {msgIndex < 2 && (
                    <View className="ml-2 bg-my_primary rounded-full w-5 h-5 flex items-center justify-center">
                      <Text className="text-white text-xs font-bold">N</Text>
                    </View>
                  )}
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    paddingVertical: 8,
  },
  newMessage: {
    color: '#000000',
  },
  oldMessage: {
    color: '#9c9c9c',
  },
});

export default AlertScreen;
