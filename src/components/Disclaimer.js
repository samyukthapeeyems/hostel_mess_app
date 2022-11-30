import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

export default function Disclaimer() {
    return (
        <View style={styles.container}>
            <Text style={styles.disclaimer}>Disclamier </Text>
            <View style={styles.caution}>
                <Text style={styles.cautiontext}>
                    ❌ Order Cancellation Not Allowed due to Canteen Policies
                </Text>
            </View>
            <View style={{ flex: 1,
                 paddingHorizontal: 10, 
                 marginBottom: 10,
                  borderRadius: 10, 
                  backgroundColor: '#DBEDEB', 
                  borderColor: '#32BA7C', 
                  borderWidth: 1, 
                  padding: 8 }}>
                <Text style={{ fontSize: 11, fontWeight: '700', color: '#32BA7C' }}>
                    🧾 Only Generate the Token When You Reach the Counter
                </Text>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10, marginBottom: 10, borderRadius: 10, backgroundColor: '#DBEDEB', borderColor: '#32BA7C', borderWidth: 1, padding: 8 }}>
                <Text style={{ fontSize: 11, fontWeight: '700', color: '#32BA7C' }}>
                    ⏱️ The Token will Auto-Expire in 30s after Clicking Generate Token
                </Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 30,
  },
  disclaimer: { paddingBottom: 10, paddingLeft: 5, fontWeight: '700' },
  caution: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#E24C4B',
    borderWidth: 1,
    backgroundColor: '#FFE3E3',
    opacity: 0.5,
    padding: 8,
  },
  cautiontext : { color: 'red', fontSize: 11, fontWeight: '700', opacity: 0.5, }
});