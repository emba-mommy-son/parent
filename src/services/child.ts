import instance from '@/configs/axios';

export default {
  /*
   * 등록된 자녀 확인
   */
  getConnectedChild: async () => {
    return await instance.get<BaseResponse<GetConnectedChildDto[]>>('/parents');
  },

  /*
   * 자녀 상태 점수 조회
   */
  getChildScore: async (childId: number) => {
    return await instance.get<BaseResponse<number>>(`/parents/${childId}`);
  },

  /*
   * 자녀 수면 상태 조회
   */
  getChildSleep: async (childId: number) => {
    return await instance.get<BaseResponse<string>>(`/sleep/children/${childId}`);
  },
};
