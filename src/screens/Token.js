import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import useCart from '../contexts/CartContext';

function CountDownTimer({ navigation, initialValue }) {
  const [time, setTime] = React.useState(initialValue || 10);
  const timerRef = React.useRef(time);

  React.useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  if (time === 0) {
    navigation.navigate('TabsScreen');
  }

  return (
    <View style={{ justifyContent: 'center' }}>
      <Text
        style={{
          color: 'black',
          fontSize: 14,
          fontWeight: '500',
          opacity: 0.5,
        }}>
        00 : {time}{' '}
      </Text>
    </View>
  );
}
const Token = ({ navigation }) => {
  const { totalAmount } = useCart();

  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#32BA7C',
        }}>
        <View
          style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
          <View
            style={{
              backgroundColor: 'white',
              width: 250,
              height: 250,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ color: '#32BA7C', fontSize: 72, fontWeight: '700' }}>
              ₹{totalAmount}
            </Text>
            <CountDownTimer navigation={navigation} />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              paddingVertical: 15,
              marginVertical: 15,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 16,
            }}
            onPress={() => navigation.navigate('Menu')}>
            <Text style={{ color: '#32BA7C', fontSize: 18, fontWeight: '700' }}>
              BACK TO HOME
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Token;

const styles = StyleSheet.create({});
