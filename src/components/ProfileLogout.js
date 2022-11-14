import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const ProfileLogout = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.containerText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileLogout;

const styles = StyleSheet.create({
  container: {
    marginTop: 180,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E24C4B",
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  containerText: { fontSize: 18, color: "white" },
});
