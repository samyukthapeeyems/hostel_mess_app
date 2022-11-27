import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SIZES, COLORS } from '../constants/theme';
import useAuth from '../contexts/AuthContext';

const Header = ({ navigation }) => {
  const { user } = useAuth();
  const [greeting, setGreeting] = useState('');

  const r = useRoute();

  useEffect(() => {
    let hrs = new Date().getHours();
    let message = (hrs >= 16) ? 'Good Evening' : (hrs >= 12 && hrs < 16) ? 'Good Afternoon' : 'Good Morning';
    setGreeting(message);
  }, []);

  return (
    <View style={styles.headerContainer}>
      {/* left side text  */}
      <View style={styles.textContainer}>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.name}>{user.displayName.split(' ')[0]}</Text>
      </View>
      {/* profile icon  */}
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={{ uri: user.photoURL }}
            resizeMode="contain"
            style={{
              width: 42,
              height: 42,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: COLORS.yellow,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.blue,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  textContainer: {
    flex: 1,
  },
  greeting: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    opacity: 0.5,
    // marginBottom: 3
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  imageContainer: {
    // backgroundColor: 'brown',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    // borderRadius: '50%',
  },
});
