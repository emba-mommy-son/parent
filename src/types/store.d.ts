interface AuthSlice {
  accessToken: Token | null;
  refreshToken: Token | null;
  setAccessToken: (token: Token) => void;
  setRefreshToken: (token: Token) => void;
  clearToken: () => void;
}

interface ChildModalSlice {
  isModalVisible: boolean;
  toggleModal: () => void;
}

interface ChildSlice {
  nowSelectedChild: GetConnectedChildDto | null;
  setNowSelectedChild: (child: GetConnectedChildDto) => void;
  children: GetConnectedChildDto[];
  setChildren: (children: GetConnectedChildDto[]) => void;
}

interface AnalysisSlice {
  selectedDate: DateString;
  setSelectedDate: (date: DateString) => void;
}

export type RegistChild = {
  name: Name;
  phoneNumber: PhoneNumber;
  relationShip: RelationShip;
};
interface RegisterSlice {
  registChildName: Name;
  registChildPhoneNumber: PhoneNumber;
  registChildRelation: RelationShip | '';
  setRegistChildName: (name: Name) => void;
  setRegistChildPhoneNumber: (phoneNumber: PhoneNumber) => void;
  setRegistChildRelation: (relationShip: RelationShip) => void;
}

interface SetGeofenceSlice extends SetGeofenceType {
  latitudeDelta: number;
  longitudeDelta: number;
  setLatitude: (latitude: Latitude) => void;
  setLongitude: (lngDelta: Longitude) => void;
  setLatitudeDelta: (latDelta: Latitude) => void;
  setLongitudeDelta: (longitude: Longitude) => void;
  setDanger: (isDanger: boolean) => void;
  setRadius: (radius: number) => void;
  setBoundaryName: (name: string) => void;
}

type RootState = ChildModalSlice & AuthSlice & ChildSlice & AnalysisSlice & RegisterSlice & SetGeofenceSlice;
