import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { SIZES, COLORS } from '../constants/theme';
import useAuth from '../contexts/AuthContext';

export const CircleButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('Profile');
      }}>
      <Image
        source={{ uri : user.photoURL}}
        resizeMode="contain"
        style={{ width: 42, height: 42, borderRadius: 50 }}
      />
    </TouchableOpacity>
  );
};


const Header = ({ navigation }) => {
  const {user } = useAuth();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    let hrs = new Date().getHours();
    let message = (hrs >= 16) ? "Good Evening" : (hrs >= 12 && hrs < 16) ? "Good Afternoon" : "Good Morning";
    setGreeting(message);

  }, []);


  return (
    <View style={styles.container}>
      {/* left side text  */}
      <View style={styles.leftsideview}>
        <Text style={styles.leftsidetext1}>{greeting}</Text>
        <Text style={styles.leftsidetext2}>{user.displayName}</Text>
      </View>
      {/* profile icon  */}
      <View style={styles.profileiconview}>
        {/* <CircleButton navigation={navigation} /> */}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.blue,
    paddingTop: StatusBar.currentHeight,
  },
  leftsideview: {
    flex: 1,
    // paddingVertical: 12,
    paddingLeft: 16,
  },
  leftsidetext1: { fontSize: 14, color: 'white', opacity: 0.5 },
  leftsidetext2: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  profileiconview: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 10,
    // backgroundColor: 'red',
  },
});
