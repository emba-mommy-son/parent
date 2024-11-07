import instance from '@/configs/axios';

export default {
  /** 리워드 이미지 조회 */
  getRewardImage: async (childId: ChildId) => {
    return instance.get<BaseResponse<string>>(`/reward/image/child/${childId}`);
  },

  /** 리워드 이미지 생성 */
  createRewardImage: async (childId: ChildId, file: ImageFile) => {
    const formData = new FormData();
    formData.append('rewardImage', file as any);

    return instance.post<BaseResponse<void>>(`/reward/image/child/${childId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  /** 리워드 이미지 삭제 */
  deleteRewardImage: async (childId: ChildId) => {
    return instance.delete<BaseResponse<void>>(`/reward/image/child/${childId}`);
  },
};
