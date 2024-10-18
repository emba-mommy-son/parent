import axios from '@/configs/axios';

export default {
  /**
   * 회원 가입
   * @param signupForm 회원가입 폼 데이터
   */
  signUp: async (signupForm: SignUpForm) => {
    return axios.post<SignUpRequest>('/api/v1/auth/sign-up/parent', signupForm);
  },

  /**
   * 로그인
   * @param loginForm 로그인 폼 데이터
   */
  signIn: async (signInForm: SignInForm) => {
    return axios.post<SignInRequest>('/api/v1/auth/sign-in', signInForm);
  },
};
