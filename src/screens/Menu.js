import { View, StyleSheet, FlatList, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import useCart from '../contexts/CartContext';
import MyStatusBar from '../components/MyStatusBar';
import MenuItem from '../components/MenuItem';

import { COLORS } from '../constants/theme';
import Header from '../components/Header';
import CartBanner from '../components/CartBanner';
import SearchBar from '../components/SearchBar';
import { useItems } from '../functions/items';

const Menu = ({ navigation }) => {
  const [itemList, setItemList] = useState([]);
  const [query, setQuery] = useState('');

  const { items } = useCart();
  const { searchItems } = useItems();

  const onResult = snapShot => {
    let items = [];
    snapShot.forEach(item => {
      items.push({
        id: item.id,
        ...item.data(),
      });
    });
    setItemList(items);
  };

  function onError(error) {
    console.error(error);
  }

  useEffect(() => {

    if (!query) {
      const itemCleanUp = firestore()
        .collection('items')
        .onSnapshot(onResult, onError);

      return itemCleanUp;
    }
    else {
      searchItems(query)
      .then(snapShot => onResult(snapShot))
    }

  }, [query]);

  return (
    <>
      <MyStatusBar backgroundColor={COLORS.blue} barStyle="light-content" />
      <Header navigation={navigation} />
      <View style={styles.menuPageContent}>

        <FlatList
          data={itemList}
          renderItem={({ item }) => <MenuItem item={item} />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={
            <View style={styles.seperator} />
          }
          ListHeaderComponent={
            <SearchBar
              setter={setQuery}
              placeholderText={'🔍 Porotta Dosa ...'}
            />
          }
          showsVerticalScrollIndicator={false}
        />
        
      </View>

      {items.length > 0 && (
        <CartBanner navigation={navigation} count={items.length} />
      )}

    </>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuPageContent: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  seperator: {
    backgroundColor: '#d9d9d9',
    height: 1.5
  }
});
