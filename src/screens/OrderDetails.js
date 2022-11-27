import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { SIZES } from '../constants/theme';
import MyStatusBar from '../components/StatusBar';
import { COLORS } from '../constants/theme';
import { LeftArrow } from '../../assets/icons';
import React from 'react';

const OrderDetailsHeader = ({ route, navigation }) => {
  // const { Itemid } = route.params;
  console.log(route);
  return (
    <View style={styles.orderDetailscontainer}>
      <View style={styles.orderDetailsbackbutton}>
        {
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>
              <LeftArrow />
            </Text>
          </TouchableOpacity>
        }
      </View>
      <View style={styles.orderDetailscartheaderview}>
        <Text style={styles.orderDetailscartheadertext}>Order Id</Text>
      </View>
    </View>
  );
};

const OrderDetailsContent = () => {
  return (
    <View style={{ backgroundColor: 'white', padding: 10 }}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'black',
          // borderStyle: "dashed",
          paddingBottom: 5,
        }}>
        <View style={{ flexDirection: 'row', paddingTop: 5 }}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}>
            <Text style={{ color: COLORS.black }}>Porotta & Beef</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <Text style={{ color: COLORS.black }}>₹60</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', paddingTop: 5 }}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}>
            <Text style={{ color: COLORS.black }}>Biriyani Rice</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <Text style={{ color: COLORS.black }}>₹60</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', paddingTop: 5 }}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}>
            <Text style={{ color: COLORS.black }}>Tea</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <Text style={{ color: COLORS.black }}>₹10</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            paddingTop: 10,
          }}>
          <Text style={{ color: COLORS.black }}>Total</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}>
          <Text style={{ color: COLORS.black }}>₹130</Text>
        </View>
      </View>
    </View>
  );
};
const GenerateToken = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#32BA7C',
        paddingVertical: 15,
        marginVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
      }}
      onPress={() => navigation.navigate('Token')}>
      <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>
        Generate Token
      </Text>
    </TouchableOpacity>
  );
};
const OrderDetails = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.container}>
            <Text style={styles.containerText}>BILL DETAILS</Text>
            <OrderDetailsContent />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <GenerateToken navigation={navigation} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  containerText: {
    padding: 10,
    fontWeight: '400',
    fontSize: 12,
    color: COLORS.black,
  },
  deatialsView: {},
  orderDetailscontainer: {
    flexDirection: 'row',
    height: 75,
    backgroundColor: '#3358F9',
  },
  orderDetailsbackbutton: {
    backgroundColor: '#3358F9',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  orderDetailscartheaderview: {
    backgroundColor: '#3358F9',
    flex: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  orderDetailscartheadertext: {
    fontSize: SIZES.large * 2,
    color: 'white',
    fontWeight: 'bold',
  },
});
