import React, { useEffect, useState } from 'react';
import useCart from '../contexts/CartContext';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { COLORS } from '../constants/theme';

import { GreenButton } from '../../assets/icons';
import ItemCounter from './ItemCounter';
import Image from './Image';

export default function MenuItem({ item }) {
  const { items, addToCart, removeFromCart, totalAmount } = useCart();
  const [count, setCount] = useState();

  useEffect(() => {
    let _item = items.find(element => element.id == item.id);
    if (_item?.quantity) setCount(_item.quantity);
    else setCount(0);
  }, [totalAmount]);

  return (
    <View style={styles.menuItemContainer}>
      {/* left item  */}
      <View style={styles.leftSection}>
        <Image path={item.image} />
      </View>
      {/* center item  */}
      <View style={styles.centerSection}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.detailsText} numberOfLines={2}>{item.description}</Text>
        <Text style={styles.costText}>₹{item.price}</Text>
      </View>
      {/* right item  */}
      <View style={styles.rightSection}>
        {count === 0 ? (
          <TouchableOpacity
            onPress={async () => await addToCart(item.id, item.price)}>
            <GreenButton />
          </TouchableOpacity>
        ) : (
          <ItemCounter
            count={count}
            handleAddItems={() => addToCart(item.id, item.price)}
            handleRemoveItems={() => removeFromCart(item.id, item.price)}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuItemContainer: {
    marginVertical: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'red',
  },
  leftSection: {
    justifyContent: 'center',
    padding: 5,
  },
  centerSection: {
    flex: 2,
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  rightSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  costText: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.green,
  },
  detailsText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'gray',
  },
  itemTitle: { fontSize: 18, fontWeight: '700', color: COLORS.black },
});
