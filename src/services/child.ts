import instance from '@/configs/axios';

export default {
  /*
   * 등록된 자녀 확인
   */
  checkConnetedChild: async () => {
    return await instance.get('/parents');
  },
};
