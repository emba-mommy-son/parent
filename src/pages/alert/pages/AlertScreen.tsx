import { useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import Button from '@/components/buttons/Button';
import ScreenContainer from '@/components/ScreenContainer';
import { keys } from '@/tanstackQuery/keys';
import { useGetNotification, usePostNotifications } from '@/tanstackQuery/queries/notification';

// 현재 코드는 더미데이터 출력용임. 넘어오는 데이터 구조에 따라 로직을 변경할 필요가 있음.
const AlertScreen = () => {
  // 알림 목록 조회
  const notificationList: notificationDto[] | undefined = useGetNotification();
  // const [notificationList, setNotificationList] = useState([
  //   {
  //     id: 1,
  //     notificationType: 'LOCATION',
  //     message: '자녀가 [학교] 구역에 있습니다.',
  //     createdAt: '-999999999-11-09T00:00:00',
  //     read: false,
  //   },
  //   {
  //     id: 2,
  //     notificationType: 'LOCATION',
  //     message: '자녀가 [PC방] 구역에 있습니다.',
  //     createdAt: '-999999999-11-09T00:00:00',
  //     read: false,
  //   },
  //   {
  //     id: 3,
  //     notificationType: 'LOCATION',
  //     message: '자녀가 [병원] 구역에 있습니다.',
  //     createdAt: '-999999999-11-08T00:00:00',
  //     read: true,
  //   },
  //   {
  //     id: 4,
  //     notificationType: 'LOCATION',
  //     message: '자녀가 [학교] 구역에 있습니다.',
  //     createdAt: '-999999999-11-08T00:00:00',
  //     read: true,
  //   },
  //   {
  //     id: 5,
  //     notificationType: 'LOCATION',
  //     message: '자녀가 [PC방] 구역에 있습니다.',
  //     createdAt: '-999999999-11-08T00:00:00',
  //     read: true,
  //   },
  // ]);

  //알림 읽음 처리 뮤테이션
  const postNotification = usePostNotifications();
  const queryClient = useQueryClient();

  const readAllNoti = () => {
    // setNotificationList(notificationList.map(notiData => ({ ...notiData, read: true })));
    postNotification.mutate(undefined, {
      onSuccess: () => {
        // 모두 읽었으면 키 무효화해서 다시 로드
        queryClient.invalidateQueries({ queryKey: keys.getNotification() });
      },
    });
  };

  const createdAtSlicer = (day: string) => {
    return day.split('T')[0].split('-').splice(2).join('-');
  };

  useEffect(() => {
    return () => {
      readAllNoti();
    };
  }, []);

  return (
    <ScreenContainer barStyle="dark-content" ContainerStyle={{ justifyContent: 'space-between' }}>
      {notificationList && notificationList.length === 0 ? (
        <View className="bg-[#F4F4F4] flex flex-column justify-center items-center pt-4 pb-5 gap-1.5">
          <Feather name="info" size={18} color={'#9c9c9c'} />
          <Text>도착한 알림이 없습니다.</Text>
        </View>
      ) : (
        <ScrollView className="px-4 pb-2.5">
          <View className="mb-5">
            {notificationList &&
              notificationList.map(notidata => (
                <View
                  key={notidata.id}
                  className="flex flex-row justify-between items-center py-3"
                  style={styles.alertContainer}>
                  <View className="flex-row">
                    <Text style={!notidata.read ? styles.newMessage : styles.oldMessage}>{notidata.message}</Text>
                    {!notidata.read && (
                      <View className="ml-2 bg-my_primary rounded-full w-5 h-5 flex items-center justify-center">
                        <Text className="text-white text-xs font-bold">N</Text>
                      </View>
                    )}
                  </View>
                  <Text>{createdAtSlicer(notidata.createdAt)}</Text>
                </View>
              ))}
          </View>
        </ScrollView>
      )}
      <View>
        {/* <Button onPress={readAllNoti} myTextStyle="text-white">
          모두 읽기
        </Button> */}
      </View>
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
