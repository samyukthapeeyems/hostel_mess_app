import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../constants/theme';
import YellowWallet from '../../assets/images/YellowWallet.png';
import useAuth from '../contexts/AuthContext';
import Button from '../components/Button';
import { Transactiongreen } from '../../assets/icons';

import firestore from '@react-native-firebase/firestore';

import QRCode from 'react-native-qrcode-svg';
import InfoCard from '../components/InfoCard';

const TransactionCard = ({ transaction }) => {
  return (
    <View style={styles.transactionContainer}>
      <View style={styles.transactionIcon}>
        <Transactiongreen />
      </View>
      <View style={styles.transactionDate}>
        <Text style={styles.date}>{transaction.transactionType}</Text>
      </View>
      <View style={styles.cost}>
        <Text style={styles.costText}>₹{transaction.amount}</Text>
      </View>
    </View>
  );
};

export default function Profile() {
  const { signOut, user } = useAuth();
  const [wallet, setWallet] = useState({});
  const [transactionList, setTransactionList] = useState([]);

  // this entire useEffect is a mess, have to clean it up (sort of works for now)
  useEffect(() => {
    let txnList = [];

    firestore().collection('wallet').where('userId', '==', user.uid).get().then(result => {
      result = result.docs[0];
      let walletData = {
        balance: result.data().balance,
        walletId: result.id,
      };
      setWallet(walletData);
      firestore().collection('transaction').where('instrumentId', '==', walletData.walletId).get().then(result => {
        if (result.docs.length === 0)
          console.log("no txn")
        else {
          for (const txn of result.docs)
            txnList.push(txn.data())
          setTransactionList(txnList);
        }
      })
    })
  }, []);

  return (
    <>
      <View style={styles.cardContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.imgContainer}>
            <Image
              source={{ uri: user.photoURL }}
              resizeMode="contain"
              style={styles.img}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.name} numberOfLines={1}>
              {user.displayName}
            </Text>
            <Text style={styles.email}>
              {' '}
              {user.email.length < 35
                ? `${user.email}`
                : `${user.email.substring(0, 28)}...`}
            </Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Button
            style={styles.buttonContainer}
            onPress={async () => await signOut()}
            textStyle={styles.logOutText}>
            LOG OUT
          </Button>
        </View>
      </View>

      <View style={styles.walletSectionContainer}>
        <View>
          <Image source={YellowWallet} style={styles.walletcardimage} />
          <Text style={styles.ewalletext}>eCanteen Wallet</Text>
          <View
            style={{
              position: 'absolute',
              alignSelf: 'flex-end',
              padding: 20,
            }}>
            <QRCode
              value={wallet.walletId}
              size={100}
              color={COLORS.white}
              backgroundColor="transparent"
              logoSize={30}
            />
          </View>
          <Text style={styles.walletBalancetitle}>Wallet Balance</Text>
          <Text style={styles.walletBalance}>
            ₹{wallet.balance}
          </Text>
        </View>

        <InfoCard emoji="🚀" info="Share the QR code to Add Money to your Wallet" />
      </View>

      <FlatList
        data={transactionList}
        renderItem={({ item }) => <TransactionCard transaction={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={<View style={styles.seperator} />}
        ListHeaderComponent={
          <View style={styles.transactionHeaderContainer}>
            <Text style={styles.transactionHeaderText}>
              Recent Transactions
            </Text>
          </View>
        }
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: 'row',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.yellow,
  },
  detailsContainer: {
    marginLeft: 15,
    flexWrap: 'wrap',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  leftContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  name: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '700',
  },
  buttonContainer: {
    backgroundColor: COLORS.red,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12.5,
  },
  email: {
    color: COLORS.black,
    fontSize: 12,
    fontWeight: '400',
    opacity: 0.5,
  },
  walletSectionContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 15,
  },
  walletcardimage: {
    width: '100%',
    borderRadius: 20,
  },
  ewalletext: {
    position: 'absolute',
    fontSize: 24,
    paddingHorizontal: 20,
    paddingVertical: 12,
    color: COLORS.white,
    fontWeight: '700',
  },
  walletBalancetitle: {
    position: 'absolute',
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 73,
    color: COLORS.white,
    fontWeight: '400',
  },
  walletBalance: {
    position: 'absolute',
    fontSize: 40,
    paddingHorizontal: 20,
    paddingVertical: 86,
    color: COLORS.white,
    fontWeight: '700',
  },
  addMoneyButton: {
    backgroundColor: COLORS.green,
    paddingVertical: 15,
    marginVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  addMoneyText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  transactionContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  transactionIcon: {
    flex: 1,
  },
  transactionDate: {
    flex: 6,
    flexDirection: 'row',
  },
  cost: {
    flex: 2,
    alignItems: 'flex-end',
  },
  transactionHeaderContainer: { paddingVertical: 15 },
  transactionHeaderText: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.black,
  },
  seperator: {
    backgroundColor: '#d9d9d9',
    height: 1,
  },
  logOutText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.white,
  },
  flatList: {
    marginTop: 15,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  costText: { fontSize: 20, fontWeight: '700', color: COLORS.green },
  day: { fontSize: 18, fontWeight: '700', color: COLORS.black },
  date: { fontSize: 18, fontWeight: '700', color: COLORS.black },
});
