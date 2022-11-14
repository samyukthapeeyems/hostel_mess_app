import Router from './src/Routes';
import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import useAuth from './src/contexts/AuthContext';

export default App = () => {

  const { setUser } = useAuth();

  async function handleUserEvents(user) {
    setUser(user)
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

  return <Router />

};