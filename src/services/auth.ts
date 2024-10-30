import axios from '@/configs/axios';

export default {
  /**
   * 회원 가입
   */
  signUp: async (signupForm: SignUpForm) => {
    return axios.post<BaseResponse<void>>('/api/v1/auth/sign-up/parent', signupForm);
  },

  /**
   * 로그인
   */
  signIn: async (signInForm: SignInForm) => {
    return axios.post<BaseResponse<SignInResponseDto>>('/api/v1/auth/sign-in', signInForm);
  },

  /** 자녀 회원가입 */
  signUpChild: async (signUpChildForm: SignUpChildForm) => {
    return axios.post<BaseResponse<void>>('/api/v1/auth/sign-up/child', signUpChildForm);
  },

  /**
   * 토큰 리프레시
   */
  refreshToken: async (refreshToken: RefreshToken) => {
    return axios.post<BaseResponse<RefreshTokenResponseDto>>('/api/v1/auth/refresh', { refreshToken });
  },

  /**
   * 부모-자녀 리커넥트
   */
  reconnect: async ({ fcmToken, childId }: ReconnectForm) => {
    return axios.post<BaseResponse<void>>('/api/v1/auth/reconnect', { fcmToken, childId });
  },
};
