import { View, Text } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import MyStatusBar from '../components/MyStatusBar';
import { COLORS } from '../constants/theme';
import ScrollableMenu from '../components/ScrollableMenu';
import ViewCart from '../components/ViewCart';

const Menu = ({ navigation }) => {
  return (
    <>
      <MyStatusBar backgroundColor={COLORS.blue} barStyle="light-content" />
      <View style={{ flex: 1 }}>
        <Header navigation={navigation} />
        <ScrollableMenu />
        <ViewCart navigation={navigation} />
      </View>
    </>
  );
};

export default Menu;
