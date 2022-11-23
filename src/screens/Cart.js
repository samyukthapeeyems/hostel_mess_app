import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SectionList,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { ItemCounter } from "../components";
import { LeftArrow } from "../assets/icons";
import MyStatusBar from "../components/MyStatusBar";
import { COLORS } from "../constants/theme";

const listOfCart = [
  {
    title: "✨Recommended",
    data: [
      {
        id: 1,
        foodItem: "Pizza",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 30,
      },
      {
        id: 2,
        foodItem: "Burger",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 70,
      },
      {
        id: 3,
        foodItem: "Risotto",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 90,
      },
    ],
  },
  {
    title: "Sides",
    data: [
      {
        id: 4,
        foodItem: "French Fries",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 20,
      },
      {
        id: 5,
        foodItem: "Onion rings",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 70,
      },
      {
        id: 6,
        foodItem: "Fried Shrimps",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 60,
      },
    ],
  },
];

const CartHeader = ({ navigation }) => {
  return (
    <View style={styles.cartHeadercontainer}>
      <View style={styles.cartHeaderbackbutton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrow />
        </TouchableOpacity>
      </View>
      <View style={styles.cartheaderview}>
        <Text style={styles.cartheadertext}>Cart</Text>
      </View>
    </View>
  );
};

const CartContent = ({ item }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.container2}>{item.foodItem}</Text>
        <Text style={styles.container2text}>
          {" "}
          2 porotta 2 chicken curry + tea
        </Text>
      </View>
      <View style={styles.buttonview}>
        <ItemCounter
          count={count}
          handleAddItems={increment}
          handleRemoveItems={decrement}
        />
      </View>

      <View style={styles.rupee}>
        <Text>₹{item.cost}</Text>
      </View>
    </View>
  );
};
const ConfirmOrder = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.confirmbutton}
      onPress={() => navigation.navigate("Token")}
    >
      <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
        CONFIRM ORDER
      </Text>
    </TouchableOpacity>
  );
};

const OrderList = () => (
  <View style={{ backgroundColor: "white", flex: 1 }}>
    <SectionList
      sections={listOfCart}
      keyExtractor={(item) => item.id}
      renderItem={CartContent}
      showsVerticalScrollIndicator={false}
    />
  </View>
);
const Cart = ({ navigation, route }) => {
  console.log(navigation.isFocused);
  return (
    <>
      <MyStatusBar backgroundColor={COLORS.blue} barStyle="light-content" />

      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <CartHeader navigation={navigation} />

        <OrderList />
        <ConfirmOrder navigation={navigation} />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  container1: {
    flex: 3,
    backgroundColor: "white",
    paddingVertical: 16,
    paddingHorizontal: 15,
  },
  container2: { fontWeight: "700", fontSize: 15 },
  container2text: { fontWeight: "400", fontSize: 10 },
  buttonview: {
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  touch: { padding: 6 },
  size: { fontSize: 25 },
  rupee: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  cartHeadercontainer: {
    flexDirection: "row",
    height: 75,
    backgroundColor: "#3358F9",
  },
  cartHeaderbackbutton: {
    backgroundColor: "#3358F9",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
  },
  cartheaderview: {
    backgroundColor: "#3358F9",
    flex: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  cartheadertext: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
  },

  optDinnercontainer: { backgroundColor: "white", padding: 15 },
  optDinnercontainer1: {
    borderRadius: 10,
    backgroundColor: "#FEF4DB",
    padding: 10,
    paddingBottom: 15,
    borderWidth: 1,
    borderColor: "#F5B80D",
  },
  optDinnerbuttonview: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  optDinneropt: { fontSize: 20, fontWeight: "bold", color: "#F5B80D" },
  optDinnerfoodview: { alignItems: "center", justifyContent: "center" },
  optDinnerfoodtext: { fontSize: 10, marginLeft: 30 },

  confirmcontainer: {
    flexDirection: "row",
    backgroundColor: "#D7F4E7",
    padding: 10,
  },
  confirmsubview1: { flex: 1 },
  confirmsubview2: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  confirmCaution: {
    backgroundColor: "#D7F4E7",
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#32BA7C",
  },
  confirmCautiontext: {
    fontSize: 12,
    alignItems: "center",
    justifyContent: "center",
    color: "#32BA7C",
  },
  confirmbutton: {
    backgroundColor: "#32BA7C",
    paddingVertical: 15,
    marginVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
  },
});

export default Cart;
