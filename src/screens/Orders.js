import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import firestore from '@react-native-firebase/firestore';

import useAuth from '../contexts/AuthContext';

import EmojiPlaceHolder from '../components/EmojiPlaceholder';

export default function Orders({ navigation }) {
  let { navigate } = navigation;
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    firestore()
      .collection('orders')
      .where('user', '==', user.uid)
      .where('status', '!=', 'Pending')
      // .orderBy('placed_at', 'desc')
      .get()
      .then(result => {
        let orders = [];
        result.docs.forEach(order => {
          orders.push({
            id: order.id,
            ...order.data(),
          });
        });
        setOrders(orders);
      });
  }, []);
  return (
    <FlatList
      data={orders}
      keyExtractor={order => order.id}
      renderItem={item => <OrderCard item={item} />}
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={<View style={styles.seperator} />}
    />
  );

  function OrderCard({ item }) {
    let { item: element } = item;
    return (
      <View style={styles.containertop}>
        <View style={styles.container1}>
          <View style={{ flex: 1.06, justifyContent: 'center' }}>
            <EmojiPlaceHolder />
          </View>
          <View style={styles.container2}>
            <Text style={styles.ordertext}>Order ID : {element.id}</Text>
            <Text style={styles.ordertitle}>{element.items.length} Items</Text>
          </View>
          <View style={styles.container3}>
            <Text style={styles.ordertime}>
              {element.placed_at.toDate().toDateString()}
            </Text>
            <Text style={styles.ordercost}>₹{element.total_amount}</Text>
            <TouchableOpacity
              style={styles.touch}
              onPress={() =>
                navigation.navigate('OrderDetails', {
                  // item: element,
                  orderId: element.id,
                })
              }>
              <Text style={styles.textviewdetails}>VIEW DETAILS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containertop: { flexDirection: 'column' },
  container1: { flexDirection: 'row', padding: 5 },
  container2: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 10,
  },
  ordertext: {
    fontWeight: '500',
    fontSize: 12,
    color: 'black',
    marginBottom: 5,
  },

  ordertitle: {
    fontWeight: '600',
    fontSize: 20,
    color: 'black',
    marginBottom: 5,
  },
  container3: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'flex-end',
  },
  ordertime: {
    fontWeight: '400',
    fontSize: 12,
    color: 'grey',
    marginBottom: 5,
  },
  ordercost: {
    fontWeight: '700',
    fontSize: 30,
    color: '#32BA7C',
    marginBottom: 5,
    // alignSelf : 'flex-start'
  },
  touch: { borderRadius: 8, justifyContent: 'center' },
  textviewdetails: {
    fontWeight: '700',
    fontSize: 10,
    color: '#3358F9',
    marginTop: 5,
  },
  flatList: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  seperator: { backgroundColor: '#d9d9d9', height: 1 },
});
