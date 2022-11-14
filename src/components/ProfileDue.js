import { View, Text } from 'react-native'
import React from 'react'

const ProfileDue = () => {
  return (
    <View style={{flexDirection:'row',padding:10,backgroundColor:'white',marginTop:20}}>
        <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start',marginLeft:15}}>
            <Text style={{fontSize:14}}>Select Your Dues</Text>
        </View>
        <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-end',marginRight:15}}>
            <Text style={{fontSize:14}}>Pay now</Text>
        </View>
      
    </View>
  )
}

export default ProfileDue