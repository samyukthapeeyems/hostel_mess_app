import { View, StyleSheet, TextInput, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import useCart from '../contexts/CartContext';

import MyStatusBar from '../components/MyStatusBar';

import { CartBanner, MenuHeader, MenuItem } from '../components/Menu';

import { COLORS } from '../constants/theme';

const SearchBar = ({ setQuery }) => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        placeholder="🔍 Porotta, Dosa ..."
        style={styles.textinput}
        placeholderTextColor="#3C3C4399"
        onChangeText={term => setQuery(term)}
      />
    </View>
  );
};

const Menu = ({ navigation }) => {
  const [itemList, setItemList] = useState([]);
  const [query, setQuery] = useState('');

  const { items } = useCart();

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
    const itemCleanUp = firestore()
      .collection('items')
      .onSnapshot(onResult, onError);

    return itemCleanUp;
  }, []);

  return (
    <>
      <MyStatusBar backgroundColor={COLORS.blue} barStyle="light-content" />
      <MenuHeader navigation={navigation} />
      <View style={styles.menuPageContent}>
        <FlatList
          data={itemList}
          renderItem={({ item }) => <MenuItem item={item} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={<SearchBar setQuery={setQuery} />}
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
  menuPageContent: { flex: 1, backgroundColor: 'white', paddingHorizontal: 15 },
  searchBarContainer: {
    width: '100%',
  },
  textinput: {
    fontSize: 18,
    backgroundColor: '#7676801F',
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 15,
    borderRadius: 10,
  },
});
