import Button from '@/components/common/buttons/Button';
import React, { useState } from 'react';
import { View, Linking, Dimensions } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import FlashIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FlashOffIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ScanResult {
  type: string;
  data: string;
  rawData: string;
}

const RegisterQRcodeScreen = () => {
  const [scan, setScan] = useState(false);
  const [scanResult, setScanResult] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [onFlash, setOnFlash] = useState(false);

  const scanner = React.useRef('');

  const onSuccess = (e: any) => {
    const check = e.data.substring(0, 4);
    console.log('scanned data' + check);

    setResult(e);
    setScan(false);
    setScanResult(true);

    if (check === 'http') {
      Linking.openURL(e.data).catch(err => console.error('An error occured', err));
    } else {
      console.log('data', e.data);
      setResult(e);
      setScan(false);
      setScanResult(true);
    }
  };

  return (
    <View className="flex-1">
      <QRCodeScanner
        containerStyle={{ flex: 1 }}
        cameraStyle={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
        showMarker={true}
        customMarker={
          <View className="flex h-full w-full justify-center items-center">
            <View style={{ backgroundColor: 'rgba(82, 82, 82, 0.25)' }} className="h-1/4 w-full" />
            <View className="flex flex-row justify-center items-center w-full h-1/3">
              <View style={{ backgroundColor: 'rgba(82, 82, 82, 0.25)' }} className="h-full w-1/6" />
              <View style={{ backgroundColor: 'transparent' }} className="h-full w-4/6"></View>
              <View style={{ backgroundColor: 'rgba(82, 82, 82, 0.25)' }} className="h-full w-1/6" />
            </View>
            <View style={{ backgroundColor: 'rgba(82, 82, 82, 0.25)' }} className="h-1/2 w-full p-16 flex">
              <Button
                myButtonStyle="mb-2 bg-gray-300"
                type="secondary"
                myTextStyle="text-white"
                onPress={() => setOnFlash(!onFlash)}>
                {onFlash ? (
                  <FlashOffIcon name="flash-off" size={24} color="black" />
                ) : (
                  <FlashIcon name="flash" size={24} color="black" />
                )}
              </Button>
              <Button type="secondary" className="" myTextStyle="text-white">
                다시 촬영
              </Button>
            </View>
          </View>
        }
        ref={node => {
          if (node) {
            scanner.current = node as unknown as string;
          }
        }}
        onRead={onSuccess}
      />
    </View>
  );
};

export default RegisterQRcodeScreen;
