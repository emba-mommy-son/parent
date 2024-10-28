/**
 * 로그인 응답 DTO
 */
interface GetSignInResponseDto {
  accessToken: AccessToken;
  refreshToken: RefreshToken;
}

/**
 * 토큰 재발급 응답 DTO
 */
interface GetRefreshTokenResponseDto {
  refreshToken: NewRefreshToken;
  accessToken: NewAccessToken;
}

/**
 * 자녀 감정 단건 조회 응답 DTO
 */
interface GetEachEmotionReportDto {
  analysisId: number;
  createAt: DateString;
  totalConversations: number;
  totalAnalyzedMessages: number;
  positive: number;
  negative: number;
  neutral: number;
  emotionalIntensity: number;
  friendshipPercent: number;
  surprisePercentage: number;
  delightPercentage: number;
  horrorPercentage: number;
  aversionPercentage: number;
  sorrowPercentage: number;
  angerPercentage: number;
  surpriseCount: number;
  delightCount: number;
  horrorCount: number;
  aversionCount: number;
  sorrowCount: number;
  angerCount: number;
}

/** 자녀의 7일간 스트레스 강도 응답 DTO */
interface GetStressWhileSevenDaysDto {
  startDate: DateString;
  endDate: DateString;
  stressLevels: DayStressDto[];
}

/** 자녀 한 달 간 감정 정보 응답 DTO */
// interface GetMonthEmotionReportDto {}

/**
 * 자녀 위치 조회 응답 DTO (임시)
 */
interface GetChildLocationResponseDto {
  lat: Lat;
  lng: Lng;
}
