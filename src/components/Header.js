import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../constants/theme';
import { LeftArrow } from '../../assets/icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = ({ navigation, iconShow, title }) => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.content}>
        {iconShow ? (
          <View style={styles.icon}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <LeftArrow />
            </TouchableOpacity>
          </View>
        ) : null}

        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.blue,
    paddingVertical: 18,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  content: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
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
