import { useState } from 'react';
import Colors from '../../../constants/Colors';
import { View, Text, Pressable } from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import LocationIcon from 'react-native-vector-icons/FontAwesome6';
import AnalysysIcon from 'react-native-vector-icons/FontAwesome6';
import SettingIcon from 'react-native-vector-icons/Ionicons';
import TabChildButton from './TabChildButton';
import { useChildModalStore } from '../../../zustand/useChildModalStore';
import ChildrenModalEvalArea from './ChildrenModalEvalArea';
import ChildrenModalBackground from './ChildrenModalBackground';
import sampleImg from '../../../assets/images/sample_img.png';

const TabBar = ({ state, descriptors, navigation }: { state: any; descriptors: any; navigation: any }) => {
  const { isModalVisible, toggleModal } = useChildModalStore();

  return (
    <>
      {/* 프로필 버튼 */}
      <TabChildButton img={sampleImg} onPressHandler={toggleModal} />
      {isModalVisible && <ChildrenModalEvalArea />}

      {/* 모달 */}
      {isModalVisible && (
        <View className="absolute w-full h-full">
          <ChildrenModalBackground />
        </View>
      )}

      {/* 탭 버튼 부분 */}
      <View className="flex-row bg-gray-50 h-16 elevation-10 z-10">
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            if (isModalVisible) {
              toggleModal();
            }

            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const getIcon = (routeName: string) => {
            switch (routeName) {
              case 'Home':
                return (
                  <View className="items-center justify-end gap-1">
                    <HomeIcon name="home" size={29} color={isFocused ? Colors.BLACK : Colors.GRAY[2]} />
                    <Text className={`text-xs font-bold ${isFocused ? 'text-my_black' : 'text-my_gray_2'}`}>
                      {options.title}
                    </Text>
                  </View>
                );
              case 'Location':
                return (
                  <View className="items-center justify-end gap-1.5 mr-10">
                    <LocationIcon name="location-dot" size={26} color={isFocused ? Colors.BLACK : Colors.GRAY[2]} />
                    <Text className={`text-xs font-bold ${isFocused ? 'text-my_black' : 'text-my_gray_2'}`}>
                      {options.title}
                    </Text>
                  </View>
                );
              case 'Analysys':
                return (
                  <View className="items-center justify-end gap-1.5 ml-10">
                    <AnalysysIcon
                      name="magnifying-glass-chart"
                      size={26}
                      color={isFocused ? Colors.BLACK : Colors.GRAY[2]}
                    />
                    <Text className={`text-xs font-bold ${isFocused ? 'text-my_black' : 'text-my_gray_2'}`}>
                      {options.title}
                    </Text>
                  </View>
                );
              case 'Setting':
                return (
                  <View className="items-center justify-end gap-1.5">
                    <SettingIcon name="settings-sharp" size={30} color={isFocused ? Colors.BLACK : Colors.GRAY[2]} />
                    <Text className={`text-xs font-bold ${isFocused ? 'text-my_black' : 'text-my_gray_2'}`}>
                      {options.title}
                    </Text>
                  </View>
                );
              default:
                return null;
            }
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              onLongPress={onLongPress}
              className="flex-1 items-center justify-center">
              {getIcon(route.name)}
            </Pressable>
          );
        })}
      </View>
    </>
  );
};

export default TabBar;
