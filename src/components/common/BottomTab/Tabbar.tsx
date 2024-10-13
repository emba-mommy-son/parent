import { View, Text, Pressable } from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import LocationIcon from 'react-native-vector-icons/FontAwesome6';
import AnalysysIcon from 'react-native-vector-icons/FontAwesome6';
import SettingIcon from 'react-native-vector-icons/Ionicons';
import TabChildButton from './TabChildButton';
import { useChildModalStore } from '@/zustand/useChildModalStore';
import ChildrenModalEvalArea from './ChildrenModalEvalArea';
import ChildrenModalBackground from './ChildrenModalBackground';
import sampleImg from '@/assets/images/sample_img2.png';

const TabBar = ({ state, descriptors, navigation }: { state: any; descriptors: any; navigation: any }) => {
  const { isModalVisible, toggleModal } = useChildModalStore();

  const iconFlex = 'items-center justify-end gap-0.5';

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
                  <View className={iconFlex}>
                    <HomeIcon name="home" size={26} color={isFocused ? '#000000' : '#ADB5BD'} />
                    <Text className={`text-xs font-bold ${isFocused ? 'text-my_black' : 'text-my_gray_2'}`}>
                      {options.title}
                    </Text>
                  </View>
                );
              case 'Location':
                return (
                  <View className={`${iconFlex} mr-10`}>
                    <LocationIcon name="location-dot" size={22} color={isFocused ? '#000000' : '#ADB5BD'} />
                    <Text className={`text-xs font-bold ${isFocused ? 'text-my_black' : 'text-my_gray_2'}`}>
                      {options.title}
                    </Text>
                  </View>
                );
              case 'Analysys':
                return (
                  <View className={`${iconFlex} ml-10`}>
                    <AnalysysIcon name="magnifying-glass-chart" size={21} color={isFocused ? '#000000' : '#ADB5BD'} />
                    <Text className={`text-xs font-bold ${isFocused ? 'text-my_black' : 'text-my_gray_2'}`}>
                      {options.title}
                    </Text>
                  </View>
                );
              case 'Setting':
                return (
                  <View className={iconFlex}>
                    <SettingIcon name="settings-sharp" size={23} color={isFocused ? '#000000' : '#ADB5BD'} />
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
              className="flex-1 items-center justify-center pb-2.5">
              {getIcon(route.name)}
            </Pressable>
          );
        })}
      </View>
    </>
  );
};

export default TabBar;
