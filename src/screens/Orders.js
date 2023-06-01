import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import useAuth from '../contexts/AuthContext';
import EmojiPlaceHolder from '../components/EmojiPlaceholder';

export default function Orders({ navigation }) {
  let { navigate } = navigation;
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastDocument, setLastDocument] = useState();

  const { user } = useAuth();

  async function getOrders() {
    console.log('LOAD DATA');
    let query = firestore()
      .collection('orders')
      .where('user', '==', user.uid)
      .orderBy('placed_at', 'desc');

    if (lastDocument !== undefined) query = query.startAfter(lastDocument);

    let snapShot = await query.limit(10).get();

    setLastDocument(snapShot.docs.at(-1));

    let _orders = [];

    snapShot.forEach(order => {
      _orders.push(order.data());
    });

    setOrders([...orders, ..._orders]);

    console.log('lastDoc : ', lastDocument);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <FlatList
      data={orders}
      keyExtractor={(item, index) => index.toString()}
      renderItem={item => <OrderCard item={item} />}
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={<View style={styles.seperator} />}
      onEndReachedThreshold={0.2}
      onEndReached={getOrders}
    />
  );

  function OrderCard({ item }) {
    let { item: element } = item;
    return (
      <View style={styles.containertop}>
        <View style={styles.container1}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <EmojiPlaceHolder />
          </View>
          <View style={styles.container2}>
            <Text style={styles.ordertext}>#{element.id}</Text>
            <Text style={styles.ordertitle}>{element.items.length} Items</Text>
          </View>
          <View style={styles.container3}>
            <Text style={styles.ordertime}>
              {element.placed_at
                .toDate()
                .toLocaleDateString(undefined, { dateStyle: 'short' })}
            </Text>
            <Text style={styles.ordercost}>₹{element.total_amount}</Text>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => navigate('OrderDetails', { item: element })}>
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
