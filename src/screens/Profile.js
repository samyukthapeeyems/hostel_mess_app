import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useAuth from '../contexts/AuthContext';
import { COLORS } from '../constants/theme';

import Button from '../components/Button';

const Profile = () => {
  const { signOut, user } = useAuth();

  return (
    <>
      <View style={styles.uppperHalf}>
        <View style={styles.cardContainer}>
          <View style={styles.cardContent}>
            <View style={styles.imgContainer}>
              <Image
                source={{ uri: user.photoURL }}
                resizeMode="contain"
                style={styles.img}
              />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.name}>{user.displayName.split(' ')[0]}</Text>
              <Text style={styles.email} numberOfLines={1}>
                {user.email}
              </Text>
            </View>
            <View style={styles.editProfileContainer}>
              <Text style={styles.editProfile}>EDIT PROFILE</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomHalf}>
        <Button
          style={styles.logoutButton}
          textStyle={styles.logoutButtonText}
          onPress={async () => await signOut()}>
          LOG OUT
        </Button>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
  cardContent: {
    flexDirection: 'row',
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  detailsContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  editProfileContainer: {
    // backgroundColor: 'brown',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
  email: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
    opacity: 0.5,
  },
  editProfile: {
    color: 'blue',
    fontSize: 12,
    fontWeight: '700',
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.yellow,
  },
  logoutButton: {
    backgroundColor: COLORS.red,
    paddingVertical: 15,
    marginVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  bottomHalf: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  uppperHalf: { flex: 1 },
});
