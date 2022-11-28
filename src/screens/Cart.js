import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { LeftArrow } from '../../assets/icons';
import MyStatusBar from '../components/StatusBar';
import { COLORS } from '../constants/theme';
import useCart from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import { useItems } from '../functions/items';

import Button from '../components/Button';
// I'll clean this later (function), works for now

const CartHeader = ({ navigation }) => {
  return (
    <View style={styles.cartHeadercontainer}>
      <View style={styles.cartHeaderbackbutton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrow />
        </TouchableOpacity>
      </View>
      <View style={styles.cartheaderview}>
        <Text style={styles.cartheadertext}>Cart</Text>
      </View>
    </View>
  );
};

const OrderList = ({ items }) => (
  <View style={{ backgroundColor: 'white', flex: 1 }}>
    {/* <SectionList
      sections={items}
      keyExtractor={item => item.id}
      renderItem={CartContent}
      showsVerticalScrollIndicator={false}
    /> */}
    <FlatList
      data={items}
      renderItem={({ item }) => <CartItem item={item} />}
      keyExtractor={item => item.id}
    />
    {/* <CartItem item={item} /> */}
  </View>
);





export default function Cart({ navigation, route }) {
  const [itm, setItm] = useState();
  const { items, totalAmount } = useCart();
  const { getItemList, mapItemWithItemId } = useItems()

  useEffect(() => {
    async function x() {

      // I'll clean this later, works for now
      try {
        let itemIdList = items.map(item => item.id)
        let e = await getItemList(itemIdList)
        e = mapItemWithItemId(e)
        e.forEach((p, ind) => {
          let { quantity } = items.find(item => item.id === p.id)
          e[ind] = {
            ...p,
            price: quantity * p.price
          }
        })
        setItm(e)
      } catch (err) {
        console.log(err)
      }
    }
    x()

    // I'll clean this later (function), works for now

  }, [totalAmount]);
  return (
    <>
      <MyStatusBar backgroundColor={COLORS.blue} barStyle="light-content" />
      <CartHeader navigation={navigation} />

      <OrderList items={e} />

      <Button style={styles.confirmbutton}
        textStyle={styles.confirmButtonText}>
        CONFIRM ORDER
      </Button>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  container1: {
    flex: 3,
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 15,
  },
  container2: { fontWeight: '700', fontSize: 15, color: COLORS.black },
  container2text: { fontWeight: '400', fontSize: 10, color: COLORS.black },
  buttonview: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  touch: { padding: 6 },
  size: { fontSize: 25 },
  rupee: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cartHeadercontainer: {
    flexDirection: 'row',
    height: 75,
    backgroundColor: '#3358F9',
  },
  cartHeaderbackbutton: {
    backgroundColor: '#3358F9',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  cartheaderview: {
    backgroundColor: '#3358F9',
    flex: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  cartheadertext: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },

  optDinnercontainer: { backgroundColor: 'white', padding: 15 },
  optDinnercontainer1: {
    borderRadius: 10,
    backgroundColor: '#FEF4DB',
    padding: 10,
    paddingBottom: 15,
    borderWidth: 1,
    borderColor: '#F5B80D',
  },
  optDinnerbuttonview: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  optDinneropt: { fontSize: 20, fontWeight: 'bold', color: '#F5B80D' },
  optDinnerfoodview: { alignItems: 'center', justifyContent: 'center' },
  optDinnerfoodtext: { fontSize: 10, marginLeft: 30 },

  confirmcontainer: {
    flexDirection: 'row',
    backgroundColor: '#D7F4E7',
    padding: 10,
  },
  confirmsubview1: { flex: 1 },
  confirmsubview2: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  confirmCaution: {
    backgroundColor: '#D7F4E7',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#32BA7C',
  },
  confirmCautiontext: {
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#32BA7C',
  },
  confirmbutton: {
    backgroundColor: '#32BA7C',
    paddingVertical: 15,
    marginVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },

  confirmButtonText: {
    color: 'white', fontSize: 18, fontWeight: '700'
  }
});