interface MommysonResponse<T> {
  code: number;
  message: string;
  data: T;
}

type AccessToken = string;
type RefreshToken = string;
type Role = 'PARENT' | 'CHILD'; // 부모, 자녀
