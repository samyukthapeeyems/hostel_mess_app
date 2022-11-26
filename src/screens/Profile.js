// import { Text, Button } from "react-native"
// import AllInOneSDKManager from 'paytm_allinone_react-native';


// export default Profile = () => {
//   return (
//     <Button
//       title={'Pay with Razorpay'}
//       onPress={() => {
//         AllInOneSDKManager.startTransaction(
//           orderId = "orderId",
//           mid = "xZhVnv93110728543806",
//           txnToken = "tranxToken",
//           amount = "1000",
//           callbackUrl = "https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=<order_id>",
//           isStaging = false,
//           appInvokeRestricted,
//           urlScheme = "canteen://"
//         )
//           .then((result) => {
//             console.log("result", result);
//             // handle result ..
//           })
//           .catch((err) => {
//             // handle error ..
//           });
//       }

//       }
//     />
//   )
// }

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import MyStatusBar from '../components/MyStatusBar';
import { COLORS } from '../constants/theme';
import CircleButton from '../components/Header';
import React from 'react';
import useAuth from '../contexts/AuthContext';
import Button from '../components/Button';



const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>My Profile</Text>
    </View>
  );
};

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
          <Text style={{ fontSize: 20, color: COLORS.black }}>{' > '}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function Profile ({ navigation }) {
  const { signOut, user } = useAuth();

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

        {/* user card */}
        <View style={styles.user.container} >
          {/* left item  */}
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
              <Image
                source={{ uri: user.photoURL }}
                resizeMode="contain"
                style={styles.user.profilePicture}
              />
            </View>
            <View style={styles.user.detailsContainer}>
              <Text style={styles.user.name}> {user.displayName} </Text>
              <Text style={styles.user.text}>{user.email}</Text>
            </View>
          </View>
          {/* right item  */}
          <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', }}>
            <Button textStyle={styles.editProfile.text}>EDIT PROFILE</Button>
          </View>
        </View>
        {/* user card */}


        <ProfileContent2 />
        <ProfileWallet navigation={navigation} />
      </View>

      <View style={styles.logOut.container}>
        <Button style={styles.logOut.button}
          textStyle={styles.logOut.text}
          onPress={async () => await signOut()}
        >
          LOGOUT
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    backgroundColor: '#3358F9'
  },

  containerText: {
    fontWeight: '700',
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 21,
    paddingLeft: 16,
  },

  user: {
    container: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      paddingVertical: 30,
      backgroundColor: 'white',
    },
    detailsContainer: {
      flex: 3,
      backgroundColor: 'white',
      paddingVertical: 13,
      paddingLeft: 10,
    },
    profilePicture: {
      width: 42,
      height: 42,
      borderRadius: 50
    },
    name: {
      fontSize: 24,
      fontWeight: '700',
      color: COLORS.black
    },
    text: {
      color: COLORS.black
    }
  },

  editProfile: {
    text: {
      fontWeight: '700',
      color: COLORS.blue,
      fontSize: 14
    }
  },
  logOut: {
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 15,
    },
    button: {
      backgroundColor: COLORS.red,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      marginHorizontal: 24,
      borderRadius: 10,
    },
    text: {
      fontSize: 20,
      fontWeight: '700',
      color: 'white'
    }
  }
});
