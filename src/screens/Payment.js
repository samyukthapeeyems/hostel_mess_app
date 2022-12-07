import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import useCart from '../contexts/CartContext';

import Button from '../components/Button';
import { COLORS } from '../constants/theme';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

// const Payment = ({ navigation }) => {
//   const { totalAmount } = useCart();

// var radio_props = [
//   { label: 'Wallet', value: 0 },
//   { label: 'UPI', value: 1 },
// ];
//   const onPress = () => console.log('hi');
//   const [value, setValue] = useState(0);
//   return (
//     <View>
//       <Text style={{ color: 'black', fontSize: 24 }}>
//         You're Paying : {totalAmount}
//       </Text>
// <RadioForm
//   radio_props={radio_props}
//   // initial={0}
//   formHorizontal={false}
//   labelHorizontal={true}
//   buttonColor={COLORS.green}
//   animation={true}
//   onPress={() => setValue(value)}
// />

//       <View style={{ backgroundColor: 'red' }}>
// <Button
//   style={styles.confirmbutton}
//   textStyle={styles.confirmButtonText}
//   onPress={() => navigation.navigate('OrderDetails')}>
//   PAY NOW
// </Button>
//       </View>
//     </View>
//   );
// };

const Payment = ({ navigation }) => {
  const { totalAmount } = useCart();
  const radio_props = [
    { label: 'Wallet', value: 0 },
    { label: 'UPI', value: 1 },
  ];
  const [value, setValue] = useState(0);

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
          onPress={() => navigation.navigate('OrderDetails')}>
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
    // marginHorizontal: 16,
  },

  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});
