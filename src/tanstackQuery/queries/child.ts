import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import child from '@/services/child';
import useRootStore from '@/zustand';

import { keys } from '../keys';

/**
 * 등록된 자녀 정보를 가져오는 함수
 */
const useConnectedChild = () => {
  const { setChildren, setNowSelectedChild } = useRootStore();

  const { data, isError, error } = useQuery({
    queryKey: keys.getConnectedChild(),
    queryFn: async () => {
      const response = await child.getConnectedChild();
      return response.data.data;
    },
  });

  useEffect(() => {
    if (data && data.length > 0) {
      console.log('불러온 자녀 리스트 : ', data);
      setChildren(data);
      setNowSelectedChild(data[0]);
    }
  }, [data]);

  if (isError) {
    console.error('자녀 정보 가져오는 중 오류 발생:', error);
  }

  return data;
};

/** 자녀 점수를 가져오는 쿼리 훅 */
const useChildScore = (childId: ChildId) => {
  const { data } = useQuery({
    queryKey: keys.getChildScore(childId),
    queryFn: () => child.getChildScore(childId),
  });

  const scoreData = data?.data.data ?? 0;
  return scoreData;
};

export { useChildScore, useConnectedChild };
