interface AuthSlice {
  accessToken: string;
  refreshToken: string;
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  clearToken: () => void;
}

interface ChildModalSlice {
  isModalVisible: boolean;
  toggleModal: () => void;
}

interface ChildSlice {
  nowSelectedChild: ChildInfo;
  setNowSelectedChild: (child: ChildInfo) => void;
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

type RootState = ChildModalSlice & AuthSlice & ChildSlice & AnalysisSlice & RegisterSlice;
