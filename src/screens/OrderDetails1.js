import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

import Button from '../components/Button';
import { COLORS } from '../constants/theme';

import firestore from '@react-native-firebase/firestore';
import InfoCard from '../components/InfoCard';

const ListHeader = () => (
  <View style={styles.listHeaderContainer}>
    <View style={styles.leftContainer}>
      <Text style={styles.headerText}>Item Name</Text>
    </View>
    <View style={styles.centerContainer}>
      <Text style={styles.headerText}>Qty</Text>
    </View>
    <View style={styles.rightContainer}>
      <Text style={styles.headerText}>Price</Text>
    </View>
  </View>
);

const DetailsCard = ({ item }) => {
  console.log(item);
  return (
    <View style={styles.listContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.text}>{item.quantity}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text}>{item.totalPrice}</Text>
      </View>
    </View>
  );
};

const Total = ({ total }) => {
  return (
    <View style={styles.totalContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.totalText}>Total</Text>
      </View>
      <View style={styles.centerContainer}></View>
      <View style={styles.rightContainer}>
        <Text style={styles.totalCostText}>₹{total}</Text>
      </View>
    </View>
  );
};

export default function OrderDetails1({ route, navigation }) {
  const [orderList, setOrderList] = useState([]);
  // let orderList = route.params.orderList;
  // calculate total from the orderlist by mapping
  let total = orderList ? orderList.reduce((a, b) => a + b.totalPrice, 0) : 0;

  console.log('order id in order details page:', route.params.orderId);

  // fetch the order list from the database using the order id
  useEffect(() => {
    firestore()
      .collection('orders')
      .doc(route.params.orderId)
      .get()
      .then(result => {
        let orderData = result.data();
        console.log('orderData is: ', orderData);
        setOrderList(orderData.orderList);
        console.log('orderList is:', orderList);
      });
    // fetch the item names from the database using the item id from the order list
  }, []);

  return (
    <View>
      <FlatList
        data={orderList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <DetailsCard item={item} />}
        ListHeaderComponent={<ListHeader />}
        ListFooterComponent={<Total total={total} />}
        style={styles.detailsContainer}
      />
      <View style={styles.disclaimerBox}>
        <InfoCard
          emoji="❌"
          info="Order Cancellation Not Allowed due to Canteen Policies"
          color="#E24C4B26"
          borderColor="#E24C4B"
          fontColor="#E24C4B"
        />

        <InfoCard
          emoji="🧾"
          info="Only Generate the Token When You Reach the Counter"
        />

        <InfoCard
          emoji="⏱️"
          info="The Token will Auto-Expire in 30s after Clicking Generate Token"
        />
      </View>

      <Button
        style={styles.confirmbutton}
        textStyle={styles.confirmButtonText}
        onPress={async () => {
          navigation.navigate('Token');
        }}>
        GENERATE TOKEN
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  listHeaderContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 15,
  },
  listContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 10,
  },
  totalContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginTop: 10,
  },
  leftContainer: {
    flex: 3,
    backgroundColor: 'white',
  },
  centerContainer: {
    alignItems: 'flex-end',
    flex: 1,
    backgroundColor: 'white',
  },
  rightContainer: {
    alignItems: 'flex-end',

    flex: 1,
    backgroundColor: 'white',
  },
  renderseperatorview: {
    backgroundColor: '#d9d9d9',
    height: 1,
    marginBottom: 10,
  },
  text: {
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
  },
  headerText: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
  },
  totalText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    opacity: 0.5,
  },
  totalCostText: {
    color: 'limegreen',
    fontSize: 24,
    fontWeight: '700',
  },

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
  disclaimerBox: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 15,
    marginBottom: 20,
  },
});
