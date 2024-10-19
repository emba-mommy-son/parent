import React from 'react';
import { Text, View } from 'react-native';

import Input, { InputContainerProps } from './Input';

type LabeledInputProps = InputContainerProps & { label: string; size?: 'fill' | 'hug' };

const LabeledInput = ({ label, size = 'fill', ...props }: LabeledInputProps) => {
  return (
    <View className={`${size === 'hug' ? 'max-w-sm' : 'w-full'}`}>
      <Text className="text-sm text-gray-500">{label}</Text>
      <Input {...props} />
    </View>
  );
};

export default LabeledInput;
