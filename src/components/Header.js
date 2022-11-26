import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../constants/theme';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Header</Text>
        <Text style={styles.text1}>Header</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: COLORS.blue,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  textContainer: {
    backgroundColor: 'yellow',
  },
  text1: {
    fontSize: 14,
    color: 'white',
    opacity: 0.5,
  },
});
