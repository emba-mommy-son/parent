import instance from '@/configs/axios';

export default {
  /**
   * 자녀 감정 단건 조회
   */
  getEachEmotionReport: async ({ childId, dateTime }: EachEmotionForm) => {
    return instance.get<BaseResponse<GetEachEmotionReportDto>>(`/analysis/reports/${childId}?dateTime=${dateTime}`);
  },

  /**
   * 자녀의 7일간 스트레스 강도 정보 조회
   */
  getStressWhileSevenDays: async (childId: ChildId) => {
    return instance.get<BaseResponse<GetStressWhileSevenDaysDto>>(`/analysis/stress/${childId}`);
  },

  /**
   * 자녀의 한 달 간 감정 분석 정보 조회
   */
  getMonthEmotionReport: async ({ childId, year, month }: MonthEmotionForm) => {
    return instance.get<BaseResponse<EmotionDto[]>>(`/analysis/reports/month/${childId}?year=${year}&month=${month}`);
  },

  /**
   * 특정일 스트레스 지수 높은 메시지방 요약 정보 조회
   */
  getSummaryReport: async ({ childId, year, month, day }: SummaryForm) => {
    return instance.get<BaseResponse<GetSummaryReportDto>>(
      `/analysis/reports/day-summary/${childId}?year=${year}&month=${month}&day=${day}`,
    );
  },
};
