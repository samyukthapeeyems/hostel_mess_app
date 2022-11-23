
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import useAuth from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";


import { View, TouchableOpacity, Platform } from 'react-native';

import { MenuIcon, OrdersIcon, ProfileIcon } from '../assets/icons';


const OrdersStack = createStackNavigator();
const AuthStack = createStackNavigator();
const MenuStack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { Menu, Orders, Profile, Auth, Cart } from './screens';


const OrdersStackScreen = () => (
  <OrdersStack.Navigator
    initialRouteName="Orders"
    screenOptions={{ headerShown: false }}>
    <OrdersStack.Screen name="Orders" component={Orders} />
    <OrdersStack.Screen name="Cart" component={Cart} />
    {/* <OrdersStack.Screen name="OrderDetails" component={OrderDetails}
    /> */}
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
        if (route.name == 'Menu') {
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


export default Routes = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (

    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Menu">
          <Tab.Screen name="Menu" component={Menu} />
          <Tab.Screen name="OrdersStack" component={OrdersStackScreen} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>

  ) : (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Auth" component={Auth} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};
