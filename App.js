import Router from './src/Routes';
import { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import useAuth from './src/contexts/AuthContext';
import { View, StyleSheet } from 'react-native';

const App = () => {
  const { setUser } = useAuth();


  async function handleUserEvents(user) {
    setUser(user);
  }

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@cart');
  //     if (value !== null) {
  //       return value;
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     throw new Error('unable to get cart data from async storage');
  //   }
  // };

  useEffect(() => {
    const subscriber = auth().onIdTokenChanged(handleUserEvents);
    return subscriber;
  }, []);

  return (
    <View style={styles.container}>
      <Router />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
