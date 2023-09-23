import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../constants/theme';
import QRCode from 'react-native-qrcode-svg';

import InfoCard from '../components/InfoCard';
import MiniInfoCard from '../components/MiniInfoCard';
import _Button from '../components/Button';

const canteenItems = [
  {
    name: 'Burger',
    quantity: 2,
    price: 5.99,
  },
  {
    name: 'Pizza',
    quantity: 1,
    price: 8.49,
  },
  {
    name: 'Fries',
    quantity: 3,
    price: 2.99,
  },
  {
    name: 'Chicken Nuggets',
    quantity: 2,
    price: 4.99,
  },
  {
    name: 'Spaghetti',
    quantity: 1,
    price: 7.99,
  },
  {
    name: 'Soda',
    quantity: 4,
    price: 1.49,
  },
  {
    name: 'Salad',
    quantity: 2,
    price: 6.99,
  },
  {
    name: 'Sandwich',
    quantity: 1,
    price: 5.49,
  },
  {
    name: 'Chicken Wrap',
    quantity: 2,
    price: 6.99,
  },
  {
    name: 'Milkshake',
    quantity: 1,
    price: 3.99,
  },
  {
    name: 'Hot Dog',
    quantity: 2,
    price: 4.49,
  },
  {
    name: 'Nachos',
    quantity: 1,
    price: 4.99,
  },
  {
    name: 'Ice Cream',
    quantity: 3,
    price: 2.49,
  },
  {
    name: 'French Toast',
    quantity: 2,
    price: 5.99,
  },
  {
    name: 'Biryani',
    quantity: 2,
    price: 5.99,
  },
];

const BillDetails = () => {
  const [expandedView, setExpandedView] = useState(false);
  return expandedView ? (
    <ExpandedBillDetails
      expandedView={expandedView}
      setExpandedView={setExpandedView}
    />
  ) : (
    <View style={styles.billDetails}>
      <View style={styles.detailedInfo}>
        <Text style={styles.infoTitle}>ORDER ID</Text>
        <Text style={styles.info}>sbdwbdwydwbd</Text>
      </View>
      <View>
        <Button
          onPress={() => {
            console.log('Expand button');
            setExpandedView(true);
          }}
          title="Expand"
        />
      </View>
    </View>
  );
};

const ExpandedBillDetails = ({ expandedView, setExpandedView }) => {
  return (
    <View style={styles.billDetails}>
      {/* <Text> Bill details card</Text> */}
      <View style={styles.qrContainer}>
        <QRCode
          value="dhfkjhdfj"
          size={100}
          color={COLORS.black}
          backgroundColor="transparent"
          logoSize={30}
        />
      </View>
      <View style={styles.detailedInfo}>
        <Text style={styles.infoTitle}>ORDER ID</Text>
        <Text style={styles.info}>sbdwbdwydwbd</Text>
        <Text style={styles.infoTitle}>TIME</Text>
        <Text style={styles.info}>12th Aug, 11:59 PM</Text>
        <Text style={styles.infoTitle}>STATUS</Text>
        <View style={styles.statusContainer}>
          <MiniInfoCard
            info="Payment Failed"
            color="#E24C4B26"
            borderColor="#E24C4B"
            fontColor="#E24C4B"
          />
          <MiniInfoCard
            info="Order Cancelled"
            color="#E24C4B26"
            borderColor="#E24C4B"
            fontColor="#E24C4B"
          />
        </View>
      </View>
      <View>
        <Button
          onPress={() => {
            console.log('Minimize button');
            setExpandedView(false);
          }}
          title="Minimize"
        />
      </View>
    </View>
  );
};

const DetailsCard = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.vegContainer}>
        <Text style={styles.text}>{item.veg ? '🥬' : '🍗'}</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <View style={styles.qtyContainer}>
        <Text style={styles.text}>{item.quantity}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.text}>₹{item.price}</Text>
      </View>
    </View>
  );
};

const Total = ({ total }) => {
  return (
    <>
      <Text>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - -
      </Text>
      <View style={styles.itemContainer}>
        <View style={styles.totalTitle}>
          <Text style={styles.totalText}>Total</Text>
        </View>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.total}>₹{total}</Text>
        </View>
      </View>
    </>
  );
};

const OrderDetails = ({ route, item, navigation }) => {
  const [orderList, setOrderList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setOrderList(canteenItems);

    let totalAmount = orderList
      ? orderList.reduce((a, b) => a + b.price, 0)
      : 0;
    setTotal(totalAmount);
  }, []);

  return (
    <>
      <ScrollView>
        <Text style={[styles.text, { padding: 6 }]}>BILL DETAILS</Text>
        <BillDetails />

        <FlatList
          data={orderList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <DetailsCard item={item} />}
          nestedScrollEnabled={false}
          ListFooterComponent={<Total total={total} />}
          style={styles.detailsContainer}
        />
      </ScrollView>
      <_Button
        style={styles.confirmbutton}
        textStyle={styles.confirmButtonText}
        onPress={async () => {
          navigation.navigate('Token', {
            total: total,
          });
        }}>
        GENERATE TOKEN
      </_Button>
    </>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 16,
    // paddingVertical: 15,
    backgroundColor: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  vegContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },

  nameContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  qtyContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  priceContainer: {
    flex: 0.25,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    colo: COLORS.black,
  },
  totalTitle: {
    flex: 1,
    justifyContent: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.black,
  },
  totalPriceContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  total: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.black,
  },
  billDetails: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  qrContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  detailedInfo: {
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 15,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.black,
    opacity: 0.5,
  },
  info: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.black,
  },
  statusContainer: {
    // backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
});
