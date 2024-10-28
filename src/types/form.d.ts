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

interface ReconnectForm {
  fcmToken: Token;
  childId: ChildId;
}

interface EachEmotionForm {
  childId: ChildId;
  dateTime: DateString;
}

interface MonthEmotionForm {
  childId: ChildId;
  year: year;
  month: month;
}
