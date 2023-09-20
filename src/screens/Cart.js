import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { firebase } from '@react-native-firebase/functions';

import { useItems } from '../functions/items';

import useCart from '../contexts/CartContext';
import useAuth from '../contexts/AuthContext';

import { COLORS } from '../constants/theme';

import CartItem from '../components/CartItem';
import Listheader from '../components/Listheader';
import Button from '../components/Button';

export default function Cart({ navigation }) {
  const { items, totalAmount } = useCart();

  const [itm, setItm] = useState();
  const { getItemList, mapItemWithDocId } = useItems();

  const orderList = itm?.map(item => {
    return {
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      totalPrice: item.totalPrice,
    };
  });

  console.log('order list(cart page): ', orderList);

  async function cartData() {
    try {
      let itemIdList = Object.keys(items);
      let itemList = await getItemList(itemIdList);
      let itemListx = mapItemWithDocId(itemList);

      let cartData = itemListx.map(item => {
        return {
          ...item,
          totalPrice: items[item.id].quantity * item.price,
          quantity: items[item.id].quantity,
        };
      });

      // console.log('cartData', cartData);

      return cartData;
    } catch (err) {
      console.log(err);
    }
  }

  async function createOrder() {
    const defaultApp = firebase.app();
    const _functions = defaultApp.functions('asia-south1');

    const itemList = Object.entries(items).map(e => ({
      id: e[0],
      quantity: e[1].quantity,
    }));

    // console.log('items:', items);
    console.log('item list:', itemList);
    const _createOrder = _functions.httpsCallable('createOrder');
    const _initTxn = _functions.httpsCallable('initWalletTxn');

    try {
      let response = await _createOrder({ itemList });

      // console.log('response', response);
      console.log('res data ', response.data);
      console.log('res data order id  ', response.data.order.orderId);

      let txnResp = await _initTxn({
        amount: response.data.order.totalPrice,
        oid: response.data.order.orderId,
        transactionType: 'DEBIT',
      });

      console.log('Transaction Response is: ');
      console.log(txnResp);

      navigation.navigate('Payment', {
        orderList: orderList,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    cartData().then(res => setItm(res));
  }, [totalAmount]);

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={itm}
          renderItem={({ item }) => <CartItem item={item} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={<Listheader />}
          ListFooterComponent={
            <View style={styles.Touterview}>
              <View style={styles.Ttotalview}>
                <Text style={styles.Ttotaltext}>Total</Text>
              </View>
              <View style={styles.Trsview}>
                <Text style={styles.Trstext}>₹{totalAmount}</Text>
              </View>
            </View>
          }
        />
        <Button
          style={styles.confirmbutton}
          textStyle={styles.confirmButtonText}
          onPress={async () => {
            // await createOrder();
            navigation.navigate('Payment', {
              orderList: orderList,
            });
          }}>
          CONTINUE TO PAYMENT
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  confirmbutton: {
    backgroundColor: COLORS.green,
    paddingVertical: 15,
    marginVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },

  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },

  Touterview: { flex: 1, flexDirection: 'row' },
  Ttotalview: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    paddingTop: 5,
  },
  Ttotaltext: {
    color: COLORS.black,
    fontWeight: '700',
    opacity: 0.5,
    fontSize: 16,
  },
  Trsview: { flex: 1, alignItems: 'flex-end', paddingHorizontal: 10 },
  Trstext: { color: COLORS.green, fontSize: 24, fontWeight: '700' },
});
