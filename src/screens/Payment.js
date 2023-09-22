import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import useCart from '../contexts/CartContext';

import Button from '../components/Button';
import { COLORS } from '../constants/theme';
import RadioForm from 'react-native-simple-radio-button';

import { firebase } from '@react-native-firebase/functions';

const Payment = ({ navigation, item, route }) => {
  const { orderList } = route.params;
  console.log('payment page orderlist: ', orderList);

  const [orderId, setOrderId] = useState();

  const { items, totalAmount } = useCart();
  console.log('items in payment page', items);
  const radio_props = [
    { label: 'Wallet', value: 0 },
    { label: 'UPI', value: 1 },
  ];
  const [value, setValue] = useState(0);

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
      // console.log('res data ', response.data);
      console.log('res data order id  ', response.data.order.orderId);
      setOrderId(response.data.order.orderId);
      console.log('order id is: ', orderId);

      let txnResp = await _initTxn({
        amount: response.data.order.totalPrice,
        oid: response.data.order.orderId,
        transactionType: 'DEBIT',
      });

      console.log('Transaction Response is: ');
      console.log(txnResp);

      navigation.navigate('PaymentStatus', {
        orderId: orderId,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <View style={styles.upperContainer}>
        <Text
          style={{
            color: 'black',
            fontSize: 24,
            fontWeight: '700',
            marginBottom: 10,
          }}>
          You're Paying : ₹{totalAmount}
        </Text>
        <RadioForm
          radio_props={radio_props}
          // initial={0}
          formHorizontal={false}
          labelHorizontal={true}
          buttonColor={COLORS.green}
          animation={true}
          onPress={() => setValue(value)}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Button
          style={styles.confirmbutton}
          textStyle={styles.confirmButtonText}
          onPress={async () => await createOrder()}>
          PAY NOW
        </Button>
      </View>
    </>
  );
};

export default Payment;

const styles = StyleSheet.create({
  upperContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  confirmbutton: {
    backgroundColor: COLORS.green,
    paddingVertical: 15,
    paddingHorizontal: 16,
    width: '100%',
    marginVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});
