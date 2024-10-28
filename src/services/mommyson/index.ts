import auth from '@/services/auth';

import analysis from '../analysis';
import location from '../location';

export default {
  ...auth,
  ...location,
  ...analysis,
};
