import { Alert } from 'react-native';

/**
 * 이메일 형식 검사
 * @param email 이메일
 * @returns 이메일 형식 검사 결과
 */
export const emailValid = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Alert.alert('이메일 형식이 올바르지 않습니다.');
    return false;
  }
  return true;
};
