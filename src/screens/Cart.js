import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { LeftArrow } from '../../assets/icons';
import { COLORS } from '../constants/theme';
import useCart from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import { useItems } from '../functions/items';
import Listheader from '../components/Listheader';
import Button from '../components/Button';
// I'll clean this later (function), works for now

const OrderList = ({ items }) => (
  <View style={{ backgroundColor: 'white', flex: 1 }}>
    <FlatList
      data={items}
      renderItem={({ item }) => <CartItem item={item} />}
      keyExtractor={item => item.id}
      ListHeaderComponent={<Listheader />}
    />
    {/* <CartItem item={item} /> */}
  </View>
);

export default function Cart({ navigation, route }) {
  const [itm, setItm] = useState();
  const { items, totalAmount } = useCart();
  const { getItemList, mapItemWithItemId } = useItems();

  useEffect(() => {
    async function x() {
      // I'll clean this later, works for now
      try {
        let itemIdList = items.map(item => item.id);
        let e = await getItemList(itemIdList);
        e = mapItemWithItemId(e);
        e.forEach((p, ind) => {
          let { quantity } = items.find(item => item.id === p.id);
          e[ind] = {
            ...p,
            price: quantity * p.price,
          };
        });
        setItm(e);
      } catch (err) {
        console.log(err);
      }
    }
    x();

    // I'll clean this later (function), works for now
  }, [totalAmount]);
  return (
    <>
      <OrderList items={itm} />
      <View style={{ backgroundColor: 'white' }}>
        <Button
          style={styles.confirmbutton}
          textStyle={styles.confirmButtonText}
          onPress={() => navigation.navigate('Payment')}>
          CONFIRM ORDER
        </Button>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
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
