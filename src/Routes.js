import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import useAuth from "./contexts/AuthContext";
import {CartProvider} from "./contexts/CartContext";

import Auth from './screens/Auth'
import Orders from './screens/Orders'
import OrderDetails from './screens/OrderDetails'
import Profile from './screens/Profile'
import Home from './screens/Home'



const OrdersStack = createStackNavigator();
const AuthStack = createStackNavigator();

const OrdersStackScreen = () => (
  <OrdersStack.Navigator initialRouteName="Orders" screenOptions={{ headerShown: false }}>
    <OrdersStack.Screen name="Orders" component={Orders} />
    <OrdersStack.Screen name="OrderDetails" component={OrderDetails}
    />
  </OrdersStack.Navigator>
);

const Tab = createBottomTabNavigator();

export default Routes = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          <Tab.Screen name="Home" component={Home} />
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