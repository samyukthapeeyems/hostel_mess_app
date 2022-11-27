import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import useAuth from '../contexts/AuthContext';
import { COLORS } from '../constants/theme';
import Header from './HeaderSkeleton';

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
    <Header>
      <View style={styles.content}>
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
      </View>
    </Header>
  );
};

export default MenuHeader;

const styles = StyleSheet.create({
  content: { flexDirection: 'row' },
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
