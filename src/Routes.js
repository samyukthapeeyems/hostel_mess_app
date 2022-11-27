import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import useAuth from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import React from 'react';

import {
  Menu,
  Orders,
  Profile,
  OrderDetails,
  Cart,
  Token,
  Wallet,
  AddPayment,
  Auth,
} from './screens';

import MyTabBar from './components/MyTabBar';
import MenuHeader from './components/MenuHeader';
import Header from './components/Header';
const TabsScreen = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      initialRouteName="Menu"
      tabBar={props => <MyTabBar {...props} />}>
      <Tabs.Screen
        name="Menu"
        component={Menu}
        options={{ header: MenuHeader }}
      />

      <Tabs.Screen
        name="Orders"
        component={Orders}
        options={{
          header: ({ navigation }) => (
            <Header title="Orders" iconShow={false} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation }) => (
            <Header title="My Profile" iconShow={false} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const RootStackScreen = () => {
  const RootStack = createStackNavigator();

  return (
    <CartProvider>
      <RootStack.Navigator>
        <RootStack.Screen
          name="TabsScreen"
          component={TabsScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Cart"
          component={Cart}
          options={{
            header: ({ navigation }) => (
              <Header title="Cart" navigation={navigation} iconShow={true} />
            ),
          }}
        />
        <RootStack.Screen
          name="OrderDetails"
          component={OrderDetails}
          options={{
            header: ({ navigation }) => (
              <Header
                title="OrderDetails"
                navigation={navigation}
                iconShow={true}
              />
            ),
          }}
        />
        <RootStack.Screen
          name="Token"
          component={Token}
          options={{
            header: ({ navigation }) => (
              <Header title="Token" navigation={navigation} iconShow={true} />
            ),
          }}
        />
        <RootStack.Screen
          name="Wallet"
          component={Wallet}
          options={{
            header: ({ navigation }) => (
              <Header title="Wallet" navigation={navigation} iconShow={true} />
            ),
          }}
        />
        <RootStack.Screen
          name="AddPayment"
          component={AddPayment}
          options={{
            header: ({ navigation }) => (
              <Header
                title="Add Payment"
                navigation={navigation}
                iconShow={true}
              />
            ),
          }}
        />
      </RootStack.Navigator>
    </CartProvider>
  );
};

export default function Routes() {
  const { isAuthenticated } = useAuth();
  const AuthStack = createStackNavigator();

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
}
