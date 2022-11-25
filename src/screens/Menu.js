import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import MyStatusBar from '../components/MyStatusBar';
import { COLORS } from '../constants/theme';
import firestore from '@react-native-firebase/firestore';
import MenuItem from '../components/MenuItem';

import CartBanner from '../components/CartBanner';
import useCart from '../contexts/CartContext';


export default Menu = ({ navigation }) => {

  const [itemList, setItemList] = useState([]);
  const [query , setQuery] = useState('');
  const {items} = useCart();

  const onResult = (snapShot) => {
    let items = []
    snapShot.forEach(item => {
      items.push({
        id: item.id,
        ...item.data()
      })
    })
    setItemList(items);
  }

  function onError(error) {
    console.error(error);
  }

  useEffect(() => {
    const itemCleanUp = firestore()
      .collection('items')
      .onSnapshot(onResult, onError);
    return itemCleanUp;
  }, [])

  return (
    <>
      <MyStatusBar backgroundColor={COLORS.blue} barStyle="light-content" />
      <View style={{ flex: 1 }}>
        <Header navigation={navigation} />
        {/* <ScrollableMenu /> */}



        <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 15 }}>
          <SearchBar setQuery={setQuery} />
          <FlatList
            data={itemList}
            renderItem={({ item }) => <MenuItem item={item} />}
            keyExtractor={item => item.id}
          />
        </View>


      {
        items.length > 0 && <CartBanner navigation={navigation} count={items.length}/>
      }

        
      </View>
    </>
  );
};

const SectionListHeader = () => (
  <View style={{ backgroundColor: COLORS.white }}>
    {/* <SearchBar /> */}
    <Text style={styles.listTitle}>Order Your Food 🍛</Text>
  </View>
);
const MenuCardTitle = ({ section: { title } }) => (
  <View style={styles.menuCardTitleContainer}>
    <View style={{ flex: 3, paddingLeft: 8 }}>
      <Text style={styles.menuCardText}>{title}</Text>
    </View>
  </View>
);



const SearchBar = ({setQuery}) => {
  return (
    <View style={styles.conatiner}>
      <TextInput
        placeholder="🔍 Porotta, Dosa ..."
        style={styles.textinput}
        placeholderTextColor="#3C3C4399"
        onChangeText={(term)=>setQuery(term)}
      />
    </View>
  );
};








const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  listTitle: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 10,
    color: COLORS.black
  },
  menuCardTitleContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
  },
  menuCardText: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.black

  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 4,
  },
  sectionHeader: {
    fontSize: 32,

    padding: 7,
  },
  title: {
    fontSize: 24, color: COLORS.black
  },
  conatiner: { width: '100%' },
  textinput: {
    fontSize: 18,
    backgroundColor: '#7676801F',
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 15,
    borderRadius: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  leftItem: {
    padding: 10,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  centerItem: {
    flex: 2,
    flexDirection: 'column',
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexWrap: 'wrap',
  },
  rightItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  costText: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.green,
  },
  detailsText: { fontSize: 12, fontWeight: '400', marginBottom: 4, color: COLORS.black },
  itemTitle: { fontSize: 16, fontWeight: '700', color: COLORS.black },
  menuItemBox: {
    marginVertical: 4,
    paddingLeft: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});



