import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SectionList,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import ItemCounter from '../components/ItemCounter';
import { LeftArrow } from '../../assets/icons';
import MyStatusBar from '../components/MyStatusBar';
import { COLORS } from '../constants/theme';
import useCart from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import { useItems } from '../functions/items';
import { err } from 'react-native-svg/lib/typescript/xml';

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
    setCount(count => count + 1);
  };
  const decrement = () => {
    setCount(count => count - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.container2}>{item.foodItem}</Text>
        <Text style={styles.container2text}>
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
        <Text style={{ color: COLORS.black }}>₹{item.cost}</Text>
      </View>
    </View>
  );
};
const ConfirmOrder = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.confirmbutton}>
      <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>
        CONFIRM ORDER
      </Text>
    </TouchableOpacity>
  );
};

const OrderList = ({ items }) => (
  <View style={{ backgroundColor: 'white', flex: 1 }}>
    {/* <SectionList
      sections={items}
      keyExtractor={item => item.id}
      renderItem={CartContent}
      showsVerticalScrollIndicator={false}
    /> */}
    <FlatList
      data={items}
      renderItem={({ item }) => <CartItem item={item} />}
      keyExtractor={item => item.id}
    />
    {/* <CartItem item={item} /> */}
  </View>
);





export default function Cart({ navigation, route }) {
  const [itm, setItm] = useState();
  const { items, totalAmount } = useCart();
  const { getItemList } = useItems()
  // console.log(totalAmount);

  useEffect(() => {
    async function x() {

      try {
        let itemIdList = items.map(item => item.id)
        console.log(itemIdList)
        let e = await getItemList(itemIdList)
        console.log(e)
      } catch (err) {
        console.log(err)
      }


    }
    x()

  }, []);
  return (
    <>
      <MyStatusBar backgroundColor={COLORS.blue} barStyle="light-content" />
      <CartHeader navigation={navigation} />

      <OrderList items={itm} />
      <ConfirmOrder />
    </>
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
  touch: { padding: 6 },
  size: { fontSize: 25 },
  rupee: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cartHeadercontainer: {
    flexDirection: 'row',
    height: 75,
    backgroundColor: '#3358F9',
  },
  cartHeaderbackbutton: {
    backgroundColor: '#3358F9',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  cartheaderview: {
    backgroundColor: '#3358F9',
    flex: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  cartheadertext: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },

  optDinnercontainer: { backgroundColor: 'white', padding: 15 },
  optDinnercontainer1: {
    borderRadius: 10,
    backgroundColor: '#FEF4DB',
    padding: 10,
    paddingBottom: 15,
    borderWidth: 1,
    borderColor: '#F5B80D',
  },
  optDinnerbuttonview: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  optDinneropt: { fontSize: 20, fontWeight: 'bold', color: '#F5B80D' },
  optDinnerfoodview: { alignItems: 'center', justifyContent: 'center' },
  optDinnerfoodtext: { fontSize: 10, marginLeft: 30 },

  confirmcontainer: {
    flexDirection: 'row',
    backgroundColor: '#D7F4E7',
    padding: 10,
  },
  confirmsubview1: { flex: 1 },
  confirmsubview2: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  confirmCaution: {
    backgroundColor: '#D7F4E7',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#32BA7C',
  },
  confirmCautiontext: {
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#32BA7C',
  },
  confirmbutton: {
    backgroundColor: '#32BA7C',
    paddingVertical: 15,
    marginVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});


// import { View, Text } from 'react-native';
// import React from 'react';

// const Cart = () => {
//   return (
//     <View>
//       <Text style={{ color: 'black' }}>Cart</Text>
//     </View>
//   );
// };

// export default Cart;
