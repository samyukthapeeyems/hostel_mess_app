import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MyStatusBar from '../components/StatusBar';
import { COLORS, SIZES } from '../constants/theme';
import { LeftArrow } from '../../assets/icons';

function CountDownTimer(props) {
  const [time, setTime] = React.useState(props.initialValue || 30);
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
const TokenHeader = ({ route, navigation }) => {
  // const { Itemid } = route.params;
  console.log(route);
  return (
    <View style={styles.orderDetailscontainer}>
      <View style={styles.orderDetailsbackbutton}>
        {
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>
              <LeftArrow />
            </Text>
          </TouchableOpacity>
        }
      </View>
      <View style={styles.orderDetailscartheaderview}>
        <Text style={styles.orderDetailscartheadertext}>Wallet</Text>
      </View>
    </View>
  );
};

const Token = ({ navigation }) => {
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
              $130
            </Text>
            <CountDownTimer />
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

const styles = StyleSheet.create({
  orderDetailscontainer: {
    flexDirection: 'row',
    height: 75,
    backgroundColor: COLORS.green,
  },
  orderDetailsbackbutton: {
    backgroundColor: COLORS.green,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  orderDetailscartheaderview: {
    backgroundColor: COLORS.green,
    flex: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  orderDetailscartheadertext: {
    fontSize: SIZES.large * 2,
    color: 'white',
    fontWeight: 'bold',
  },
});
