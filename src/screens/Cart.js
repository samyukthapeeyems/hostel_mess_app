import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import MyStatusBar from '../components/MyStatusBar';
import { BUTTON, COLORS } from '../constants/theme';
import Header from '../components/Header';
import CartItem from '../components/CartItem';

import useCart from '../contexts/CartContext';
import firestore from '@react-native-firebase/firestore';
import Button from '../components/Button';

const OrderList = ({ items, orderedItems }) => {
  // console.log(items);
  // const listOfQty = orderedItems.map(myFunction1);
  function myFunction1(i) {
    return i.quantity;
  }
  let newItems = items;
  newItems.map(item => {
    x = orderedItems.map(myFunction1);
  });
  console.log(newItems);
  // console.log(listOfQty);
  // let listOfItems = items;

  // // letlistOfItems.map(myFunction);
  // for (let i = 0; i < 3; i++) {
  //   listOfItems[i].qty = listOfQty[i];
  // }

  // console.log('list is: ' + listOfItems);

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <CartItem item={item} />}
      keyExtractor={item => item.id}
      style={styles.listContainer}
      // orderedItems={orderedItems}
    />
  );
};

const Cart = ({ navigation }) => {
  const [itm, setItm] = useState();
  const { items, totalAmount } = useCart();
  let orderedItems = items;
  console.log(orderedItems);

  // console.log(listOfQty);
  // let newItems = items.forEach(myFunction);

  // function myFunction(item) {
  //   item.number = 1;
  // }
  // console.log(newItems);
  // console.log('The quantity is' + items[0].quantity);

  useEffect(() => {
    let arr = [];
    items.forEach(item => {
      arr.push(firestore().collection('items').doc(item.id).get());
    });
    Promise.all(arr).then(snapShot => {
      let itm = [];
      snapShot.forEach(item => itm.push(item.data()));
      setItm(itm);
    });
  }, []);
  return (
    <>
      <MyStatusBar backgroundColor={COLORS.blue} barStyle="light-content" />
      <Header title="Cart" navigation={navigation} />

      <OrderList items={itm} orderedItems={orderedItems} />
      <View style={styles.buttonContainer}>
        <Button
          style={BUTTON.green}
          textStyle={styles.buttonText}
          onPress={() => console.log('Confirm Order Button pressed')}>
          CONFIRM ORDER
        </Button>
      </View>
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  buttonContainer: { paddingHorizontal: 16, paddingBottom: 10 },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  listContainer: { backgroundColor: 'white', flex: 1 },
});
