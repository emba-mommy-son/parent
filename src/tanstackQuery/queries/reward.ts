import { useQuery } from '@tanstack/react-query';

import mommyson from '@/services/mommyson';

import { keys } from '../keys';

//** 자녀의 리워드 이미지를 받아오는 쿼리 훅 */
const useRewardImage = (childId: ChildId) => {
  const { data } = useQuery({
    queryKey: keys.getRewardImage(childId),
    queryFn: () => mommyson.getRewardImage(childId),
  });

  const rewardImage = data?.data.data;
  console.log(rewardImage);
  return rewardImage;
};

export { useRewardImage };
