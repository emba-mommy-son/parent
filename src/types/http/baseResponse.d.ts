interface BaseResponse<T> {
  success: boolean;
  status: number;
  message: string;
  data: T;
}

type ErrorMessage = any;

interface ErrorResponse {
  success: boolean;
  status: number;
  message: string;
  errors: ErrorMessage[];
}
