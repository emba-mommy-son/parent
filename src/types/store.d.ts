interface ChildModalStore {
  isModalVisible: boolean;
  toggleModal: () => void;
}

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

type RootState = ChildModalSlice & AuthSlice;
