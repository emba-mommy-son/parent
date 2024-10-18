// Request Dto => Form 타입으로 정의

interface SignUpForm {
  username: UserName;
  password: Password;
  name: Name;
  phoneNumber: PhoneNumber;
}

interface SignInForm {
  username: UserName;
  password: Password;
}
