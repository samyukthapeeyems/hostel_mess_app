import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const OrderDetails = ({ route, item }) => {
  console.log('item is: ', route.params.item);
  return (
    <View>
      <Text>OrderDetails</Text>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({});
