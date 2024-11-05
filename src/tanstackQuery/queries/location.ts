import { useQuery } from '@tanstack/react-query';

import mommyson from '@/services/mommyson';

import { keys } from '../keys';

/**
 * 자녀의 바운더리 목록을 받아오는 쿼리 훅
 */
const useBoundaryList = (childId: ChildId) => {
  const { data } = useQuery({
    queryKey: keys.getBoundary(childId),
    queryFn: () => mommyson.getBoundary(childId),
  });

  const boundaryList = data?.data.data || null;
  console.log(boundaryList);
  return boundaryList;
};

const useChildLocation = (childId: ChildId) => {
  const { data } = useQuery({
    queryKey: keys.getLocation(childId),
    queryFn: () => mommyson.getChildLocation(childId),
  });

  const locationList = data?.data.data || null;
  console.log(locationList);
  return locationList;
};

export { useBoundaryList, useChildLocation };
