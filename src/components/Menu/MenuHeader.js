import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { firebase } from '@react-native-firebase/auth';
import { COLORS } from '../../constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MenuHeader = ({ navigation }) => {
  const user = firebase.auth().currentUser;

  if (user) {
    // console.log('User email: ', user.photoURL);
  }
  return (
    <View style={styles.headerContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Good Morning</Text>
        <Text style={styles.text2}>{user.displayName.split(' ')[0]}</Text>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={{ uri: user.photoURL }}
            style={styles.imgStyles}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuHeader;

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
  imageContainer: {
    // backgroundColor: 'brown',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    // borderRadius: '50%',
  },
  imgStyles: {
    borderRadius: 20,
    height: 40,
    width: 40,
    borderColor: 'orange',
    borderWidth: 2,
  },
  text1: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    opacity: 0.5,
    // marginBottom: 3
  },
  text2: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
});
