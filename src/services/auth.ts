import instance from '@/configs/axios';

export default {
  /**
   * 회원 가입
   */
  signUp: async (signupForm: SignUpForm) => {
    return instance.post<BaseResponse<void>>('/auth/sign-up/parent', signupForm);
  },

  /**
   * 로그인
   */
  signIn: async (signInForm: SignInForm) => {
    return instance.post<BaseResponse<SignInResponseDto>>('/auth/sign-in', signInForm);
  },

  /** 자녀 회원가입 */
  signUpChild: async (signUpChildForm: SignUpChildForm) => {
    // 관계를 relationship -> 소문자로 보내기 (나중에 수정할 것)
    const newObj = {
      ...signUpChildForm,
      relationship: signUpChildForm.relationShip,
    };
    return await instance.post<BaseResponse<any>>('/auth/sign-up/child', newObj);
  },

  /**
   * 토큰 리프레시
   */
  refreshToken: async (refreshToken: RefreshToken) => {
    return instance.post<BaseResponse<RefreshTokenResponseDto>>('/auth/refresh', { refreshToken });
  },

  /**
   * 부모-자녀 리커넥트
   */
  reconnect: async ({ fcmToken, childId }: ReconnectForm) => {
    return instance.post<BaseResponse<void>>('/auth/reconnect', { fcmToken, childId });
  },
};
