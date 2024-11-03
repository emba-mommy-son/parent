/**
 * 기본 타입
 */
type Day = number;
type month = number;
type year = number;
type DateString = string;

/** 감정 */
type Emotion = 'NEUTRAL' | 'NEGATIVE' | 'POSITIVE';

/**
 * 토큰
 */
type Token = string;
type AccessToken = Token;
type RefreshToken = Token;
type NewAccessToken = Token;
type NewRefreshToken = Token;
type FCMToken = Token;

/**
 * 자녀
 */
type ChildId = number;
type ChildName = Name;
type ProfileImage = string;
type ChildInfo = {
  childId: ChildId;
  name: ChildName;
  profileImage: ProfileImage;
};
type PhoneNumber = string;
type RelationShip = 'MOM' | 'DAD' | 'ETC';

/** 자녀 감정 타입 */
type EmotionDto = {
  date: DateString;
  emotion: Emotion;
};

/** 자녀 스트레스 타입 */
type DayStressDto = {
  date: DateString;
  intensity: number;
};

type UserId = string;
/**
 * 유저 아이디(이메일)
 */
type UserName = string;
type Name = string;
type PhoneNumber = string;
type Password = string;

/**
 * 자녀 위치 위경도 타입
 */
type Latitude = number;
type Longitude = number;

interface GeofenceDto {
  boundaryId: number;
  latitude: Latitude;
  longitude: Longitude;
  danger: boolean;
  radius: number;
  createdAt: string;
}

interface SetGeofenceType {
  latitude: Latitude;
  longitude: Longitude;
  danger: boolean;
  radius: number;
  boundaryName: string;
}
