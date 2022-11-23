import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from './screens/Auth';
import useAuth from './contexts/AuthContext';

import {
  Menu,
  Orders,
  Profile,
  OrderDetails,
  Cart,
  Token,
  Wallet,
  AddPayment,
} from './screens';

import MyTabBar from './components/MyTabBar';

const Tabs = createBottomTabNavigator();

const TabsScreen = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Menu"
      screenOptions={{ headerShown: false }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tabs.Screen name="Menu" component={Menu} />
      <Tabs.Screen name="Orders" component={Orders} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};
const AuthStack = createStackNavigator();

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="TabsScreen" component={TabsScreen} />
      <RootStack.Screen name="Cart" component={Cart} />
      <RootStack.Screen name="OrderDetails" component={OrderDetails} />
      <RootStack.Screen name="Token" component={Token} />
      <RootStack.Screen name="Wallet" component={Wallet} />
      <RootStack.Screen name="AddPayment" component={AddPayment} />
    </RootStack.Navigator>
  );
};
const Routes = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  return isAuthenticated ? (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName="Auth"
        screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Auth" component={Auth} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
