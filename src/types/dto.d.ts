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
  refreshToken: RefreshToken;
}

/**
 * 자녀 위치 조회 응답 DTO (임시)
 */
interface GetChildLocationResponseDto {
  lat: Lat;
  lng: Lng;
}
