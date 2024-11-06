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

interface SignUpChildForm {
  name: Name;
  phoneNumber: PhoneNumber;
  relationShip: RelationShip | '';
  fcmToken: FCMToken;
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

interface BoundaryForm extends SetGeofenceType {
  childId: ChildId;
}

interface SummaryForm {
  childId: ChildId;
  year: year;
  month: month;
  day: Day;
}
