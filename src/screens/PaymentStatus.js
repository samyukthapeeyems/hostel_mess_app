import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Button from '../components/Button';

import PaymentSuccess from '../../assets/images/PaymentSuccess.png';
import PaymentFailed from '../../assets/images/PaymentFailed.png';
import { COLORS } from '../constants/theme';

const PaymentStatus = ({ navigation, route }) => {
  let success = 'Succesfull';
  // const { orderId } = route.params.orderId;
  let orderId = route.params.orderId;
  console.log('order id in payment status page: ', orderId);

  return (
    <View style={success ? styles.successPage : styles.failurePage}>
      <View style={styles.iconContainer}>
        <Text style={styles.paymentText}>
          Payment
          {success ? ' Succesfull' : ' Failed'}
        </Text>
        <Image source={success ? PaymentSuccess : PaymentFailed} />
      </View>
      <View style={styles.container}>
        <Button
          style={styles.whiteButton}
          textStyle={success ? styles.greenButtonText : styles.redButtonText}
          onPress={() => {
            navigation.navigate('OrderDetails1', {
              orderId: orderId,
            });
          }}>
          VIEW ORDER DETAILS
        </Button>
      </View>
    </View>
  );
};

export default PaymentStatus;

const styles = StyleSheet.create({
  container: { flex: 1 },
  successPage: {
    backgroundColor: COLORS.green,
    flex: 1,
  },
  failurePage: {
    backgroundColor: COLORS.red,
    flex: 1,
  },
  iconContainer: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteButton: {
    backgroundColor: COLORS.white,
    paddingVertical: 15,
    marginVertical: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  greenButtonText: {
    color: COLORS.green,
    fontSize: 18,
    fontWeight: '700',
  },
  redButtonText: {
    color: COLORS.red,
    fontSize: 18,
  },
  paymentText: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
    marginBottom: 30,
  },
});
