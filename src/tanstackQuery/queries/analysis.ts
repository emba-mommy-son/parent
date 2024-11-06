import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import mommyson from '@/services/mommyson';

import { keys } from '../keys';

/**
 * 자녀의 단건 감정 분석 데이터를 받아오는 쿼리 훅
 * @param {childId, dateTime}
 */
const useChildEachEmotionReport = ({ childId, dateTime }: EachEmotionForm) => {
  const { data, error, isLoading } = useQuery({
    queryKey: keys.getEachEmotionReport({ childId, dateTime }),
    queryFn: () => mommyson.getEachEmotionReport({ childId, dateTime }),
  });

  useEffect(() => {
    if (data) {
      console.log('Emotion Data:', data); // 데이터가 로드된 후 출력
    } else if (error) {
      console.log('자녀 단건 감정 - 404면 없는거임', error);
    }
  }, [data, error]);

  return data?.data.data;
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

  const stressData = data?.data.data;
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

/**
 * 특정일 스트레스 지수 높은 메시지방 요약 정보를 받아오는 쿼리 훅
 * @param {childId, year, month, day}
 */
const useSummaryReport = ({ childId, year, month, day }: SummaryForm) => {
  const { data } = useQuery({
    queryKey: keys.getSummaryReport({ childId, year, month, day }),
    queryFn: () => mommyson.getSummaryReport({ childId, year, month, day }),
  });

  const summaryReport = data?.data.data;
  return summaryReport;
};

export { useChildEachEmotionReport, useChildStressReport, useMonthEmotionReport, useSummaryReport };
