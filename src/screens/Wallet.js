import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import MyStatusBar from '../components/StatusBar';
import { COLORS } from '../constants/theme';
import { SIZES } from '../constants/theme';
import walletcard from '../../assets/images/walletcard.png';
import { LeftArrow } from '../../assets/icons';

const WalletHeader = ({ route, navigation }) => {
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
        <Text style={styles.orderDetailscartheadertext}>Wallet</Text>
      </View>
    </View>
  );
};

const AddMoney = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.confirmbutton}
      onPress={() => navigation.navigate('AddPayment')}>
      <Text style={styles.addMoney}>+ Add Money</Text>
    </TouchableOpacity>
  );
};
const RecentTransation = () => {
  return (
    <View style={styles.recentTransationview}>
      <Text style={styles.recentTransationtext}>Recent Transactions 💸</Text>
    </View>
  );
};
const WalletContent = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* first half screen  */}
      <View style={styles.walletContentview}>
        <Image source={walletcard} style={styles.walletcardimage} />
        <Text style={styles.ewalletext}>eCanteen Wallet</Text>
        <Text
          style={{
            position: 'absolute',
            fontSize: 14,
            paddingHorizontal: 30,
            paddingVertical: 115,
            color: '#FFFFFF',
            fontWeight: '400',
          }}>
          Wallet Balance
        </Text>
        <Text
          style={{
            position: 'absolute',
            fontSize: 40,
            paddingHorizontal: 30,
            paddingVertical: 155,
            color: '#FFFFFF',
            fontWeight: '700',
          }}>
          ₹1200
        </Text>
        <AddMoney navigation={navigation} />
      </View>
      {/* bottom half screen  */}
      <View style={{ flex: 1 }}>{/* <RecentTransation /> */}</View>
    </View>
  );
};
const Wallet = ({ navigation }) => {
  return (
    <>
      <WalletContent navigation={navigation} />
    </>
  );
};

export default Wallet;

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
    flex: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  orderDetailscartheadertext: {
    fontSize: SIZES.large * 2,
    color: 'white',
    fontWeight: 'bold',
  },
  confirmbutton: {
    backgroundColor: '#32BA7C',
    paddingVertical: 15,
    marginVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 14,
  },
  addMoney: { color: 'white', fontSize: 18, fontWeight: '700' },
  recentTransationview: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  recentTransationtext: { fontWeight: '700', fontSize: 22 },
  walletContentview: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 16,
  },
  walletcardimage: {
    width: '100%',
    borderRadius: 10,
  },
  ewalletext: {
    position: 'absolute',
    fontSize: 24,
    paddingHorizontal: 30,
    paddingVertical: 30,
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
