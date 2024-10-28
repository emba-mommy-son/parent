import axios from 'axios';

export default {
  getChildLoacation: async (childId: ChildId) => {
    return axios.get<GetChildLocationResponse>(`/api/...?childId=${childId}`);
  },
};
