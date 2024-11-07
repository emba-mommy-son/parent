import instance from '@/configs/axios';

export default {
  /** 리워드 이미지 조회 */
  getRewardImage: async (childId: ChildId) => {
    return instance.get<BaseResponse<string>>(`/reward/image/child/${childId}`);
  },
};
