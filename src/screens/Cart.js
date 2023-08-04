import React, { useState, useEffect, useCallback, memo } from 'react';
import functions, { firebase } from '@react-native-firebase/functions';

import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useItems } from '../functions/items';
import useCart from '../contexts/CartContext';

import { COLORS } from '../constants/theme';

import CartItem from '../components/CartItem';
import Listheader from '../components/Listheader';
import Button from '../components/Button';
// I'll clean this later (function), works for now

import RazorpayCheckout from 'react-native-razorpay';
import useAuth from '../contexts/AuthContext';

// import AllInOneSDKManager from 'paytm_allinone_react-native';
///

export default function Cart({ navigation }) {
  const { items, totalAmount } = useCart();
  const { user } = useAuth();

  const [itm, setItm] = useState();
  const { getItemList, mapItemWithDocId } = useItems();
  const [lastDocument, setLastDocument] = useState();

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

    console.log(itemList);
    const _createOrder = _functions.httpsCallable('createOrder');
    try {
      let response = await _createOrder({ itemList });
      console.log('response', response);
      console.log('res data ', response.data);

      // AllInOneSDKManager.startTransaction(
      //   response.data.order.orderId,
      //   'xZhVnv93110728543806',
      //   response.data.payment.body.txnToken,
      //   response.data.order.totalPrice,
      //   'callbackUrl',
      //   (isStaging = false),
      //   (restrictAppInvoke = true),
      //   'urlScheme',
      // )
      //   .then(result => {
      //     console.log(result);
      //   })
      //   .catch(err => {
      //     handleError(err);
      //   });

      var options = {
        currency: 'INR',
        key: 'rzp_test_jMhBMG22u7fqUA',
        amount: (totalAmount * 100).toString(),
        name: 'E Canteen',
        order_id: 'order_DslnoIgkIDL8Zt',
        prefill: {
          email: user.email,
          contact: user.phone || 9876543210,
          name: user.displayName,
        },
        theme: { color: '#3358F9' },
      };
      RazorpayCheckout.open(options)
        .then(data => {
          alert(`Success: ${data.razorpay_payment_id}`);
        })
        .catch(error => {
          // alert(`Error: ${error.code} | ${error.description}`);

          navigation.navigate('PaymentStatus', { success: 1 });
          // navigation.navigate('Token');
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    cartData().then(x => setItm(x));
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
      </View>
      <Button
        style={styles.confirmbutton}
        textStyle={styles.confirmButtonText}
        onPress={async () => {
          await createOrder();
        }}>
        CONFIRM ORDER
      </Button>
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
