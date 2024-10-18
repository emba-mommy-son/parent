export const keys = {
  /**
   * 최상위 키
   */
  all: ['mommyson_parent'] as const,

  /**
   * auth 쿼리 키 그룹
   */
  auth: () => [...keys.all, 'auth'] as const,
  signIn: () => [...keys.auth(), 'signIn'] as const,
  signUp: () => [...keys.auth(), 'signUp'] as const,

  /**
   * userInfo 쿼리 키 그룹
   */
  userInfo: () => [...keys.all, 'userInfo'] as const,
  getUsers: () => [...keys.userInfo(), 'getUsers'] as const,
  getUsersByPhoneNumber: (phoneNumber: PhoneNumber) =>
    [...keys.userInfo(), 'getUsersByPhoneNumber', phoneNumber] as const,

  /**
   * notification 쿼리 키 그룹
   */
  notification: () => [...keys.all, 'notification'] as const,
};
