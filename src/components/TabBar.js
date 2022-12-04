import { MenuIcon, OrdersIcon, ProfileIcon } from '../../assets/icons';
import { View, TouchableOpacity, StyleSheet } from 'react-native';


export default function TabBar({ state, descriptors, navigation }) {
  return (

    <View style={styles.container}>
      {
        state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          let icon = (route.name === 'Menu') ? <MenuIcon /> : (route.name === 'Orders') ? <OrdersIcon /> : <ProfileIcon />;
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
              style={styles.tabButton}>
              <View>{icon}</View>
            </TouchableOpacity>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 75,
  },
  tabButton: {
    flex: 1,
    opacity: isFocused ? 1 : 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
