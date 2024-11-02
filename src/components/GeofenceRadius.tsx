import Slider from '@react-native-community/slider';
import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

interface GeofenceRadiusProps {
  initialRadius?: number;
  minRadius?: number;
  maxRadius?: number;
  onRadiusChange: (radius: number) => void;
}

const GeofenceRadius = ({
  initialRadius = 50,
  minRadius = 10,
  maxRadius = 200,
  onRadiusChange,
}: GeofenceRadiusProps) => {
  const [radius, setRadius] = useState(initialRadius);

  useEffect(() => {
    onRadiusChange(radius);
  }, [radius]);

  // 주요 반경 값 프리셋
  const radiusPresets = [50, 100, 150];

  const handlePresetPress = (value: number) => {
    setRadius(value);
  };

  return (
    <View className="bg-white p-4 mx-4 rounded-xl">
      {/* 반경 설정 헤더 */}
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-base font-medium">반경 설정</Text>
        <Text className="text-base font-semibold text-[rgba(0,0,0,0.6)]">{Math.round(radius)}m</Text>
      </View>

      {/* 슬라이더 */}
      <View className="mb-4">
        <Slider
          value={radius}
          minimumValue={minRadius}
          maximumValue={maxRadius}
          onValueChange={setRadius}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="rgba(0,0,0,0.2)"
          thumbTintColor="#000000"
          className="w-full h-10"
        />
        {/* 최소/최대값 표시 */}
        <View className="flex-row justify-between px-1">
          <Text className="text-xs text-gray-500">{minRadius}m</Text>
          <Text className="text-xs text-gray-500">{maxRadius}m</Text>
        </View>
      </View>

      {/* 빠른 선택 버튼들 */}
      <View className="flex-row justify-between mt-2">
        {radiusPresets.map(preset => (
          <Pressable
            key={preset}
            onPress={() => handlePresetPress(preset)}
            className={`
              flex-1 py-2 mx-1 rounded-lg border
              ${radius === preset ? 'bg-gray-900 border-gray-900' : 'bg-white border-gray-300'}
            `}>
            <Text
              className={`
                text-center text-sm
                ${radius === preset ? 'text-white' : 'text-gray-600'}
              `}>
              {preset}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default GeofenceRadius;
