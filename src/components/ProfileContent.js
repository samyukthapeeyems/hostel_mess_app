import { View, Text } from "react-native";
import React from "react";
import { CircleButton } from "../components/Button";

const ProfileContent = () => {
  return (
    <View style={{ flexDirection: "row", marginTop: 21, marginLeft: 16 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <CircleButton style={{ flex: 1 }} />
      </View>

      <View style={{ flex: 2, flexDirection: "column" }}>
        <Text style={{ fontSize: 18, fontWeight: "700", padding: 10 }}>
          Anna
        </Text>
        <Text style={{ marginTop: -10, paddingLeft: 8 }}>
          {" "}
          annasaantony@612
        </Text>
      </View>
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}
      >
        <Text style={{ marginTop: 15, color: "#3358F9", fontSize: 10 }}>
          {" "}
          EDIT PROFILE{" "}
        </Text>
      </View>
    </View>
  );
};

export default ProfileContent;
