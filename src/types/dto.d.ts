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
  refreshToken: RefreshToken;
}
