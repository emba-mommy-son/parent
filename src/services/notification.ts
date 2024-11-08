import instance from '@/configs/axios';

export default {
  /**
   * 알림 목록 조회
   */
  getNotification: async () => {
    return instance.get<BaseResponse<notificationDto[]>>('/notifications');
  },

  /**
   * 알림 읽음 처리
   */
  postNotification: async () => {
    return instance.get<BaseResponse<null>>('/notifications');
  },
};
