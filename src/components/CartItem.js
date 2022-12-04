import { View, Text, StyleSheet } from 'react-native';
import ItemCounter from './ItemCounter';
import { COLORS } from '../constants/theme';
import { useState, useEffect } from 'react';



const CartItem = ({ item }) => {
  const { items ,addToCart, removeFromCart , totalAmount } = useCart();

  // const [count , setCount] = useState()

  // useEffect(() => {
  //   let _item = items.find(element => element.id == item.id);
  //   if (_item?.quantity) setCount(_item.quantity);
  //   else setCount(0);
  // }, [totalAmount]);


  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.container2}>{item.name}</Text>
      </View>
      <View style={styles.buttonview}>
        <ItemCounter
          count={item.quantity}
          // count={count}
          handleAddItems={async () => await addToCart(item.id, item.price)}
          handleRemoveItems={async () => await removeFromCart(item.id, item.price)}
        />
      </View>

      <View style={styles.rupee}>
        <Text style={{ color: COLORS.black }}>₹{item.totalPrice}</Text>
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
  container2: { fontWeight: '700', fontSize: 15, color: COLORS.black },
  container2text: { fontWeight: '400', fontSize: 10, color: COLORS.black },
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
});

export default CartItem;