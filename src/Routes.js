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
  Wallet,
  AddPayment,
  Auth,
  Payment,
} from './screens';

import { COLORS } from './constants/theme';
import { LeftArrow } from '../assets/icons';

import MyTabBar from './components/MyTabBar';
import MenuHeader from './components/MenuHeader';
import HeaderSkeleton from './components/HeaderSkeleton';

const PageHeader = ({ navigation, iconShow, title }) => (
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
            <PageHeader title="Orders" iconShow={false} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation }) => (
            <PageHeader title="My Profile" iconShow={false} />
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
          name="Token"
          component={Token}
          options={{
            header: ({ navigation }) => (
              <PageHeader
                title="Token"
                navigation={navigation}
                iconShow={true}
              />
            ),
          }}
        />
        <RootStack.Screen
          name="Wallet"
          component={Wallet}
          options={{
            header: ({ navigation }) => (
              <PageHeader
                title="Wallet"
                navigation={navigation}
                iconShow={true}
              />
            ),
          }}
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
  textContainer: {
    // flex: 1,
    width: '100%',
    backgroundColor: 'brown',
  },
  imgContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  greeting: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    opacity: 0.5,
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  img: {
    width: 42,
    height: 42,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.yellow,
  },
  headerContainer: {
    backgroundColor: COLORS.blue,
    paddingVertical: 18,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  content: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    marginRight: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
});
