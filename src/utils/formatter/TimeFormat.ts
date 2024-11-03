export const TimeFormat = () => {
  const now = new Date();
  const koreaTime = new Date(now.getTime() + 9 * 60 * 60 * 1000); // UTC 기준 9시간 더함

  const year = koreaTime.getFullYear();
  const month = String(koreaTime.getMonth() + 1).padStart(2, '0');
  const day = String(koreaTime.getDate()).padStart(2, '0');
  const hour = String(koreaTime.getHours()).padStart(2, '0');
  const minute = String(koreaTime.getMinutes()).padStart(2, '0');

  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const dayName = dayNames[koreaTime.getDay()];

  return `${month}월 ${day}일 (${dayName}) ${hour}:${minute}`;
};
