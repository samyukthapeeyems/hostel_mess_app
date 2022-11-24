import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useCart from '../contexts/CartContext';

export default function ViewCart({ navigation }) {

  const { items } = useCart();
  return (
    <>
      {
        items.length > 0 &&
        <View style={styles.container}>
          <TouchableOpacity style={styles.touch}>
            <Text style={styles.textcolor}>{items.length} items in Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touch1}
            onPress={() => navigation.navigate('Cart')}>
            <Text style={styles.textviewcart}>View Cart</Text>
          </TouchableOpacity>
        </View>
      }
    </>


  );
};


const styles = StyleSheet.create({
  container: { backgroundColor: '#D7F4E7', height: 40, flexDirection: 'row' },
  touch: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  textcolor: { color: '#32BA7C' },
  touch1: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  textviewcart: { color: '#32BA7C', fontSize: 16, fontWeight: '600' },
});
