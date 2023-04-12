import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Button from '../components/Button';

const Payment = ({ navigation }) => {
  return (
    <View>
      <Text>Paytm payment screen</Text>
      <Button
        style={styles.confirmbutton}
        textStyle={styles.confirmButtonText}
        onPress={async () => {
          const randomBoolean = Math.random() < 0.5;

          navigation.navigate('PaymentStatus', { success: randomBoolean });
        }}>
        CONFIRM ORDER
      </Button>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({});
