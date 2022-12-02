import { StatusBar, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export default function _MyStatusBar({ backgroundColor, ...props }) {
  return (
    <SafeAreaView style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  statusBar: {
    height: Platform.OS === 'android' ? STATUSBAR_HEIGHT : STATUSBAR_HEIGHT,
  },
});
