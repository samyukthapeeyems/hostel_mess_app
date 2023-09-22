import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const PayNow = () => {
  return (
    <View style={styles.pnview}>
      <Text style={styles.pntext}>Pay Now</Text>
    </View>
  );
};

const PaymentContent = () => {
  return (
    <View style={styles.pccontainer1}>
      <View style={styles.pccontainer2}></View>

      <View style={styles.pcpayview}>
        <Text style={styles.pcpaytext}>You're Paying</Text>
        <Text style={styles.pcpaytext2}>₹12,000</Text>
      </View>

      <PayNow />
    </View>
  );
};

const AddPayment = ({ navigation }) => {
  return <PaymentContent />;
};

const styles = StyleSheet.create({
  pccontainer1: { flex: 1 },
  pccontainer2: { flex: 2 },
  pcpayview: { flex: 3, alignItems: 'center' },
  pcpaytext: { color: '#0C0F17', opacity: 0.5, fontSize: 14 },
  pcpaytext2: { color: 'black', fontSize: 48, fontWeight: '700' },
  pnview: {
    padding: 10,
    backgroundColor: '#32BA7C',
    marginBottom: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  pntext: { color: 'white', fontSize: 18, fontWeight: '700' },
});

export default AddPayment;
