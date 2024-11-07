import { useQuery } from '@tanstack/react-query';

import mommyson from '@/services/mommyson';

import { keys } from '@/tanstackQuery/keys';

//** 목표 리스트를 받아오는 쿼리 훅 */
const useGetGoals = (childId: ChildId) => {
  const { data } = useQuery({
    queryKey: keys.getGoals(childId),
    queryFn: () => mommyson.getGoals(childId),
  });

  const goalList = data?.data.data;
  return goalList;
};
//! FIXME 이런식으로 쓰면 로딩, 에러처리 이상하게 해야됨
export { useGetGoals };
