import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import useAuth from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';

import {
  Menu,
  Orders,
  Profile,
  OrderDetails,
  Cart,
  Token,
  AddPayment,
  Auth,
  Payment,
  PaymentStatus,
} from './screens';

import ITabBar from './components/TabBar';
import MenuHeader from './components/MenuHeader';
import HeaderSkeleton from './components/HeaderSkeleton';

import { LeftArrow } from '../assets/icons';
import OrderDetails1 from './screens/OrderDetails1';

const PageHeader = ({ navigation, iconShow, title }) => {
  return (
    <HeaderSkeleton>
      <View style={styles.content}>
        {iconShow ? (
          <View style={styles.icon}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <LeftArrow />
            </TouchableOpacity>
          </View>
        ) : null}
        <Text style={styles.title}>{title}</Text>
      </View>
    </HeaderSkeleton>
  );
};

const TabsScreen = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator
      initialRouteName="Menu"
      tabBar={props => <ITabBar {...props} />}>
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
            <PageHeader
              title="Orders"
              iconShow={false}
              navigation={navigation}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation }) => (
            <PageHeader
              title="My Profile"
              iconShow={false}
              navigation={navigation}
            />
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
              <PageHeader
                title="Cart"
                navigation={navigation}
                iconShow={true}
              />
            ),
          }}
        />
        <RootStack.Screen
          name="OrderDetails"
          component={OrderDetails}
          options={{
            header: ({ navigation }) => (
              <PageHeader
                title="Order Details"
                navigation={navigation}
                iconShow={true}
              />
            ),
          }}
        />
        <RootStack.Screen
          name="OrderDetails1"
          component={OrderDetails1}
          options={{
            header: ({ navigation }) => (
              <PageHeader
                title="Order Details New"
                navigation={navigation}
                iconShow={true}
              />
            ),
          }}
        />
        <RootStack.Screen
          name="Token"
          component={Token}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="AddPayment"
          component={AddPayment}
          options={{
            header: ({ navigation }) => (
              <PageHeader
                title="Add Payment"
                navigation={navigation}
                iconShow={true}
              />
            ),
          }}
        />
        <RootStack.Screen
          name="Payment"
          component={Payment}
          options={{
            header: ({ navigation }) => (
              <PageHeader
                title="Payment"
                navigation={navigation}
                iconShow={true}
              />
            ),
          }}
        />
        <RootStack.Screen
          name="PaymentStatus"
          component={PaymentStatus}
          options={{
            headerShown: false,
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

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuContent: {
    marginVertical: 12,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
  },
  greeting: {
    fontSize: 14,
    color: 'white',
    opacity: 0.5,
    // fontWeight: 700,
  },
});
