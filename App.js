import Router from './src/Routes';
import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import AuthProvider from './src/contexts/Auth';

export default App = () => {

  function onAuthStateChanged(user) {

    console.log(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <AuthProvider>
      <Router></Router>

    </AuthProvider>
  )
};