import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import useAuth from '../contexts/AuthContext';
import LoginImg from '../../assets/images/LoginImg.png';
import { GoogleLogo } from '../../assets/icons';

const Auth = () => {
  const { signIn } = useAuth();
  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={LoginImg}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.text2}>e</Text>
            <Text style={styles.text}>Canteen</Text>
          </ImageBackground>
        </View>

        <View style={styles.container1}>
          <View style={styles.container2}>
            <View style={styles.lgsview}>
              <Text style={styles.lgstext}>Let’s Get Started</Text>
              <Text style={styles.logintext}>
                Login/Signup with your Google Account
              </Text>
            </View>
            <TouchableOpacity
              style={styles.logintouchable}
              onPress={async () => await signIn()}>
              <GoogleLogo />
              <Text style={styles.googletext}>Login With Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2: {
    color: 'yellow',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container1: { flex: 1, backgroundColor: 'white' },
  container2: { marginHorizontal: 16, marginVertical: 15 },
  lgsview: { marginBottom: 50 },
  lgstext: { fontSize: 24, fontWeight: '700', color: 'black' },
  logintext: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    opacity: 0.5,
  },
  logintouchable: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  googletext: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 10,
  },
});

export default Auth;
