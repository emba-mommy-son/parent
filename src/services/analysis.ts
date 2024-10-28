import axios from 'axios';

export default {
  /**
   * 자녀 감정 단건 조회
   */
  getEachEmotionReport: async ({ childId, dateTime }: EachEmotionForm) => {
    return axios.get(`/api/v1/analysis/reports?childId=${childId}&dateTime=${dateTime}`);
  },

  /**
   * 자녀의 7일간 스트레스 강도 정보 조회
   */
  getStressWhileSevenDays: async (childId: ChildId) => {
    return axios.get(`/api/v1/analysis/stress/${childId}`);
  },

  /**
   * 자녀의 한 달 간 감정 분석 정보 조회
   */
  getMonthEmotionReport: async ({ childId, year, month }: MonthEmotionForm) => {
    return axios.get(`/api/vi/analysis/reports/month?childId=${childId}&year=${year}&month=${month}`);
  },

  /**
   * 자녀 감정 분석 정보 저장
   */
  // postChildEmotion: async
  // 이건 자녀꺼인듯...?
};
