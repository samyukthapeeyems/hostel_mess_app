import { View, Text, StyleSheet, SectionList, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import MyStatusBar from '../components/MyStatusBar';
import { COLORS } from '../constants/theme';
import firestore from '@react-native-firebase/firestore';
import MenuItem from '../components/MenuItem';

//import ScrollableMenu from '../components/ScrollableMenu';
import ViewCart from '../components/ViewCart';



export default Menu = ({ navigation }) => {

  const [itemList, setItemList] = useState([]);

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
          <FlatList
            data={itemList}
            renderItem={({ item }) => <MenuItem item={item} />}
            keyExtractor={item => item.id}
          />
        </View>




        <ViewCart navigation={navigation} />
      </View>
    </>
  );
};

//export default Menu;



// const MenuItem = ({ item }) => {

//   const [count, setCount] = useState(0);
//   const handleAddItems = () => {
//     setCount(count => count + 1);
//   };
//   const handleRemoveItems = () => {
//     setCount(count => count - 1);
//   };

//   return (
//     <View style={styles.menuItemBox}>
//       {/* left item  */}
//       <View style={styles.leftItem}>
//         <CImage path={item.image} />
//       </View>
//       {/* center item  */}
//       <View style={styles.centerItem}>
//         <Text style={styles.itemTitle}>{item.name}</Text>
//         <Text style={styles.detailsText}>{item.name}</Text>
//         <Text style={styles.costText}>₹{item.price}</Text>
//       </View>
//       {/* right item  */}
//       <View style={styles.rightItem}>
//         {count === 0 ? (
//           <TouchableOpacity onPress={handleAddItems}>
//             <GreenButton />
//           </TouchableOpacity>
//         ) : (
//           <ItemCounter
//             count={count}
//             handleAddItems={handleAddItems}
//             handleRemoveItems={handleRemoveItems}
//           />
//         )}
//       </View>
//     </View>
//   );
// };

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



