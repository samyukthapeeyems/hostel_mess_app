import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import useAuth from './contexts/AuthContext';

import { View, TouchableOpacity, Platform } from 'react-native';

import Auth from './screens/Auth';
import Orders from './screens/Orders';
import OrderDetails from './screens/OrderDetails';
import Profile from './screens/Profile';
// import Home from './screens/Home'
import { MenuIcon, OrdersIcon, ProfileIcon } from '../assets/icons';

const OrdersStack = createStackNavigator();
const AuthStack = createStackNavigator();
const MenuStack = createStackNavigator();

import { Menu, Cart } from '../screens';
const MenuStackScreen = () => {
  return (
    <MenuStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <MenuStack.Screen name="Home" component={Menu} />
      <MenuStack.Screen name="Cart" component={Cart} />
    </MenuStack.Navigator>
  );
};

const OrdersStackScreen = () => (
  <OrdersStack.Navigator
    initialRouteName="Orders"
    screenOptions={{ headerShown: false }}>
    <OrdersStack.Screen name="Orders" component={Orders} />
    <OrdersStack.Screen name="OrderDetails" component={OrderDetails} />
  </OrdersStack.Navigator>
);

// custom tab bar
const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 75,
        paddingBottom: Platform.OS === 'ios' ? 25 : 0,
      }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        let icon = '';
        if (route.name == 'MenuStack') {
          icon = <MenuIcon />;
        } else if (route.name == 'OrdersStack') {
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

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
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
};

const Tab = createBottomTabNavigator();

export default Routes = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="MenuStack"
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="MenuStack" component={MenuStackScreen} />
        <Tab.Screen name="OrdersStack" component={OrdersStackScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName="Orders"
        screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Auth" component={Auth} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};
