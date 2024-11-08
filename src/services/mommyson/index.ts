import auth from '@/services/auth';

import analysis from '../analysis';
import child from '../child';
import goal from '../goal';
import location from '../location';
import reward from '../reward';
import notification from '../notification';

export default {
  ...auth,
  ...location,
  ...analysis,
  ...goal,
  ...child,
  ...reward,
  ...notification,
};
