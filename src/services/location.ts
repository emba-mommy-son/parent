import axios from 'axios';

export default {
  getChildLoacation: async (childId: ChildId) => {
    return axios.get<BaseResponse<GetChildLocationResponseDto>>(`/api/...?childId=${childId}`);
  },
};
