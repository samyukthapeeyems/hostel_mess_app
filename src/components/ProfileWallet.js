import { View, Text } from 'react-native'
import React from 'react'

const ProfileWallet = () => {
    return (
        <View>
            <View style={{flexDirection:'row',padding:10,backgroundColor:'white',marginTop:20}}>
            <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start',marginLeft:15}}>
                <Text style={{fontSize:14,fontWeight:'bold'}}>eCanteen Wallet</Text>
            </View>
            <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-end',marginRight:15}}>
                <Text style={{fontSize:20}}> > </Text>
            </View>
          
        </View>

        <View style={{flexDirection:'row',padding:10,backgroundColor:'white',marginTop:10}}>
        <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start',marginLeft:15}}>
            <Text style={{fontSize:14,fontWeight:'bold'}}>View Due Details</Text>
        </View>
        <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-end',marginRight:15}}>
            <Text style={{fontSize:20}}> > </Text>
        </View>

        </View>

        </View>
 
      )
}

export default ProfileWallet