import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GreenAddIcon, GrayMinusIcon } from '../../assets/icons';
import React from 'react';
import { COLORS } from '../constants/theme';

const ItemCounter = ({ count, handleAddItems, handleRemoveItems }) => {
  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity
        onPress={handleRemoveItems}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <GrayMinusIcon />
      </TouchableOpacity>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text style={{ color: COLORS.black }}>{count}</Text>
      </View>
      <TouchableOpacity
        onPress={handleAddItems}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <GreenAddIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    backgroundColor: '#7676801F',
    flexDirection: 'row',
    paddingHorizontal: 4,
    width: 80,
    height: 40,
    borderRadius: 9,
  },
});

export default ItemCounter;
