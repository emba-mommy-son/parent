/**
 * 전화번호 형식 변경
 * @param phone 전화번호
 * @returns 변경된 전화번호
 */
export const phoneFormat = (text: string) => {
  const phone = text.replace(/[^0-9]/g, '');

  // 숫자를 그룹으로 나누고 하이픈 추가
  let formattedPhone = '';
  if (phone.length <= 3) {
    formattedPhone = phone;
  } else if (phone.length <= 7) {
    formattedPhone = `${phone.slice(0, 3)}-${phone.slice(3)}`;
  } else {
    formattedPhone = `${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(7, 11)}`;
  }

  // 최대 13자리로 제한 (숫자 11자리 + 하이픈 2개)
  return formattedPhone.slice(0, 13);
};
