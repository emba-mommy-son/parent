export type RootStackParamList = {
  Init: undefined;
  RootTab: undefined;
  Login: undefined;
  Signup: undefined;
  RegisterInfo: undefined;
  RegisterQRcode: undefined;
  Alert: undefined;
  Todo: undefined;
  Chart: undefinded;
  ChildrenModalEvalArea: undefined;
  '보호 구역 등록 (1/3)': undefined;
  '이동 기록': undefined;
  '현재 위치': undefined;
  '보호구역 목록': undefined;
  '보호구역 등록(2/3) | 주소': undefined;
  '보호구역 등록(3/3) | 반경': undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Location: undefined;
  Analysys: undefined;
  Setting: undefined;
};

export type LocationScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'Location'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type LocationStackParamList = {
  LocationScreen: undefined;
};
