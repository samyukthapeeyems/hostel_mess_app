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
} from './screens';

import MyTabBar from './components/MyTabBar';

const Tabs = createBottomTabNavigator();

const TabsScreen = ({ navigation }) => {
  return (
    <Tabs.Navigator
      initialRouteName="Menu"
      // screenOptions={{ headerShown: false }}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tabs.Screen
        name="Menu"
        component={Menu}
        options={{ title: 'My home' }}
      />
      <Tabs.Screen name="Orders" component={Orders} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};
const AuthStack = createStackNavigator();

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <CartProvider>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="TabsScreen" component={TabsScreen} />
        <RootStack.Screen name="Cart" component={Cart} />
        <RootStack.Screen name="OrderDetails" component={OrderDetails} />
        <RootStack.Screen name="Token" component={Token} />
        <RootStack.Screen name="Wallet" component={Wallet} />
        <RootStack.Screen name="AddPayment" component={AddPayment} />
      </RootStack.Navigator>
    </CartProvider>
  );
};

export default function Routes() {
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
}
