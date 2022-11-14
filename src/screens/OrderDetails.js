import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SIZES } from "../constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
// import OrderDetailsHeder from "./OrderDetailsHeder";
// import OrderDetailsContent from "./OrderDetailsContent";

const OrderDetailsHeader = ({ route, navigation }) => {
  // const { Itemid } = route.params;
  console.log(route);
  return (
    <View style={styles.orderDetailscontainer}>
      <View style={styles.orderDetailsbackbutton}>
        {
          <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
            <Text>
              <Ionicons name="arrow-back-outline" size={32} color="white" />
            </Text>
          </TouchableOpacity>
        }
      </View>
      <View style={styles.orderDetailscartheaderview}>
        <Text style={styles.orderDetailscartheadertext}>Order Id</Text>
      </View>
    </View>
  );
};

const OrderDetailsContent = () => {
  return (
    <View style={{ backgroundColor: "white", padding: 10 }}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "black",
          // borderStyle: "dashed",
          paddingBottom: 5,
        }}
      >
        <View style={{ flexDirection: "row", paddingTop: 5 }}>
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Text style>Porotta & Beef</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Text>₹60</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 5 }}>
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Text style>Biriyani Rice</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Text>₹60</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 5 }}>
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Text style>Tea</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Text>₹10</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            paddingTop: 10,
          }}
        >
          <Text style>Total</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Text>₹130</Text>
        </View>
      </View>
    </View>
  );
};
const OrderDetails = ({ navigation }) => {
  return (
    <View>
      <OrderDetailsHeader navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.containerText}>BILL DETAILS</Text>
        <OrderDetailsContent />
      </View>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {},
  containerText: { padding: 10, fontWeight: "400", fontSize: 12 },
  deatialsView: {},
  orderDetailscontainer: {
    flexDirection: "row",
    height: 75,
    backgroundColor: "#3358F9",
  },
  orderDetailsbackbutton: {
    backgroundColor: "#3358F9",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
  },
  orderDetailscartheaderview: {
    backgroundColor: "#3358F9",
    flex: 8,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  orderDetailscartheadertext: {
    fontSize: SIZES.large * 2,
    color: "white",
    fontWeight: "bold",
  },
});
