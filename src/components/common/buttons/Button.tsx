import { Pressable, PressableProps, Text, View } from 'react-native';
import clsx from 'clsx'; // 조건부 클래스 적용을 위해 사용

type ButtonSize = 'fill' | 'hug' | number;
type ButtonType = 'primary' | 'outlined';

interface ButtonContainerProps {
  size: ButtonSize;
  type: ButtonType;
  disabled?: boolean;
  buttonStyle?: string;
  textStyle?: string;
}

type ButtonProps = PressableProps & Partial<ButtonContainerProps>;

const Button = ({
  children,
  size = 'fill',
  type = 'primary',
  buttonStyle,
  textStyle,
  disabled = false,
  ...props
}: ButtonProps) => {
  const BtnContainerBaseStyle = 'flex justify-center items-center text-lg rounded-lg';
  const BtnContainerSizeStyle = size === 'fill' ? 'w-full' : 'w-auto px-4';
  const BtnContainerTypeStyle = {
    primary: disabled ? 'bg-my_gray_3' : 'bg-my_primary',
    outlined: disabled ? 'border border-my_gray_3' : 'border border-my_primary',
  }[type];

  const BtnTextTypeStyle = `${
    {
      primary: 'text-my_white',
      outlined: disabled ? 'text-my_gray_3' : 'text-my_primary',
    }[type]
  } text-lg`;

  return (
    <Pressable {...props} style={({ pressed }) => ({ opacity: pressed && !disabled ? 0.7 : 1 })} disabled={disabled}>
      <View className={clsx(BtnContainerSizeStyle, BtnContainerBaseStyle, BtnContainerTypeStyle, buttonStyle)}>
        <Text className={clsx(BtnTextTypeStyle, textStyle)}>{children as string}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
