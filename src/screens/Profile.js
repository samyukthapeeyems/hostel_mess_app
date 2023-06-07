import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { COLORS } from '../constants/theme';
import YellowWallet from '../../assets/images/YellowWallet.png';
import useAuth from '../contexts/AuthContext';
import Button from '../components/Button';
import { Transactiongreen } from '../../assets/icons';

const Transactions = [
  {
    id: 212,

    date: '01-01-2022',
    cost: 300,
  },
  {
    id: 252,
    date: '31-12-2022',
    cost: 50,
  },
  {
    id: 272,
    date: '31-12-2021',
    cost: 50,
  },
  {
    id: 292,
    date: '01-01-2022',
    cost: 500,
  },
  {
    id: 152,
    date: '31-12-2022',
    cost: 50,
  },
  {
    id: 472,
    date: '31-12-2021',
    cost: 50,
  },
  {
    id: 792,
    date: '01-01-2022',
    cost: 500,
  },
];

const TransactionCard = ({ item }) => {
  return (
    <View style={styles.transactionContainer}>
      <View style={styles.transactionIcon}>
        <Transactiongreen />
      </View>
      <View style={styles.transactionDate}>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={styles.cost}>
        <Text style={styles.costText}>₹{item.cost}</Text>
      </View>
    </View>
  );
};

const WalletCardSection = () => {
  return (
    <View style={styles.walletSectionContainer}>
      <View>
        <Image source={YellowWallet} style={styles.walletcardimage} />
        <Text style={styles.ewalletext}>eCanteen Wallet</Text>
        <Text style={styles.walletBalancetitle}>Wallet Balance</Text>
        <Text style={styles.walletBalance}>₹0</Text>
      </View>
      <Button style={styles.addMoneyButton} textStyle={styles.addMoneyText}>
        + Add Money
      </Button>
    </View>
  );
};
export default function Profile() {
  const { signOut, user } = useAuth();

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

      <WalletCardSection />

      <FlatList
        data={Transactions}
        renderItem={({ item }) => <TransactionCard item={item} />}
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
