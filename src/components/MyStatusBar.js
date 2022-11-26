import {
  View,
  Text,
  // SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <SafeAreaView style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </SafeAreaView>
);
const styles = StyleSheet.create({
  statusBar: {
    height: Platform.OS === 'android' ? STATUSBAR_HEIGHT : STATUSBAR_HEIGHT,
  },
});

export default MyStatusBar;
