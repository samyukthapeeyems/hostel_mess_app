import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import Button from '../components/Button';
import { COLORS } from '../constants/theme';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const Payment = ({ navigation }) => {
  var radio_props = [
    { label: 'Wallet', value: 0 },
    { label: 'UPI', value: 1 },
  ];
  const onPress = () => console.log('hi');
  const [value, setValue] = useState(0);
  const [value3Index, setvalue3Index] = useState('#2196f3');
  return (
    <View>
      <Text>Payment</Text>
      <RadioForm
        radio_props={radio_props}
        // initial={0}
        formHorizontal={false}
        labelHorizontal={true}
        buttonColor={COLORS.green}
        animation={true}
        onPress={() => setValue(value)}
      />

      <View style={{ backgroundColor: 'white' }}>
        <Button
          style={styles.confirmbutton}
          textStyle={styles.confirmButtonText}
          onPress={() => navigation.navigate('OrderDetails')}>
          PAY NOW
        </Button>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
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
});
