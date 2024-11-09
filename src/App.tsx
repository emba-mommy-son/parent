import messaging from '@react-native-firebase/messaging';
import React, { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// eslint-disable-next-line import/default
import PushNotification from 'react-native-push-notification';

import useNotification from './hooks/useNotification';
import RootStack from './navigation/RootStack';

const CHANNEL_ID = 'children';

const parseNotification = (type: string) => {
  switch (type) {
    case 'LOCATION':
      return NotificationType.LOCATION;
    default:
      return NotificationType.UNKNOWN;
  }
};

messaging().setBackgroundMessageHandler(async message => {
  console.log('background message: ', message);
  const { notification } = message;

  if (notification && notification.body) {
    const notificationType = parseNotification(notification.title || '');

    // * 위치 알림
    if (notificationType === NotificationType.LOCATION) {
      console.log('LOCATION', notification.body);
      PushNotification.localNotification({
        channelId: CHANNEL_ID,
        title: notification.title,
        message: notification.body,
      });
    }
  }
});

const App = () => {
  const queryClient = new QueryClient();
  // 푸시 알림
  const { initialize } = useNotification();
  useEffect(() => {
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
