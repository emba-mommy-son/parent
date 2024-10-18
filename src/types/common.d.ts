/**
 * 토큰
 */
type Token = string;
type AccessToken = Token;
type RefreshToken = Token;
type NewAccessToken = Token;
type NewRefreshToken = Token;

/**
 * 유저
 */
type UserId = string;
type UserName = string;
type Name = string;
type PhoneNumber = string;
type Password = string;

/**
 * 권한(임시)
 */
type Role = 'PARENT' | 'CHILD'; // 부모, 자녀
