import { MenuIcon, OrdersIcon, ProfileIcon } from '../../assets/icons';
import { View,TouchableOpacity } from 'react-native';
import React from 'react';
function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 75,
      }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        let icon = '';
        if (route.name === 'Menu') {
          icon = <MenuIcon />;
        } else if (route.name === 'Orders') {
          icon = <OrdersIcon />;
        } else {
          icon = <ProfileIcon />;
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={index}
            style={{
              flex: 1,
              opacity: isFocused ? 1 : 0.4,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View>{icon}</View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;
