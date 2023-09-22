import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

import useAuth from '../contexts/AuthContext';
import firestore from '@react-native-firebase/firestore';

import { COLORS } from '../constants/theme';

import YellowWallet from '../../assets/images/YellowWallet.png';
import { Transactiongreen } from '../../assets/icons';
import QRCode from 'react-native-qrcode-svg';

import Button from '../components/Button';
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

const WalletCardSection = ({ wallet }) => {
  return (
    <View style={styles.walletSection}>
      <View>
        <Image source={YellowWallet} style={styles.imgCard} />
        <Text style={styles.walletText}>eCanteen Wallet</Text>
        <View style={styles.qrContainer}>
          <QRCode
            // value={wallet.walletId}
            value="dhfkjhdfj"
            size={100}
            color={COLORS.white}
            backgroundColor="transparent"
            logoSize={30}
          />
        </View>
        <Text style={styles.balanceTitle}>Wallet Balance</Text>
        <Text style={styles.balance}>₹{wallet.balance}</Text>
      </View>

      <InfoCard
        emoji="🚀"
        info="Share the QR code to Add Money to your Wallet"
      />
    </View>
  );
};

const UserDetailsCard = () => {
  const { signOut, user } = useAuth();

  return (
    <View style={styles.userInfoContainer}>
      <View style={styles.userDetails}>
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: user.photoURL }}
            resizeMode="contain"
            style={styles.userImg}
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
        <View style={styles.buttonContainer}>
          <Button
            style={styles.logOutButton}
            onPress={async () => await signOut()}
            textStyle={styles.logOutText}>
            LOG OUT
          </Button>
        </View>
      </View>
    </View>
  );
};

export default function Profile() {
  const { user } = useAuth();
  const [wallet, setWallet] = useState({});
  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    let txnList = [];

    firestore()
      .collection('wallet')
      .where('userId', '==', user.uid)
      .get()
      .then(result => {
        result = result.docs[0];
        let walletData = {
          balance: result.data().balance,
          walletId: result.id,
        };
        setWallet(walletData);
        firestore()
          .collection('transaction')
          .where('instrumentId', '==', walletData.walletId)
          .get()
          .then(result => {
            if (result.docs.length === 0) console.log('no txn');
            else {
              for (const txn of result.docs) txnList.push(txn.data());
              setTransactionList(txnList);
            }
          });
      });

    console.log('transaction data is: ', transactionList);
  }, []);

  return (
    <>
      <UserDetailsCard />
      <WalletCardSection wallet={wallet} />
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
  userInfoContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  userDetails: {
    flex: 2,
    // justifyContent: 'center',
    flexDirection: 'row',
  },
  imgContainer: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.yellow,
  },
  detailsContainer: {
    marginLeft: 15,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  name: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '700',
  },
  email: {
    color: COLORS.black,
    fontSize: 12,
    fontWeight: '400',
    opacity: 0.5,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  logOutButton: {
    backgroundColor: COLORS.red,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12.5,
  },
  logOutText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '700',
  },
  walletSection: {
    backgroundColor: 'white',
    marginTop: 15,
    paddingHorizontal: 16,
    paddingVertical: 15,
    // flexDirection: 'row',
  },
  imgCard: {
    width: '100%',
    borderRadius: 20,
  },
  walletText: {
    position: 'absolute',
    color: COLORS.white,
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  qrContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 20,
  },
  balanceTitle: {
    position: 'absolute',
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 73,
    color: COLORS.white,
    fontWeight: '400',
  },
  balance: {
    position: 'absolute',
    fontSize: 40,
    paddingHorizontal: 20,
    paddingVertical: 86,
    color: COLORS.white,
    fontWeight: '700',
  },
  transactionContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  transactionIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionDate: {
    flex: 2,
    justifyContent: 'center',
  },
  transactionType: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.black,
  },
  cost: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  costText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.black,
  },
  date: {
    fontSize: 16,
    fontWeight: '400',
  },
  seperator: {
    backgroundColor: '#d9d9d9',
    height: 0.5,
  },
  transactionHeaderContainer: { paddingVertical: 15 },
  transactionHeaderText: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.black,
  },
  flatList: {
    marginTop: 15,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
});
