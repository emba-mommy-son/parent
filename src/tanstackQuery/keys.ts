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
  getConnectedChild: () => [...keys.all, 'getConnectedChild'] as const,

  /**
   * notification 쿼리 키 그룹
   */
  notification: () => [...keys.all, 'notification'] as const,

  /**
   * location 쿼리 키 그룹
   */
  location: () => [...keys.all, 'loacation'] as const,
  getBoundary: (childId: ChildId) => [...keys.location(), 'getBoundary', childId] as const,
  getLocation: (childId: ChildId) => [...keys.location(), 'getLocation', childId] as const,

  /**
   * analysis(감정분석) 쿼리 키 그룹
   */
  analysis: () => [...keys.all, 'analysis'] as const,
  getEachEmotionReport: ({ childId, dateTime }: EachEmotionForm) =>
    [...keys.all, 'eachEmotionReport', childId, dateTime] as const, // 단건 감정
  getStress: (childId: ChildId) => [...keys.all, 'stress', childId] as const, //스트레스
  getMonthEmotionReport: ({ childId, year, month }: MonthEmotionForm) =>
    [...keys.all, 'monthEmotionReport', childId, year, month] as const, // 한달 동안 감정
  getSummaryReport: ({ childId, year, month, day }: SummaryForm) =>
    [...keys.all, 'summaryReport', childId, year, month, day] as const,

  /**
   * goal(목표) 쿼리 키 그룹
   */
  goal: () => [...keys.all, 'goal'] as const,
  getGoal: (childId: ChildId) => [...keys.all, 'getGoal', childId] as const,
  makeGoal: () => [...keys.all, 'makeGoal'] as const,
  deleteGoal: (childId: ChildId, goalId: number) => [...keys.all, 'deleteGoal', childId, goalId] as const,
  doneGoal: (childId: ChildId, goalId: number) => [...keys.all, 'doneGoal', childId, goalId] as const,
  undoneGoal: (childId: ChildId, goalId: number) => [...keys.all, 'undoneGoal', childId, goalId] as const,
};
