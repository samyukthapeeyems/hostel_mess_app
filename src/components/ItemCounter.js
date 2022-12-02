import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GreenAddIcon, GrayMinusIcon } from '../../assets/icons';
import React from 'react';
import { COLORS } from '../constants/theme';

const ItemCounter = ({ count, handleAddItems, handleRemoveItems }) => {
  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity
        onPress={handleRemoveItems}
        style={styles.touchableOpacity}>
        <GrayMinusIcon />
      </TouchableOpacity>
      <View style={styles.countview}>
        <Text style={styles.countext}>{count}</Text>
      </View>
      <TouchableOpacity
        onPress={handleAddItems}
        style={styles.touchableOpacity}>
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
  touchableOpacity : {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countview : { justifyContent: 'center', alignItems: 'center', flex: 1 },
  countext : { color: COLORS.black, fontSize : 15},
});

export default ItemCounter;
