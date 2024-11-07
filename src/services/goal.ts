import instance from '@/configs/axios';

export default {
  /** 목표 조회 API(부모) */
  getGoal: async (childId: ChildId) => {
    return instance.get<BaseResponse<Goal[]>>(`/goal/child/${childId}`);
  },

  /** 목표 생성 API */
  makeGoal: async (childId: ChildId) => {
    return instance.post<BaseResponse<null>>(`/goal/child/${childId}`);
  },

  /** 목표 삭제 API */
  deleteGoal: async (childId: ChildId, goalId: number) => {
    return instance.delete(`/goal/child/${childId}/${goalId}`);
  },

  /** 목표 달성 API */
  doneGoal: async (childId: ChildId, goalId: number) => {
    return instance.post<BaseResponse<null>>(`/goal/done/child/${childId}/${goalId}`);
  },

  /** 목표 달성 취소 API */
  undoneGoal: async (childId: ChildId, goalId: number) => {
    return instance.post<BaseResponse<null>>(`/goal/undone/child/${childId}/${goalId}`);
  },
};