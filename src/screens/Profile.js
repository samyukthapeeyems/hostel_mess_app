import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import { COLORS } from '../constants/theme';
import { WalletCard } from '../../assets/icons';
import Button from '../components/Button';
import useAuth from '../contexts/AuthContext';

const Transactions = [
  {
    id: 212,
    day: 'Tuesday',
    date: '01-01-2022',
    cost: 300,
  },
  {
    id: 252,
    day: 'Monday',
    date: '31-12-2022',
    cost: 50,
  },
  {
    id: 272,
    day: 'Monday',
    date: '31-12-2021',
    cost: 50,
  },
  {
    id: 292,
    day: 'Friday',
    date: '01-01-2022',
    cost: 500,
  },
  {
    id: 152,
    day: 'Monday',
    date: '31-12-2022',
    cost: 50,
  },
  {
    id: 472,
    day: 'Monday',
    date: '31-12-2021',
    cost: 50,
  },
  {
    id: 792,
    day: 'Friday',
    date: '01-01-2022',
    cost: 500,
  },
];
const UserInfoCard = ({ signOut, user }) => {
  return (
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
            {user.email.length < 35
              ? `${user.email}`
              : `${user.email.substring(0, 14)}...`}
          </Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        {/* <View style={styles.buttonContainer}>
          <Text>LOG OUT</Text>
        </View> */}
        <Button
          style={styles.buttonContainer}
          onPress={async () => await signOut()}
          textStyle={styles.logOutText}>
          LOG OUT
        </Button>
      </View>
    </View>
  );
};
const TransactionHeader = () => {
  return (
    <View style={{ paddingVertical: 15 }}>
      <Text style={{ fontSize: 20, fontWeight: '700', color: COLORS.black }}>
        Recent Transactions
      </Text>
    </View>
  );
};
const TransactionCard = ({ item }) => {
  return (
    <View style={styles.transactionContainer}>
      <View style={styles.transactionIcon}>
        <Text>Icon</Text>
      </View>
      <View style={styles.transactionDate}>
        <Text style={styles.day}>{item.day}, </Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={styles.cost}>
        <Text style={styles.costText}>${item.cost}</Text>
      </View>
    </View>
  );
};
const seperator = () => <View style={styles.seperator} />;
const TransactionDetails = () => {
  return (
    <>
      <FlatList
        data={Transactions}
        renderItem={({ item }) => <TransactionCard item={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={seperator}
        ListHeaderComponent={<TransactionHeader />}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};
const WalletCardSection = () => {
  return (
    <View style={styles.walletSectionContainer}>
      <View style={styles.walletCardContainer}>
        <WalletCard />
      </View>
      <Button style={styles.addMoneyButton} textStyle={styles.addMoneyText}>
        + Add Money
      </Button>
    </View>
  );
};
const Profile = () => {
  const { signOut, user } = useAuth();

  return (
    <ScrollView style={{ flex: 1 }}>
      <UserInfoCard signOut={signOut} user={user} />
      <WalletCardSection />
      <TransactionDetails />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  cardContainer: {
    // backgroundColor: 'green',
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
    fontSize: 24,
    fontWeight: '700',
  },
  buttonContainer: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12.5,
  },
  email: {
    fontSize: 12,
    fontWeight: '400',
    opacity: 0.5,
  },
  walletSectionContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 15,
    marginTop: 15,
  },
  walletCardContainer: {
    alignItems: 'center',
    // justifyContent: 'center'
  },
  addMoneyButton: {
    backgroundColor: COLORS.green,
    paddingVertical: 15,
    marginVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  addMoneyText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  transactionContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  transactionIcon: {
    flex: 1,
    // backgroundColor: 'blue',
    // justifyContent: 'flex-start',
  },
  transactionDate: {
    flex: 3,
    // backgroundColor: 'cyan',
    flexDirection: 'row',
  },
  cost: {
    flex: 1,
    // backgroundColor: 'green'
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
