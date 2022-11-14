import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Header, ScrollableMenu, ViewCart } from "../components";

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollableMenu />
      <ViewCart navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Menu;
