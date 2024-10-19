import React, { useState } from 'react';

import LabeledInput from '@/components/inputs/LabeledInput';
import ScreenContainer from '@/components/ScreenContainer';

const HomeScreen = () => {
  const arr = Array.from({ length: 100 }, (_, index) => index);
  const [val, setVal] = useState('여기는 텍스트입니다.');

  const handleDeleteText = () => {
    setVal('');
  };

  return (
    <ScreenContainer bgColor="white" barStyle="dark-content" barBgColor="black">
      {/* <Input enableDeleteButton={true} handleDeleteText={handleDeleteText} value={val} onChangeText={setVal} /> */}
      <LabeledInput
        label="여기는 라벨입니다."
        enableDeleteButton={true}
        handleDeleteText={handleDeleteText}
        value={val}
        onChangeText={setVal}
      />
    </ScreenContainer>
  );
};

export default HomeScreen;
