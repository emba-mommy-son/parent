import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import child from '@/services/child';
import { keys } from '../keys';
import useRootStore from '@/zustand';

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
      setChildren(data);
      setNowSelectedChild(data[0]);
    }
  }, [data]);

  if (isError) {
    console.error('자녀 정보 가져오는 중 오류 발생:', error);
  }

  return data;
};

export { useConnectedChild };
