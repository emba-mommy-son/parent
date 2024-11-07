import instance from '@/configs/axios';

export default {
  /*
   * 등록된 자녀 확인
   */
  getConnectedChild: async () => {
    return await instance.get<BaseResponse<GetConnectedChildDto[]>>('/parents');
  },
  /** 자녀 점수 확인 */
  getChildScore: async (childId: ChildId) => {
    return instance.get<BaseResponse<number>>(`/parents/${childId}`);
  },
};
