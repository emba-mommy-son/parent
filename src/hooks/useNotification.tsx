import messaging from '@react-native-firebase/messaging';
import { useState } from 'react';
// eslint-disable-next-line import/default
import PushNotification from 'react-native-push-notification';

const CHANNEL_ID = 'parent';

interface LocationData {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  radius: number;
  danger: boolean;
}

const useNotification = () => {
  const [init, setInit] = useState(false);

  const initialize = async () => {
    if (!init) {
      PushNotification.configure({
        onRegister: function (token) {
          console.log('TOKEN:', token);
        },
        onNotification: function (notification) {
          console.log('NOTIFICATION:', notification);
        },
        popInitialNotification: true,
        requestPermissions: true,
      });

      PushNotification.createChannel(
        {
          channelId: CHANNEL_ID,
          channelName: '마미손 알림',
          channelDescription: '마미손에서 발송하는 알림',
        },
        created => console.log(`createChannel returned '${created}'`),
      );

      // foreground notification
      const unsubscribe = messaging().onMessage(async message => {
        console.log(message);
        const { notification } = message;
        if (notification && notification.body) {
          const notificationType = parseNotification(notification.title || '');

          if (notificationType === NotificationType.UNKNOWN) {
            return;
          }

          // * 위치 알림
          if (notificationType === NotificationType.LOCATION) {
            console.log('LOCATION', notification.body);

            const locationData: LocationData[] = [JSON.parse(notification.body)];
            console.log('위치 알림 : ', locationData);
          }
        }
      });

      setInit(true);

      return unsubscribe;
    }
  };

  // PushNotification.createChannel(
  //   {
  //     channelId: CHANNEL_ID,
  //     channelName: '마미손 알림',
  //     channelDescription: '마미손에서 발송하는 알림',
  //   },
  //   created => console.log(`createChannel returned '${created}'`),
  // );

  const parseNotification = (type: string) => {
    switch (type) {
      case 'LOCATION':
        return NotificationType.LOCATION;
      default:
        return NotificationType.UNKNOWN;
    }
  };

  return { initialize };
};

export default useNotification;
