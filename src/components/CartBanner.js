import { View, StyleSheet } from 'react-native';
import useCart from '../contexts/CartContext';
import Button from './Button';


export default function CartBanner({ navigation , count }) {

  const { items } = useCart();
  return (
        <View style={styles.container}>
          <Button
            style={styles.touch}
            textStyle={styles.textcolor}>
            {`${count} items in cart`}
          </Button>
          <Button
            style={styles.touch1}
            textStyle={styles.textviewcart}
            onPress={() => navigation.navigate('Cart')}>
            View Cart
          </Button>
        </View>
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
