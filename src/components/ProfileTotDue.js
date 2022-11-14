import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ProfileTotDue = () => {
    return (
        <View>
            <View style={{flexDirection:'row',padding:10,backgroundColor:'white',marginTop:10}}>
                <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start',marginLeft:15}}>
                    <Text style={{fontSize:14}}>Total due this month</Text>
                </View>
                <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-end',marginRight:15}}>
                    <Text style={{fontSize:14}}>₹10,000</Text>
                </View>
          
            </View>

            <View style={{flexDirection:'row',padding:10,backgroundColor:'white',marginTop:10}}>
            <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start',marginLeft:15}}>
                <Text style={{fontSize:14}}>Total due</Text>
            </View>
            <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-end',marginRight:15}}>
                <Text style={{fontSize:14}}>₹12,000</Text>
            </View>

            </View>

        </View>
 

        
      )
}

export default ProfileTotDue

