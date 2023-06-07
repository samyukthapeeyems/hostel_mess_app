import { StyleSheet, View } from 'react-native';
import React from 'react';

import { COLORS } from '../constants/theme';

const HeaderSkeleton = ({ children }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default HeaderSkeleton;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.blue,
  },
  content: {
    marginVertical: 16,
    marginLeft: 15,
  },
  icon: {
    color: 'white',
    marginRight: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
});
