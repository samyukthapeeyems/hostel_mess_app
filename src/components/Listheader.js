import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme';


const Listheader = () => {
  return (
    <View style={styles.container}>
      <View style ={styles.itemnameView}>
        <Text style ={styles.itemnameText}>Item Name</Text>
      </View>
      <View style ={styles.qtyview}>
        <Text style ={styles.qtyText}>Qty</Text>
      </View>
      <View style ={styles.priceView }>
        <Text style ={styles.pricetext}>Price</Text>
      </View>
    </View>
  )
}

export default Listheader

const styles = StyleSheet.create({
    container :{flexDirection : 'row',    paddingTop: 10,},
    itemnameView :{flex :3, paddingLeft : 14, paddingVertical : 5},
    itemnameText : {color : COLORS.black, opacity : 0.5,fontSize : 12},
    qtyview : {flex : 1, paddingVertical: 5,alignItems : 'center'},
    qtyText : {color : COLORS.black, opacity : 0.5,fontSize : 12},
    priceView : {flex : 1, paddingVertical: 5,alignItems : 'flex-end',paddingRight : 15},
    pricetext : {color : COLORS.black,opacity : 0.5,fontSize : 12}
    }
)