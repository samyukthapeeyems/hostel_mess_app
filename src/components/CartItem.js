import { View, Text, StyleSheet } from "react-native";
import ItemCounter from "./ItemCounter";
import { COLORS } from "../constants/theme";
 const CartItem = ({ item }) => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count => count + 1);
    };
    const decrement = () => {
      setCount(count => count - 1);
    };
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.container2}>{item.name}</Text>
          <Text style={styles.container2text}>{item.name}</Text>
        </View>
        <View style={styles.buttonview}>
          <ItemCounter
            count={count}
            handleAddItems={increment}
            handleRemoveItems={decrement}
          />
        </View>
  
        <View style={styles.rupee}>
          <Text style ={{color: COLORS.black}}>₹{item.price}</Text>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
      },
      container1: {
        flex: 3,
        backgroundColor: 'white',
        paddingVertical: 16,
        paddingHorizontal: 15,
      },
      container2: { fontWeight: '700', fontSize: 15, color: COLORS.black},
      container2text: { fontWeight: '400', fontSize: 10 ,color: COLORS.black},
      buttonview: {
        flex: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
      rupee: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
})

export default CartItem;