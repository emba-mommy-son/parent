import instance from '@/configs/axios';

export default {
  /** 바운더리 받아오기 */
  getBoundary: async (childId: ChildId) => {
    return instance.get<BaseResponse<GetBoundaryResponseDto[]>>(`/boundary/child/${childId}`);
  },

  /** 바운더리 생성하기 */
  makeBoundary: async (boundaryForm: BoundaryForm) => {
    return instance.post<BaseResponse<void>>(`/boundary`, boundaryForm);
  },

  /** 바운더리 삭제하기 */
  deleteBoundary: async (boundaryId: number) => {
    return instance.delete(`/boundary/${boundaryId}`);
  },

  /** 자녀 위치 정보 조회 */
  getChildLocation: async (childId: ChildId) => {
    return instance.get<BaseResponse<GetChildLocationResponseDto[]>>(`/location/child/${childId}`);
  },
};
