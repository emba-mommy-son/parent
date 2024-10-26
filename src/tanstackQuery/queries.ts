import { useQuery } from '@tanstack/react-query';

import mommyson from '@/services/mommyson';

import { keys } from './keys';

/**
 * 자녀의 위치 정보를 받아오는 쿼리 훅
 */
const useChildLocation = () => {
  const { data } = useQuery({ queryKey: keys.location(), queryFn: () => mommyson.getChildLoacation() });

  const location = data?.data.data || {};

  return location;
};

export { useChildLocation };
