import React from 'react';
import clsx from 'clsx'; // 조건부 클래스 적용을 위해 사용
import { Pressable, PressableProps, Text, View } from 'react-native';

type ButtonSize = 'fill' | 'hug' | number;
type ButtonType = 'primary' | 'outlined' | 'secondary';

interface ButtonContainerProps {
  size: ButtonSize;
  type: ButtonType;
  disabled?: boolean;
  myButtonStyle?: string;
  myTextStyle?: string;
}

type ButtonProps = PressableProps & Partial<ButtonContainerProps>;

const Button = ({
  children,
  size = 'fill',
  type = 'secondary',
  myButtonStyle,
  myTextStyle,
  disabled = false,
  ...props
}: ButtonProps) => {
  const BtnContainerBaseStyle = 'flex justify-center items-center text-lg rounded-lg h-12';
  const BtnContainerSizeStyle = size === 'fill' ? 'w-full' : 'w-auto px-4';
  const BtnContainerTypeStyle = {
    primary: disabled ? 'bg-my_gray_3' : 'bg-my_primary',
    outlined: disabled ? 'border border-my_gray_3' : 'border border-my_primary',
    secondary: disabled ? 'bg-my_gray_3' : 'bg-my_secondary',
  }[type];

  const BtnTextTypeStyle = `${
    {
      primary: 'text-my_white',
      outlined: disabled ? 'text-my_gray_3' : 'text-my_primary',
      secondary: disabled ? 'text-my_gray_3' : 'text-my_white',
    }[type]
  } text-lg`;

  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        { opacity: pressed && !disabled ? 0.7 : 1 },
        { width: size === 'fill' ? '100%' : 'auto' }, // 직접 스타일로 너비 설정
      ]}
      disabled={disabled}>
      <View className={clsx(BtnContainerBaseStyle, BtnContainerTypeStyle, myButtonStyle)}>
        <Text className={clsx(BtnTextTypeStyle, myTextStyle)}>{children as string}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
