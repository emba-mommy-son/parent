/**
 * 로그인 응답 DTO
 */
interface SignInResponseDto {
  accessToken: AccessToken;
  refreshToken: RefreshToken;
}

/**
 * 토큰 재발급 응답 DTO
 */
interface RefreshTokenResponseDto {
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

/** 자녀 한 달 간 감정 정보 응답 DTO -> api 호출 함수에서 바로 바인딩함 */
// interface GetMonthEmotionReportDto {}

/**
 * 자녀 바운더리 조회 응답 DTO
 */
interface GetBoundaryResponseDto extends GeofenceDto {
  name: string;
}

interface GetChildLocationResponseDto extends ChildLocationType {}

/*
 * 자녀 목록 조회
 */
interface GetConnectedChildDto {
  id: number;
  username: string;
  name: string;
  fcmToken: string;
  phoneNumber: string;
  profileImage: string;
  reward: number;
}

/** 특정일 스트레스 지수 높은 방 요약 정보 */
interface GetSummaryReportDto {
  description: string;
  descriptionTag: string[];
}

// 알림 목록
interface notificationDto {
  id: number;
  notificationType: string;
  message: string;
  createdAt: string;
  read: boolean;
}
