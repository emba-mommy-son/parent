import messaging from '@react-native-firebase/messaging';
import React, { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// eslint-disable-next-line import/default
import PushNotification from 'react-native-push-notification';

import useNotification from './hooks/useNotification';
import RootStack from './navigation/RootStack';

const CHANNEL_ID = 'parent';

// 알림 권한 요청 함수
const requestNotificationPermission = async () => {
  if (Platform.OS === 'android' && Platform.Version >= 33) {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Notification permission granted');
    } else {
      console.log('Notification permission denied');
    }
  }
};

messaging().setBackgroundMessageHandler(async message => {
  console.log('background message: ', message);
  const { notification } = message;

  if (notification && notification.body) {
    console.log('LOCATION', notification.body);
    PushNotification.localNotification({
      channelId: CHANNEL_ID,
      // title: notification.title,
      title: '마미손',
      message: `자녀가 [${JSON.parse(notification.body).name}] 구역에 진입했습니다.`,
      importance: 'high', // 중요도 설정
      priority: 'high',
    });
  }
});

const App = () => {
  const queryClient = new QueryClient();
  // 푸시 알림
  const { initialize } = useNotification();

  useEffect(() => {
    requestNotificationPermission();
    const unsubscribe = initialize();

    return () => {
      unsubscribe;
    };
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <RootStack />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;
