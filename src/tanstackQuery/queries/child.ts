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

/**
 * 자녀 점수를 가져오는 함수
 */
const useChildScore = (id: number | null) => {
  const { data, isError, error } = useQuery({
    queryKey: [keys.getChildScore(), id],
    queryFn: async () => {
      const response = await child.getChildScore(id as number);
      return response.data.data;
    },
    enabled: !!id,
  });

  if (!id) {
    return 71;
  }

  if (isError) {
    console.error('자녀 점수 가져오는 중 오류 발생:', error);
    return 71;
  }

  return data ?? 71;
};

/**
 * 자녀 수면 정보를 가져오는 함수
 */
const useChildSleep = (id: number | null) => {
  const { data, isError, error } = useQuery({
    queryKey: [keys.getChildSleep(), id],
    queryFn: async () => {
      const response = await child.getChildSleep(id as number);
      return response.data.data;
    },
    enabled: !!id,
  });

  if (!id) {
    return '건강한 상태. 지난 밤 수면의 질이 좋습니다.';
  }

  if (isError) {
    console.error('자녀 수면 정보 가져오는 중 오류 발생:', error);
    return '건강한 상태. 지난 밤 수면의 질이 좋습니다.';
  }

  return data ?? '건강한 상태. 지난 밤 수면의 질이 좋습니다.';
};

export { useConnectedChild, useChildScore, useChildSleep };
