import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useAuth from '../contexts/AuthContext';
import { COLORS } from '../constants/theme';

const MenuHeader = () => {
  const { user } = useAuth();
  const [greeting, setGreeting] = useState('');

  //   const r = useRoute();

  useEffect(() => {
    let hrs = new Date().getHours();
    let message =
      hrs >= 16
        ? 'Good Evening'
        : hrs >= 12 && hrs < 16
        ? 'Good Afternoon'
        : 'Good Morning';
    setGreeting(message);
  }, []);
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.name}>{user.displayName.split(' ')[0]}</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: user.photoURL }}
          resizeMode="contain"
          style={styles.img}
        />
      </View>
    </SafeAreaView>
  );
};

export default MenuHeader;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.blue,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
  },
  imgContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  greeting: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    opacity: 0.5,
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  img: {
    width: 42,
    height: 42,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.yellow,
  },
});
