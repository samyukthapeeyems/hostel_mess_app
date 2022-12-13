import { View, StyleSheet, FlatList, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

import firestore from '@react-native-firebase/firestore';
import { useNetInfo } from '@react-native-community/netinfo';

import useCart from '../contexts/CartContext';

import { useItems } from '../functions/items';

import MenuItem from '../components/MenuItem';
import CartBanner from '../components/CartBanner';
import SearchBar from '../components/SearchBar';
import Banner from '../components/Banner';
import { COLORS } from '../constants/theme';

const Menu = ({ navigation }) => {
  const [itemList, setItemList] = useState([]);
  const [query, setQuery] = useState('');

  const { items } = useCart();
  const { searchItems, mapItemWithDocId } = useItems();
  const netinfo = useNetInfo();

  const onResult = snapShot => {
    let items = mapItemWithDocId(snapShot);
    setItemList(items);
  };

  function onError(error) {
    console.error(error);
  }

  useEffect(() => {
    console.log(query);
    if (!query) {
      const itemCleanUp = firestore()
        .collection('items')
        .orderBy('isAvailable', 'desc')
        .onSnapshot(onResult, onError);
      return itemCleanUp;
    } else {
      searchItems(query).then(snapShot => onResult(snapShot));
    }
  }, [query]);
  return (
    <>
      <View style={styles.menuPageContent}>
        <FlatList
          data={itemList}
          renderItem={({ item }) => <MenuItem item={item} />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={<View style={styles.seperator} />}
          ListHeaderComponent={
            <>
              <SearchBar
                setter={setQuery}
                placeholderText={'Porotta Dosa ...'}
              />
              <Text style={styles.orderText}>Order your food 🍛</Text>
            </>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>

      {!netinfo.isConnected && <Banner>🔌 Oops!!! Connection lost</Banner>}
      {Object.keys(items).length > 0 && (
        <CartBanner navigation={navigation} count={Object.keys(items).length} />
      )}
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuPageContent: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
  },
  seperator: {
    backgroundColor: '#d9d9d9',
    height: 0.5,
  },
  orderText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginBottom: 5,
  },
});
