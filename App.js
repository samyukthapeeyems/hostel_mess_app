import Router from './src/Routes';
import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import useAuth from './src/contexts/AuthContext';

import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './src/constants/theme';
import { Platform } from 'react-native';

export default App = () => {
  const { setUser } = useAuth();

  async function handleUserEvents(user) {
    setUser(user);
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@cart');
      if(value !== null) {
        return value;
      }
    } catch(e) {
      console.log(e);
      throw new Error("unable to get cart data from async storage");
    }
  }

  useEffect(() => {
    const subscriber = auth().onIdTokenChanged(handleUserEvents);
    

    return subscriber;

  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.blue,
        paddingTop: Platform.OS === 'android' ? 0 : 35,
      }}>
      <Router />
    </SafeAreaView>
  );
};
