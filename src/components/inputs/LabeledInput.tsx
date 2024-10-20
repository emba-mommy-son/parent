import React from 'react';
import { Text, View } from 'react-native';

import Input, { InputContainerProps } from './Input';

type LabeledInputProps = InputContainerProps & {
  label: string;
  size?: 'fill' | 'hug';
  type?: 'text' | 'password' | 'email';
};

const LabeledInput = ({ label, size = 'fill', type = 'text', ...props }: LabeledInputProps) => {
  return (
    <View className={`${size === 'hug' ? 'max-w-sm' : 'w-full'}`}>
      <Text className="text-sm text-gray-500">{label}</Text>
      <Input {...props} type={type} placeholderTextColor="#aaaaaa" className="placeholder:text-base px-2" />
    </View>
  );
};

export default LabeledInput;
