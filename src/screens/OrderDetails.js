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
import Listheader from '../components/Listheader';
import { FlatList } from 'react-native-gesture-handler';


const Orderstack = [
  {
    id : 1,
    title : 'Porotta',
    qty : 1,
    price : 10
  },
  {
    id : 2,
    title : 'Chiken Curry',
    qty : 1,
    price : 8
  },
  {
    id :3,
    title : 'Tea',
    qty : 1,
    price : 9
  }, 
  {
    id : 4,
    title : 'Veg Curry',
    qty : 1,
    price : 8
  }
];

const renderseperator = () => {
  return <View style={styles.renderseperatorview} />;
};
const OrderDetailsContent = ({item}) => {
  let {item : element} =item ;
  return (
  <View>
  <View style={styles.ODCouterView}>
      <View style ={styles.ODCtitleView}>
        <Text style ={{color : COLORS.black,fontWeight : '700'}}>{element.title}</Text>
      </View>
      <View style ={{flex : 1, paddingVertical: 5,alignItems : 'center'}}>
        <Text style ={{color : COLORS.black,fontWeight : '700'}}>{element.qty}</Text>
      </View>
      <View style ={{flex : 1, paddingVertical: 5,alignItems : 'flex-end',paddingRight : 15} }>
        <Text style ={{color :COLORS.black,fontWeight : '700'}}>₹{element.price}</Text>
      </View>
    </View>
  </View>
  );
};

const Total =() => {
  return (
    <View style={{flex :1, flexDirection :'row'}}>
    <View style ={{flex : 1, alignItems :'flex-start',paddingHorizontal : 15, paddingTop : 5}}>
      <Text style ={{color : COLORS.black, fontWeight : '700',opacity : 0.5, fontSize:16}}>Total</Text>
    </View>
    <View style ={{flex : 1, alignItems : 'flex-end', paddingHorizontal : 10}}>
      <Text style ={{color : COLORS.green, fontSize : 24, fontWeight: '700'}}>₹10</Text>
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
        <View style={{ flex: 1}}>
          <View>
            <Text style={styles.containerText}>BILL DETAILS</Text>
            <View>
            <FlatList
              data={Orderstack}
              keyExtractor ={item => item.id}
              renderItem ={item => <OrderDetailsContent item={item} />}
              ListHeaderComponent ={<Listheader/>}
              ItemSeparatorComponent={renderseperator}
              ListFooterComponent={<Total/>}
              
            />
            </View>
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
    paddingTop: 20,
    paddingHorizontal : 10,
    fontWeight: '400',
    fontSize: 12,
    color: COLORS.black,
  },
  renderseperatorview : { backgroundColor: '#d9d9d9', height: 1 },
  ODCouterView : {flexDirection : 'row'},
  ODCtitleView : {flex :3, paddingLeft : 14, paddingVertical : 5},
});
