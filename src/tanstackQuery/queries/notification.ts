import { useQuery, useMutation } from '@tanstack/react-query';
import mommyson from '@/services/mommyson';
import { keys } from '@/tanstackQuery/keys';

/* 알림 목록을 가져오는 쿼리 훅 */
const useGetNotification = () => {
  const { data } = useQuery({
    queryKey: keys.getNotification(),
    queryFn: () => mommyson.getNotification(),
  });

  const notificationList = data?.data.data;
  return notificationList;
};

/* 알림 읽음 처리 요청을 보내는 훅 */
const usePostNotifications = () => {
  const mutation = useMutation({
    mutationKey: keys.postNotification(),
    mutationFn: () => mommyson.postNotification(),
    onSuccess: () => {
      console.log('알림 읽음 처리 성공');
    },
  });

  return mutation;
};

export { useGetNotification, usePostNotifications };
