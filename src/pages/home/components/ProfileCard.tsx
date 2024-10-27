import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation';
import BellIcon from 'react-native-vector-icons/Octicons';

const ProfileCard = () => {
  const isLogin = true;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const noData = {
    name: '등록된 자녀가 없습니다',
    alert: false,
  };

  const data = isLogin
    ? {
        name: '김도영',
        alert: true,
      }
    : null;

  const displayData = data || noData;

  return (
    <View className="w-full h-[176px] bg-my_secondary pt-10 rounded-b-3xl z-0" style={[styles.shadow]}>
      <View className="flex flex-row items-center justify-between pl-5 pr-6">
        <Text className="text-white font-semibold text-xl">{displayData.name}</Text>
        <View className="flex flex-row">
          {displayData.alert && (
            <Text className="text-my_primary bg-white rounded-lg rounded-br-none px-3 pb-1 mr-1.5">
              새로운 정보가 있습니다
            </Text>
          )}
          <TouchableOpacity className="relative" onPress={() => navigation.navigate('Alert')}>
            <BellIcon name="bell" size={22} color="#ffffff" />
            {displayData.alert && (
              <View className="absolute top-[-8px] right-[-10px] bg-my_primary flex items-center justify-center rounded-full w-5 h-5">
                <Text className="text-white mt-[-0.5px]">4</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    zIndex: 0,
  },
});

export default ProfileCard;
