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
import ItemCounter from '../components/ItemCounter';
import { COLORS } from '../constants/theme';

export default function Menu({ navigation }) {
  const [itemList, setItemList] = useState([]);
  const [loading, setloading] = useState(false);
  const [query, setQuery] = useState('');

  const [count, setCount] = useState(0);

  const { items } = useCart();
  const { searchItems, mapItemWithDocId, loadItemBundle, getAllItems } =
    useItems();
  const netinfo = useNetInfo();

  const onResult = snapShot => {
    let items = mapItemWithDocId(snapShot);
    setItemList(items);
  };

  function onError(error) {
    console.error(error);
  }

  async function loadData(cachePolicy) {
    setloading(true);
    try {
      await loadItemBundle(cachePolicy);
      let snapShot = await getAllItems();
      onResult(snapShot);
    } catch (e) {
      onError(e);
    }
    setloading(false);
  }

  useEffect(() => {
    if (!query) {
      loadData();
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
          refreshing={loading} // Added pull to refesh state
          onRefresh={() => loadData('reload')} // Added pull to refresh control
        />

        {/* <ItemCounter count={count} handleAddItems={()=>setCount(count+1)}
        handleRemoveItems={()=>setCount(count-1)}></ItemCounter> */}
      </View>

      {!netinfo.isConnected && <Banner>🔌 Oops!!! Connection lost</Banner>}
      {Object.keys(items).length > 0 && (
        <CartBanner navigation={navigation} count={Object.keys(items).length} />
      )}
    </>
  );
}

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
