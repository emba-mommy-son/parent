import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, View } from 'react-native';
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
      console.log('여기 : ', data);
      // if (data.data.message !== 'OK') {
      //   // 응답으로 ok 메시지가 아니면 오류로 간주
      //   throw new Error('QR인식 실패');
      // }
      Alert.alert('자녀가 등록되었습니다.');
      navigation.navigate('RootTab');
    },
    onError: error => {
      Alert.alert('자녀 등록 실패');
      console.error(error.message);
      console.log('first');
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
    console.log('qr에서 넘어오는 데이터 : ', e.data);
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
        customMarker={
          <View className="flex h-full w-full justify-center items-center">
            <View style={{ backgroundColor: 'rgba(82, 82, 82, 0.25)' }} className="h-1/4 w-full" />
            <View className="flex flex-row justify-center items-center w-full h-1/3">
              <View style={{ backgroundColor: 'rgba(82, 82, 82, 0.25)' }} className="h-full w-1/6" />
              <View style={{ backgroundColor: 'transparent' }} className="h-full w-4/6"></View>
              <View style={{ backgroundColor: 'rgba(82, 82, 82, 0.25)' }} className="h-full w-1/6" />
            </View>
            <View style={{ backgroundColor: 'rgba(82, 82, 82, 0.25)' }} className="h-1/2 w-full p-16 flex">
              {/* <Button
                myButtonStyle="mb-2 bg-gray-300"
                type="secondary"
                myTextStyle="text-white"
                onPress={() => setOnFlash(!onFlash)}>
                {onFlash ? (
                  <FlashOffIcon name="flash-off" size={24} color="black" />
                ) : (
                  <FlashIcon name="flash" size={24} color="black" />
                )}
              </Button> */}
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
