import { Text, View, Button, SafeAreaView } from 'react-native';
import useAuth from '../contexts/AuthContext';
import React from 'react';

const Auth = () => {
  const { signIn } = useAuth();
  return (
    <SafeAreaView>
      <Button title="Google Sign-In" onPress={async () => await signIn()} />
    </SafeAreaView>
  );
};

export default Auth;
