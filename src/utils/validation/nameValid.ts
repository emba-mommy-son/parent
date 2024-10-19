import { Alert } from 'react-native';

/**
 * 이름 형식 검사
 * @param name 이름
 * @returns 이름 형식 검사 결과
 */
export const nameValid = (name: string) => {
  const nameRegex = /^[가-힣]{2,}$/;

  if (!nameRegex.test(name)) {
    Alert.alert('이름은 한글로 2자 이상이어야 합니다.');
    return false;
  }

  return true;
};
