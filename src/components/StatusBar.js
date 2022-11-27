import { StatusBar, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export default function _MyStatusBar( { backgroundColor , ...props}) {
  return (
    <SafeAreaView style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  statusBar: {
    height: Platform.OS === 'android' ? STATUSBAR_HEIGHT : STATUSBAR_HEIGHT,
  },
});

