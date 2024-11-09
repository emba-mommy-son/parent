import { Alert } from 'react-native';

/**
 * 전화번호 형식 변경
 * @param phone 전화번호
 * @returns 변경된 전화번호
 */
export const phoneValid = (phone: string) => {
  // 최대 13자리로 제한 (숫자 11자리 + 하이픈 2개)
  if (!phone || phone.split('-').length !== 3 || phone.length !== 13) {
    Alert.alert('전화번호를 다시 입력해주세요.');
    return false;
  }
  return true;
};
