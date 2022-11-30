import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import Button from '../components/Button';
import { COLORS } from '../constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

function RadioButton(props) {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      style={{ height: 24, width: 24 }}
      onPress={() => setSelected(selected => !selected)}>
      <View
        style={[
          {
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: COLORS.green,
            alignItems: 'center',
            justifyContent: 'center',
          },
          props.style,
        ]}>
        {selected ? (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: COLORS.green,
            }}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
}
const Payment = ({ navigation }) => {
  return (
    <View>
      <Text>Payment</Text>
      <RadioButton selected={true} />
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
