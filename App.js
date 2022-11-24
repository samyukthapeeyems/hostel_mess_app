import Router from './src/Routes';
import { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import useAuth from './src/contexts/AuthContext';
import { Platform, View, Text, StatusBar, StyleSheet } from 'react-native';


const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

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
      <View style={styles.content}>
        <Router />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});

export default App;
