import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SIZES, COLORS } from '../constants/theme';
import PrflPic from '../../assets/images/PrflPic.png';

export const CircleButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('Profile');
      }}>
      <Image
        source={PrflPic}
        resizeMode="contain"
        style={{ width: 42, height: 42, borderRadius: 50 }}
      />
    </TouchableOpacity>
  );
};
const Header = ({ navigation }) => {
  const [timeOfDay, setTimeOfDay] = useState(0);

  let greeting = '';
  useEffect(() => {
    var hours = new Date().getHours(); //Current Hours
    setTimeOfDay(hours);
  }, []);
  if (timeOfDay < 12) greeting = 'Morning';
  else if (timeOfDay > 12) greeting = 'Afternoon';
  else if (timeOfDay > 18) greeting = 'Evening';

  const [user, setUser] = useState('Anna');
  return (
    <View style={styles.container}>
      {/* left side text  */}
      <View style={styles.leftsideview}>
        <Text style={styles.leftsidetext1}>Good {greeting}</Text>
        <Text style={styles.leftsidetext2}>{user}</Text>
      </View>
      {/* profile icon  */}
      <View style={styles.profileiconview}>
        <CircleButton navigation={navigation} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', backgroundColor: COLORS.blue },
  leftsideview: {
    flex: 1,
    paddingVertical: 12,
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
  },
});
