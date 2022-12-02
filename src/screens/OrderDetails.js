import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';

import { COLORS } from '../constants/theme';

import Listheader from '../components/Listheader';

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

const renderseperator = () => {
  return <View style={styles.renderseperatorview} />;
};
const OrderDetailsContent = ({ item }) => {
  let { item: element } = item;
  return (
    <View>
      <View style={styles.ODCouterView}>
        <View style={styles.ODCtitleView}>
          <Text style={styles.ODCtitletext}>{element.title}</Text>
        </View>
        <View style={styles.ODCqtyview}>
          <Text style={styles.ODCqtytext}>{element.qty}</Text>
        </View>
        <View style={styles.ODCpriceview}>
          <Text style={styles.ODCpricetext}>₹{element.price}</Text>
        </View>
      </View>
    </View>
  );
};

const Total = () => {
  return (
    <View style={styles.Touterview}>
      <View style={styles.Ttotalview}>
        <Text style={styles.Ttotaltext}>Total</Text>
      </View>
      <View style={styles.Trsview}>
        <Text style={styles.Trstext}>₹10</Text>
      </View>
    </View>
  );
};
const GenerateToken = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.GTtouchble}
      onPress={() => navigation.navigate('Token')}>
      <Text style={styles.GTtext}>Generate Token</Text>
    </TouchableOpacity>
  );
};
const OrderDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.ODouterview}>
      <View style={styles.ODbillview}>
        <View>
          <Text style={styles.ODbilltext}>BILL DETAILS</Text>
          <View>
            <FlatList
              data={Orderstack}
              keyExtractor={item => item.id}
              renderItem={item => <OrderDetailsContent item={item} />}
              ListHeaderComponent={<Listheader />}
              ItemSeparatorComponent={renderseperator}
              ListFooterComponent={<Total />}
            />
          </View>
        </View>
      </View>
      <View style={styles.lastview}>
        <GenerateToken navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  renderseperatorview: { backgroundColor: '#d9d9d9', height: 1 },
  ODCouterView: { flexDirection: 'row' },
  ODCtitleView: { flex: 3, paddingLeft: 14, paddingVertical: 5 },
  ODCtitletext: { color: COLORS.black, fontWeight: '700' },
  ODCqtyview: { flex: 1, paddingVertical: 5, alignItems: 'center' },
  ODCqtytext: { color: COLORS.black, fontWeight: '700' },
  ODCpriceview: {
    flex: 1,
    paddingVertical: 5,
    alignItems: 'flex-end',
    paddingRight: 15,
  },
  ODCpricetext: { color: COLORS.black, fontWeight: '700' },
  Touterview: { flex: 1, flexDirection: 'row' },
  Ttotalview: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    paddingTop: 5,
  },
  Ttotaltext: {
    color: COLORS.black,
    fontWeight: '700',
    opacity: 0.5,
    fontSize: 16,
  },
  Trsview: { flex: 1, alignItems: 'flex-end', paddingHorizontal: 10 },
  Trstext: { color: COLORS.green, fontSize: 24, fontWeight: '700' },
  GTtouchble: {
    backgroundColor: '#32BA7C',
    paddingVertical: 15,
    marginVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  GTtext: { color: 'white', fontSize: 18, fontWeight: '700' },
  ODouterview: { flex: 1 },
  ODbillview: { flex: 1 },
  ODbilltext: {
    paddingTop: 20,
    paddingHorizontal: 10,
    fontWeight: '400',
    fontSize: 12,
    color: COLORS.black,
  },
  lastview: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
