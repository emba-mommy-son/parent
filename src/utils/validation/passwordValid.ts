import { Alert } from 'react-native';

/**
 * 비밀번호 형식 검사
 * @param password 비밀번호
 * @returns 비밀번호 형식 검사 결과
 */
export const passwordValid = (password: string) => {
  if (password.length < 8) {
    Alert.alert('비밀번호는 8자 이상이어야 합니다.');
    return false;
  }
  return true;
};

/**
 * 비밀번호 확인 형식 검사
 * @param passwordConfirm 비밀번호 확인
 * @param password 비밀번호
 * @returns 비밀번호 확인 형식 검사 결과
 */
export const passwordConfirmValid = (passwordConfirm: string, password: string) => {
  if (passwordConfirm !== password) {
    Alert.alert('비밀번호가 일치하지 않습니다.');
    return false;
  }
  return true;
};
