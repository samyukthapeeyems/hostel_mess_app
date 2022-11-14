import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SectionList,
  Button,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SIZES } from '../constants/theme';
import { ItemCounter } from '../components';
import { BreakfastIcon, LunchIcon, DinnerIcon } from '../assets/icons';
import { SquareButton } from '../components/Button';

const listOfCart = [
  {
    title: '✨Recommended',
    data: [
      {
        id: 1,
        foodItem: 'Pizza',
        details: '2 Piece Porotta, 1 Portion of ...',
        cost: 30,
      },
      {
        id: 2,
        foodItem: 'Burger',
        details: '2 Piece Porotta, 1 Portion of ...',
        cost: 70,
      },
      {
        id: 3,
        foodItem: 'Risotto',
        details: '2 Piece Porotta, 1 Portion of ...',
        cost: 90,
      },
    ],
  },
  {
    title: 'Sides',
    data: [
      {
        id: 4,
        foodItem: 'French Fries',
        details: '2 Piece Porotta, 1 Portion of ...',
        cost: 20,
      },
      {
        id: 5,
        foodItem: 'Onion rings',
        details: '2 Piece Porotta, 1 Portion of ...',
        cost: 70,
      },
      {
        id: 6,
        foodItem: 'Fried Shrimps',
        details: '2 Piece Porotta, 1 Portion of ...',
        cost: 60,
      },
    ],
  },
];

const CartHeader = ({ navigation }) => {
  return (
    <View style={styles.cartHeadercontainer}>
      <View style={styles.cartHeaderbackbutton}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>
            <Ionicons name="arrow-back-outline" size={32} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cartheaderview}>
        <Text style={styles.cartheadertext}>Cart</Text>
      </View>
    </View>
  );
};
function OptDinner() {
  const [optDinner, setOptDinner] = useState(false);
  //   const increment = () => setCount((count) => count + 1);
  const handleOptDinner = () => setOptDinner(optDinner => !optDinner);
  return (
    <View style={styles.optDinnercontainer}>
      <View style={styles.optDinnercontainer1}>
        <View style={styles.optDinnerbuttonview}>
          <SquareButton handleOptDinner={handleOptDinner} />
          <Text style={styles.optDinneropt}> Opt for Dinner 🍛</Text>
        </View>
        <View style={styles.optDinnerfoodview}>
          <Text style={styles.optDinnerfoodtext}>
            The Food marked as Dinner in your Current Cart will be marked as
            your preference for dinner too
          </Text>
        </View>
      </View>
      {/* <TouchableOpacity onPress={increment}>
        <Text>Click me</Text>
        <Text>{count}</Text>
      </TouchableOpacity> */}
      {/* {optDinner ? (
        <TouchableOpacity>
          <Text>Opted for dinner</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <Text>Not Opted for dinner</Text>
        </TouchableOpacity>
      )} */}
    </View>
  );
}
const CartContent = ({ item }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count => count + 1);
  };
  const decrement = () => {
    setCount(count => count - 1);
  };
  //   console.log(item);
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.container2}>{item.foodItem}</Text>
        <Text style={styles.container2text}>
          {' '}
          2 porotta 2 chicken curry + tea
        </Text>
      </View>
      <View style={styles.buttonview}>
        <ItemCounter
          count={count}
          handleAddItems={increment}
          handleRemoveItems={decrement}
        />
      </View>

      <View style={styles.rupee}>
        <Text>₹{item.cost}</Text>
      </View>
    </View>
  );
};
const Confirm = () => {
  return (
    <>
      <View style={styles.confirmcontainer}>
        <View style={styles.confirmsubview1}>
          <Text style={{ color: '#32BA7C' }}> 2 Items </Text>
        </View>

        <View style={styles.confirmsubview2}>
          <Text style={{ color: '#32BA7C', fontWeight: '700', fontSize: 18 }}>
            {' '}
            Rs 120
          </Text>
        </View>
      </View>

      <View style={styles.confirmCaution}>
        <Text style={styles.confirmCautiontext}>
          Once you confirm your order, your order will be sent to canteen and
          food will be prepared soon
        </Text>
      </View>

      <View style={styles.confirmbutton}>
        <Text style={{ color: 'white', fontSize: 18 }}>CONFIRM ORDER</Text>
      </View>
    </>
  );
};
const CartContent2 = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: 10,
          //   marginVertical: 5,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            backgroundColor: '#EFEFF0',
            padding: 10,
            marginRight: 12,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <BreakfastIcon />
          <Text style={{ fontWeight: '400', fontSize: 13 }}> Breakfast</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            backgroundColor: '#EFEFF0',
            padding: 10,
            marginRight: 12,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <LunchIcon />
          <Text style={{ fontWeight: '400', fontSize: 13 }}> Lunch</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            backgroundColor: '#EFEFF0',
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <DinnerIcon />
          <Text style={{ fontWeight: '400', fontSize: 13 }}> Dinner</Text>
        </TouchableOpacity>
      </View>
      <OptDinner />
    </>
  );
};
const OrderList = () => (
  <View style={{ backgroundColor: 'white', flex: 1 }}>
    <SectionList
      sections={listOfCart}
      keyExtractor={item => item.id}
      renderItem={CartContent}
      ListFooterComponent={CartContent2}
      showsVerticalScrollIndicator={false}
    />
  </View>
);
const Cart = ({ navigation, route }) => {
  console.log(navigation.isFocused);
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <CartHeader navigation={navigation} />
      {/* <View style={{ backgroundColor: "red", flex: 1 }}>
        <OptDinner />
    </View> */}
      <OrderList />
      <Confirm />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    //   marginVertical: 10
    // paddingHorizontal: 10,
  },
  container1: {
    flex: 3,
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 15,
  },
  container2: { fontWeight: '700', fontSize: 15 },
  container2text: { fontWeight: '400', fontSize: 10 },
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
    flex: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  cartheadertext: {
    fontSize: SIZES.large * 2,
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
    // marginTop: 10,
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
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Cart;
