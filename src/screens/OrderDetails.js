import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

import { COLORS } from '../constants/theme';

import useCart from '../contexts/CartContext';
import { FirebaseStorageTypes } from '@react-native-firebase/storage';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { useItems } from '../functions/items';

const Orderstack = [
  {
    id: 1,
    title: 'Porotta',
    qty: 1,
    price: 10,
  },
  {
    id: 2,
    title: 'Chiken Curry',
    qty: 1,
    price: 8,
  },
  {
    id: 3,
    title: 'Tea',
    qty: 1,
    price: 9,
  },
  {
    id: 4,
    title: 'Veg Curry',
    qty: 1,
    price: 8,
  },
];

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
        <Text style={styles.text}>{item.itemId}</Text>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.text}>{item.quantity}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text}>₹56</Text>
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

export default function OrderDetails({ route, navigation }) {
  const { totalAmount } = useCart();
  const [itemDetails, setItemDetails] = useState([]);

  let order = route.params.item;
  let items = order.items;
  let total = order.total_amount;

  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <DetailsCard item={item} />}
      ListHeaderComponent={<ListHeader />}
      ItemSeparatorComponent={() => <View style={styles.renderseperatorview} />}
      ListFooterComponent={<Total total={total} />}
      style={styles.detailsContainer}
    />
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
});
