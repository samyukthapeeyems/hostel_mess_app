import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
import MyStatusBar from '../components/MyStatusBar';
import { COLORS } from '../constants/theme';
import CircleButton from '../components/Header';
import React from 'react';
import useAuth from '../contexts/AuthContext';
import PrflPic from '../../assets/images/PrflPic.png';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>My Profile</Text>
    </View>
  );
};

const PrflButton = () => {
  return (
    <TouchableOpacity>
      <Image
        source={PrflPic}
        resizeMode="contain"
        style={{ width: 42, height: 42, borderRadius: 50 }}
      />
    </TouchableOpacity>
  );
};

const UserInfoCard = () => (
  <View
    style={{
      flexDirection: 'row',
      paddingHorizontal: 16,
      paddingVertical: 30,
      backgroundColor: 'white',
    }}>
    {/* left item  */}
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View
        style={{
          flex: 1,

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <PrflButton />
      </View>
      <View
        style={{
          flex: 3,
          backgroundColor: 'white',
          paddingVertical: 13,
          paddingLeft: 10,
        }}>
        <Text style={{ fontSize: 24, fontWeight: '700', color: COLORS.black }}>
          Anna
        </Text>
        <Text style={{ color: COLORS.black }}>anna@gmail.com</Text>
      </View>
    </View>
    {/* right item  */}
    <View
      style={{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}>
      <TouchableOpacity>
        <Text style={{ fontWeight: '700', color: COLORS.blue, fontSize: 14 }}>
          EDIT PROFILE
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const ProfileContent2 = () => {
  return (
    <View
      style={{ flexDirection: 'row', padding: 10, backgroundColor: '#D7F4E7' }}>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          marginLeft: 15,
        }}>
        <Text style={{ fontSize: 14, color: '#32BA7C' }}>
          Profile Incomplete
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          marginRight: 15,
        }}>
        <Text style={{ fontSize: 14, color: '#32BA7C' }}>Complete now</Text>
      </View>
    </View>
  );
};

const ProfileWallet = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          backgroundColor: 'white',
          marginTop: 20,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            marginLeft: 15,
          }}>
          <Text
            style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.black }}>
            eCanteen Wallet
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            marginRight: 15,
          }}>
          <Text style={{ fontSize: 20, color: COLORS.black }}> > </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ProfileLogout = ({ signOut }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.red,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        marginHorizontal: 24,
        borderRadius: 10,
      }}
      onPress={async () => await signOut()}>
      <Text style={{ fontSize: 20, fontWeight: '700', color: 'white' }}>
        LOG OUT
      </Text>
    </TouchableOpacity>
  );
};

const Profile = ({ navigation }) => {
  const { signOut } = useAuth();

  return (
    <>
      <MyStatusBar backgroundColor={COLORS.blue} barStyle="light-content" />
      <View style={{ flex: 9 }}>
        <ProfileHeader />
        {/* <ProfileHeader />
        <ProfileContent />
        <ProfileDue />
      <ProfileTotDue /> */}
        {/* <ProfileLogout /> */}
        <UserInfoCard />
        <ProfileContent2 />
        <ProfileWallet navigation={navigation} />
        {/* <Button title="Google Log out" onPress={async () => await signOut()} /> */}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 15,
        }}>
        <ProfileLogout signOut={signOut} />
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', backgroundColor: '#3358F9' },
  containerText: {
    fontWeight: '700',
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 21,
    paddingLeft: 16,
  },
});
