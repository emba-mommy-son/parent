import { View, Text } from 'react-native';
import React from 'react';
import ScreenContainer from '@/components/common/ScreenContainer';
import QRCode from 'react-native-qrcode-svg';

const AnalysysScreen = () => {
  const jsonData = {
    name: '도영아',
    message: 'qr하자',
  };

  return (
    <ScreenContainer barBgColor="white" bgColor="white" barStyle="dark-content" type="view">
      <Text>분석 페이지임 @@@@@@@@@@</Text>
      <QRCode value={JSON.stringify(jsonData)} size={200} />
    </ScreenContainer>
  );
};

export default AnalysysScreen;
