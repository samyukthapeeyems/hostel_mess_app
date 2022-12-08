import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

// const OrderMenu = [
//   {
//     id: 212,
//     title: '4 item',
//     foodtime: 'Breakfast',
//     cost: 30,
//     time: '28-10-2022',
//   },
//   {
//     id: 213,
//     title: '3 item',
//     foodtime: 'Lunch',
//     cost: 30,
//     time: '28-10-2022',
//   },
//   {
//     id: 214,
//     title: '2 item',
//     foodtime: 'Dinner',
//     cost: 30,
//     time: '28-10-2022',
//   },
//   {
//     id: 216,
//     title: '4 item',
//     foodtime: 'Breakfast',
//     cost: 30,
//     time: '28-10-2022 ',
//   },

// ];
const OrderCard = ({ item, navigate }) => {
  let { item: element } = item;
  return (
    <View style= {styles.containertop}>
    <View style={styles.container1}>
      <View style={styles.container2}>
        <Text style={styles.ordertext}>Order ID : {element.id}</Text>
        <Text style={styles.ordertitle} numberOfLines={1}>
          {element.title}
        </Text>
      </View>
      <View style={styles.container3}>
        <Text style={styles.ordertime}>{element.time}</Text>
        <Text style={styles.ordercost}>₹{element.cost}</Text>

        <TouchableOpacity
          style={styles.touch}
          onPress={() => navigate('OrderDetails', { Itemid: element.id })}>
          <Text style={styles.textviewdetails}>VIEW DETAILS</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

const Orders = ({ navigation }) => {
  let { navigate } = navigation;
  const [orders, setOrders]=useState ([])
  useEffect( () => {
    firestore()
    .collection ('orders')
    .orderBy('placed_at', 'desc').get().then(data => console.log(data)) 
  }

  )
  return (
    <FlatList
      data={orders}
      keyExtractor={item => item.id}
      renderItem={item => <OrderCard navigate={navigate} item={item} />}
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={<View style={styles.seperator} />}
    />
  );
};

export default Orders;

const styles = StyleSheet.create({
  containertop : {flexDirection : 'column', },
  container1: { flexDirection: 'row', padding: 5 },
  container2: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 10,
  },
  ordertext: {
    fontWeight: '400',
    fontSize: 12,
    color: 'black',
    marginBottom: 5,
  },

  ordertitle: {
    fontWeight: '700',
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
    color: '#0C0F17',
    marginBottom: 5,
  },
  ordercost: {
    fontWeight: '700',
    fontSize: 30,
    color: '#32BA7C',
    marginBottom: 5,
  },
  touch: { borderRadius: 8, justifyContent: 'center' },
  textviewdetails: {
    fontWeight: '400',
    fontSize: 10,
    color: '#3358F9',
    marginTop: 5,
  },
  flatList: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  seperator: { backgroundColor: '#d9d9d9', height: 2 },
});
