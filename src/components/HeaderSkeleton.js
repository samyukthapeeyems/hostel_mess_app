import { StyleSheet, View } from 'react-native';
import React from 'react';
import { COLORS } from '../constants/theme';
// import { SafeAreaView } from 'react-native-safe-area-context';

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
    // paddingVertical: 18,
    // paddingHorizontal: 16,
    // flexDirection: 'row',
  },
  content: {
    // backgroundColor: 'green',
    marginTop: 47,
    marginLeft: 15,
    // flexDirection: 'row',
    // alignItems: 'center',
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
