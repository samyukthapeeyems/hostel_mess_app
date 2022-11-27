import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MyStatusBar from '../components/StatusBar';
import { COLORS } from '../constants/theme';
import { LeftArrow } from '../../assets/icons';
import React from 'react';

const AddPaymentHeader = ({ route, navigation }) => {
  // const { Itemid } = route.params;
  console.log(route);
  return (
    <View style={styles.orderDetailscontainer}>
      <View style={styles.orderDetailsbackbutton}>
        {
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LeftArrow />
          </TouchableOpacity>
        }
      </View>
      <View style={styles.orderDetailscartheaderview}>
        <Text style={styles.orderDetailscartheadertext}>Add Payment</Text>
      </View>
    </View>
  );
};

const PayNow = () => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: '#32BA7C',
        marginBottom: 35,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
      }}>
      <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>
        Pay Now
      </Text>
    </View>
  );
};

const PaymentContent = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2 }}></View>

      <View style={{ flex: 3, alignItems: 'center' }}>
        <Text style={{ color: '#0C0F17', opacity: 0.5, fontSize: 14 }}>
          You’re Paying
        </Text>
        <Text style={{ color: 'black', fontSize: 48, fontWeight: '700' }}>
          ₹12,000
        </Text>
      </View>

      <PayNow />
    </View>
  );
};

const AddPayment = ({ navigation }) => {
  return (
    <>
      <MyStatusBar backgroundColor={COLORS.blue} barStyle="light-content" />
      <AddPaymentHeader navigation={navigation} />
      <PaymentContent />
    </>
  );
};

const styles = StyleSheet.create({
  orderDetailscontainer: {
    flexDirection: 'row',
    height: 75,
    backgroundColor: '#3358F9',
  },
  orderDetailsbackbutton: {
    backgroundColor: '#3358F9',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  orderDetailscartheaderview: {
    backgroundColor: '#3358F9',
    flex: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  orderDetailscartheadertext: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
});

export default AddPayment;
