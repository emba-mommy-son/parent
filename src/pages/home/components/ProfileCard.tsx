import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BellIcon from 'react-native-vector-icons/Octicons';

const ProfileCard = () => {
  const alert = true;

  return (
    <View className="w-full h-[176px] bg-my_secondary pt-10 rounded-b-3xl z-0" style={[styles.shadow]}>
      <View className="flex flex-row items-center justify-between pl-5 pr-6">
        <Text className="text-white font-semibold text-xl py-1">김도영</Text>
        <View className="flex flex-row">
          {alert && (
            <Text className="text-my_primary bg-white rounded-lg rounded-br-none px-3 pb-1 mr-1.5">
              새로운 정보가 있습니다
            </Text>
          )}
          <View className="relative">
            <BellIcon name="bell" size={22} color="#ffffff" />
            {alert && (
              <View className="absolute top-[-8px] right-[-10px] bg-my_primary flex items-center justify-center rounded-full w-5 h-5">
                <Text className="text-white mt-[-0.5px]">4</Text>
              </View>
            )}
          </View>
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
