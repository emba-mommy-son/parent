import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

// import FlashIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import FlashOffIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '@/components/buttons/Button';
import auth from '@/services/auth';
import { RootStackParamList } from '@/types/navigation';
import useRootStore from '@/zustand';

type RegisterQRcodeScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'RegisterQRcode'>['navigation'];

const RegisterQRcodeScreen = ({ navigation }: { navigation: RegisterQRcodeScreenNavigationProp }) => {
  const { registChildName, registChildPhoneNumber, registChildRelation } = useRootStore();
  const [isLoading, setIsLoading] = useState(false); // 로딩 처리 할거면 살려두기
  const [scanResult, setScanResult] = useState(false);

  const { mutate: signUpChild } = useMutation({
    mutationFn: auth.signUpChild,
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: data => {
      Alert.alert('자녀가 등록되었습니다.');
      navigation.navigate('RootTab');
    },
    onError: error => {
      Alert.alert('자녀 등록 실패');
      console.error(error.message);
    },
    onSettled: () => {
      setIsLoading(false);
      setScanResult(false); // 다시 스캔 가능하도록 설정
    },
  });

  const scanner = React.useRef<QRCodeScanner | null>(null);

  const onQRSuccess = (e: any) => {
    if (scanResult) {
      return;
    }

    if (!e.data || e.data === '') {
      Alert.alert('QR인식 오류', 'QR코드를 다시 인식해주세요.');
      return;
    }

    setScanResult(true);
    // 넘어오는 토큰 따라서 수정해야 함
    const fcmToken = e.data;
    signUpChild({
      name: registChildName,
      phoneNumber: registChildPhoneNumber,
      relationShip: registChildRelation,
      fcmToken,
    });
  };

  const handleReset = () => {
    setScanResult(false);
    scanner.current?.reactivate(); // 스캐너 다시 활성화
  };

  return (
    <View className="flex-1">
      <QRCodeScanner
        containerStyle={{ flex: 1 }}
        cameraStyle={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
        showMarker={true}
        reactivate={!scanResult}
        cameraProps={{
          captureAudio: false, // 오디오 캡처 비활성화로 성능 향상
          pictureSize: '1920x1080', // 해상도를 높이기 위한 설정
          autoFocus: RNCamera.Constants.AutoFocus.on, // 자동 초점 활성화
          focusDepth: 0, // 초점 깊이 (0: 가장 가까운 거리)
          whiteBalance: RNCamera.Constants.WhiteBalance.auto, // 자동 화이트밸런스
        }}
        // 리프레시 간격 최적화
        reactivateTimeout={3000}
        // 진동 피드백
        vibrate={true}
        // 스캔 영역 설정
        fadeIn={true}
        cameraTimeout={0} // 타임아웃 없음
        customMarker={
          <View className="flex h-full w-full justify-center items-center">
            <View style={{ backgroundColor: 'rgba(82, 82, 82, 0.25)' }} className="h-1/4 w-full" />
            <View className="flex flex-row justify-center items-center w-full h-1/3">
              <View style={{ backgroundColor: 'rgba(82, 82, 82, 0.25)' }} className="h-full w-1/6" />
              <View style={{ backgroundColor: 'transparent' }} className="h-full w-4/6"></View>
              <View style={{ backgroundColor: 'rgba(82, 82, 82, 0.25)' }} className="h-full w-1/6" />
            </View>
            <View style={{ backgroundColor: 'rgba(82, 82, 82, 0.25)' }} className="h-1/2 w-full p-16 flex">
              <Button onPress={handleReset} type="secondary" className="" myTextStyle="text-white">
                다시 촬영
              </Button>
            </View>
          </View>
        }
        onRead={onQRSuccess}
      />
    </View>
  );
};

export default RegisterQRcodeScreen;
