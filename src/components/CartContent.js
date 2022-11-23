import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
const CartContent = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.container2}>Porotta & Chicken Curry ..</Text>
        <Text style={styles.container2text}>
          {" "}
          2 porotta 2 chicken curry + tea
        </Text>
      </View>
      <View style={styles.rupee}>
        <Text>Rs 60</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginVertical: 10 },
  container1: { flex: 3, backgroundColor: "white", padding: 8, marginLeft: 10 },
  container2: { fontWeight: "700", fontSize: 15 },
  container2text: { fontWeight: "400", fontSize: 10 },
  rupee: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
