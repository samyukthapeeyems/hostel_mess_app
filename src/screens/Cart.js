import { View, StyleSheet, FlatList } from 'react-native';
import { useState, useEffect, useCallback ,memo } from 'react';
import useCart from '../contexts/CartContext';
import { useItems } from '../functions/items';
import CartItem from '../components/CartItem';
import Listheader from '../components/Listheader';
import Button from '../components/Button';
// I'll clean this later (function), works for now



export default function Cart() {
  const { items, totalAmount } = useCart();

  const [itm, setItm] = useState()
  const { getItemList, mapItemWithDocId } = useItems();


  const cartData = useCallback(async () => {
    try {
      console.log("called cartData")
      let itemIdList = items.map(item => item.id)
      let itemList = await getItemList(itemIdList)
      let itemListx = mapItemWithDocId(itemList)

      let cartData = itemListx.map((item) => {
        let { quantity } = items.find(_item => _item.id === item.id)
        return {
          ...item,
          price: quantity * item.price,
          quantity: quantity
        }
      })
      // console.log(cartData, "\nended")

      return cartData;

    } catch (err) {
      console.log(err)
    }
    // }
  }, [totalAmount])



  useEffect(() => {
    cartData().then(x => setItm(x))
  }, [cartData]);
  return (
    <>

      <View style={styles.container}>
        <FlatList
          data={itm}
          // extraData={itm}
          renderItem={({ item }) => <CartItem item={item} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={<Listheader />}
        />
      </View>
      <Button style={styles.confirmbutton}
        textStyle={styles.confirmButtonText}>
        CONFIRM ORDER
      </Button>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
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
    color: 'white',
    fontSize: 18,
    fontWeight: '700'
  }
});

