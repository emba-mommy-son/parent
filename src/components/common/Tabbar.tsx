import Colors from '../../constants/Colors';
import { View, Text, Pressable } from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import LocationIcon from 'react-native-vector-icons/FontAwesome6';
import AnalysysIcon from 'react-native-vector-icons/FontAwesome6';
import SettingIcon from 'react-native-vector-icons/Ionicons';

const TabBar = ({ state, descriptors, navigation }: { state: any; descriptors: any; navigation: any }) => {
  return (
    <View className="flex-row bg-gray-50 px-4 h-16 elevation-10">
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
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
                <>
                  <HomeIcon name="home" size={30} color={isFocused ? Colors.BLACK : Colors.GRAY[2]} />
                  <Text className={`text-xs font-bold ${isFocused ? 'text-my_black' : 'text-my_gray_2'}`}>
                    {options.title}
                  </Text>
                </>
              );
            case 'Location':
              return (
                <>
                  <LocationIcon name="location-dot" size={24} color={isFocused ? Colors.BLACK : Colors.GRAY[2]} />
                  <Text className={`text-xs font-bold ${isFocused ? 'text-my_black' : 'text-my_gray_2'}`}>
                    {options.title}
                  </Text>
                </>
              );
            case 'Analysys':
              return (
                <>
                  <AnalysysIcon
                    name="magnifying-glass-chart"
                    size={24}
                    color={isFocused ? Colors.BLACK : Colors.GRAY[2]}
                  />
                  <Text className={`text-xs font-bold ${isFocused ? 'text-my_black' : 'text-my_gray_2'}`}>
                    {options.title}
                  </Text>
                </>
              );
            case 'Setting':
              return (
                <>
                  <SettingIcon name="settings-sharp" size={30} color={isFocused ? Colors.BLACK : Colors.GRAY[2]} />
                  <Text className={`text-xs font-bold ${isFocused ? 'text-my_black' : 'text-my_gray_2'}`}>
                    {options.title}
                  </Text>
                </>
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
  );
};

export default TabBar;
