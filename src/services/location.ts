import axios from 'axios';

export default {
  getChildLoacation: async () => {
    return axios.get<GetChildLocationResponse>('/api/...');
  },
};
