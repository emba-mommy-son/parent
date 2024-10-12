import { View, Text, ScrollView, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../types/navigation';
import LabeledInput from '../../components/common/Inputs/LabeledInput';
import ScreenContainer from '../../components/common/ScreenContainer';
import Button from '../../components/common/buttons/Button';
import DeleteButton from '../../components/common/Inputs/DeleteButton';
import Input from '../../components/common/Inputs/Input';

type HomeScreenProp = BottomTabNavigationProp<RootTabParamList>;

const HomeScreen = ({ navigation }: { navigation: HomeScreenProp }) => {
  const arr = Array.from({ length: 100 }, (_, index) => index);
  const [val, setVal] = useState('');

  const handleDeleteText = () => {
    setVal('');
  };

  return (
    <ScreenContainer>
      <Input
        className="items-center justify-center"
        enableDeleteButton={true}
        handleDeleteText={handleDeleteText}
        value={val}
        onChangeText={setVal}
      />
    </ScreenContainer>
  );
};

export default HomeScreen;
