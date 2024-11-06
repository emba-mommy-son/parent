import { useQuery } from '@tanstack/react-query';

import mommyson from '@/services/mommyson';

import { keys } from '../keys';

const useGoal = (childId: ChildId) => {
  const { data } = useQuery({
    queryKey: keys.getGoal(childId),
    queryFn: () => mommyson.getGoal(childId),
  });

  const goalData = data?.data.data;
  return goalData;
};

export { useGoal };
