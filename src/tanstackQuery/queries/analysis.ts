import { useQuery } from '@tanstack/react-query';

import mommyson from '@/services/mommyson';

import { keys } from '../keys';

/**
 * 자녀의 단건 감정 분석 데이터를 받아오는 쿼리 훅
 * @param {childId, dateTime}
 */
const useChildEachEmotionReport = ({ childId, dateTime }: EachEmotionForm) => {
  const { data } = useQuery({
    queryKey: keys.getEachEmotionReport({ childId, dateTime }),
    queryFn: () => mommyson.getEachEmotionReport({ childId, dateTime }),
  });

  const eachEmotionData = data?.data.data || {};
  return eachEmotionData;
};

/**
 * 자녀의 7일간 스트레스 강도 정보를 받아오는 쿼리 훅
 * @param childId
 */
const useChildStressReport = (childId: ChildId) => {
  const { data } = useQuery({
    queryKey: keys.getStress(childId),
    queryFn: () => mommyson.getStressWhileSevenDays(childId),
  });

  const stressData = data?.data.data || {};
  return stressData;
};

/**
 * 자녀의 한달 동안의 감정 정보를 받아오는 쿼리 훅
 * @param {childId, year, month}
 */
const useMonthEmotionReport = ({ childId, year, month }: MonthEmotionForm) => {
  const { data } = useQuery({
    queryKey: keys.getMonthEmotionReport({ childId, year, month }),
    queryFn: () => mommyson.getMonthEmotionReport({ childId, year, month }),
  });

  const monthEmotionData = data?.data.data || [];
  return monthEmotionData;
};

export { useChildEachEmotionReport, useChildStressReport, useMonthEmotionReport };
