import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../constants/theme';
import { LeftArrow } from '../../assets/icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrow />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.blue,
    // height: 60,
    flexDirection: 'row',
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  iconContainer: {
    marginRight: 10,
    justifyContent: 'center',
    // backgroundColor: 'brown',
  },
  titleContainer: {
    justifyContent: 'center',
    // backgroundColor: 'green',
  },
  titleText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
});
