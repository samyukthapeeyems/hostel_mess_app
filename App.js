import Router from './src/Routes';
import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import useAuth from './src/contexts/AuthContext';

export default App = () => {

  const { setUser } = useAuth();

  async function handleUserEvents(user) {
    setUser(user)
  }

  useEffect(() => {
    const subscriber = auth().onIdTokenChanged(handleUserEvents);
    return subscriber;
  }, []);

  return <Router />

};