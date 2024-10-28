import axios from '@/configs/axios';

export default {
  /**
   * 회원 가입
   */
  signUp: async (signupForm: SignUpForm) => {
    return axios.post<BaseResponse<null>>('/api/v1/auth/sign-up/parent', signupForm);
  },

  /**
   * 로그인
   */
  signIn: async (signInForm: SignInForm) => {
    return axios.post<BaseResponse<GetSignInResponseDto>>('/api/v1/auth/sign-in', signInForm);
  },

  /**
   * 토큰 리프레시
   */
  refreshToken: async (refreshToken: RefreshToken) => {
    return axios.post<BaseResponse<GetRefreshTokenResponseDto>>('/api/v1/auth/refresh', { refreshToken });
  },

  /**
   * 부모-자녀 리커넥트
   */
  reconnect: async ({ fcmToken, childId }: ReconnectForm) => {
    return axios.post<BaseResponse<null>>('/api/v1/auth/reconnect', { fcmToken, childId });
  },
};
