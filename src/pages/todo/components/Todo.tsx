import React from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native';

import EntypoIcons from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface TodoListProps {
  id: number;
  content: string;
  done: boolean;
}

export const Todo = ({ id, content, done }: TodoListProps) => {
  const [isDone, setIsDone] = useState<boolean>(done);

  return (
    <View className="flex flex-row items-center justify-between">
      <View className="flex flex-row items-center space-x-3 my-1">
        {isDone ? (
          <MaterialCommunityIcons name="checkbox-marked" color="#ee5185" size={24} />
        ) : (
          <MaterialCommunityIcons name="checkbox-blank-outline" color="#D7D7D7" size={24} />
        )}
        <Text className="text-base text-black">{content}</Text>
      </View>

      <EntypoIcons name="cross" size={20} color={'#e0e0e0'} />
    </View>
  );
};
