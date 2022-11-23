import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { SIZES } from "../constants/theme";
import MyStatusBar from "../components/MyStatusBar";
import { COLORS } from "../constants/theme";
import { LeftArrow } from "../assets/icons";

const OrderDetailsHeader = ({ route, navigation }) => {
  // const { Itemid } = route.params;
  console.log(route);
  return (
    <View style={styles.orderDetailscontainer}>
      <View style={styles.orderDetailsbackbutton}>
        {
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>
              <LeftArrow />
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
const GenerateToken = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#32BA7C",
        paddingVertical: 15,
        marginVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 16,
      }}
      onPress={() => navigation.navigate("Token")}
    >
      <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
        Generate Token
      </Text>
    </TouchableOpacity>
  );
};
const OrderDetails = ({ navigation }) => {
  return (
    <>
      <MyStatusBar backgroundColor={COLORS.blue} barStyle="light-content" />

      <OrderDetailsHeader navigation={navigation} />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.container}>
            <Text style={styles.containerText}>BILL DETAILS</Text>
            <OrderDetailsContent />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <GenerateToken />
        </View>
      </SafeAreaView>
    </>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
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
