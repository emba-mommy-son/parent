import { useState } from 'react';
import type { TextInputProps } from 'react-native';
import { View, TextInput } from 'react-native';
import clsx from 'clsx';
import DeleteButton from './DeleteButton';

type InputContainerBaseProps = TextInputProps & {
  isFocused?: boolean;
  isValid?: boolean;
};

interface InputContainerWithDeleteButtonProps {
  enableDeleteButton: true;
  handleDeleteText: () => void;
}

interface InputContainerWithoutDeleteButtonProps {
  enableDeleteButton?: false;
}

export type InputContainerProps = InputContainerBaseProps &
  (InputContainerWithDeleteButtonProps | InputContainerWithoutDeleteButtonProps);

const Input = (props: InputContainerProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputClasses = clsx(
    'border-b-2 text-2xl pb-1 z-10',
    {
      'border-primary': props.isValid || isFocused,
      'border-danger': props.isValid === false,
      'border-gray-200': !props.isValid && !isFocused,
    },
    'text-black',
  );

  return (
    <View className="relative">
      {/* 인풋 */}
      <TextInput
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={inputClasses}
        underlineColorAndroid="transparent"
      />
      {props.enableDeleteButton && !!props.value?.length && <DeleteButton onPress={() => props.handleDeleteText()} />}
    </View>
  );
};

export default Input;
