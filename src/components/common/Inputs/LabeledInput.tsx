import { View, Text } from 'react-native';
import React from 'react';
import Input, { InputContainerProps } from './Input';

type LabeledInputProps = InputContainerProps & { label: string };

const LabeledInput = ({ label, ...props }: LabeledInputProps) => {
  return (
    <View>
      <Text className="text-sm text-gray-300">{label}</Text>
      <Input {...props} />
    </View>
  );
};

export default LabeledInput;
