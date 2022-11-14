import { View, Text, TouchableOpacity } from "react-native";
import { GreenAddIcon, GrayMinusIcon } from "../assets/icons";

const ItemCounter = ({ count, handleAddItems, handleRemoveItems }) => {
  return (
    <View
      style={{
        backgroundColor: "#7676801F",
        flexDirection: "row",
        paddingHorizontal: 4,
        // justifyContent: "center",
        // alignItems: "center",
        width: 80,
        height: 40,
        borderRadius: 9,
      }}
    >
      <TouchableOpacity
        onPress={handleRemoveItems}
        style={{
          //   backgroundColor: "red",
          flex: 1,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GrayMinusIcon />
      </TouchableOpacity>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>{count}</Text>
      </View>
      <TouchableOpacity
        onPress={handleAddItems}
        style={{
          //   backgroundColor: "red",
          flex: 1,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GreenAddIcon />
      </TouchableOpacity>
    </View>
  );
};

export default ItemCounter;
