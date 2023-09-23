import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MiniInfoCard = ({ info, color, borderColor, fontColor }) => {
  return (
    <View
      style={[
        styles.infoContainer,
        {
          backgroundColor: color ? color : '#D7F4E7',
          borderColor: borderColor ? borderColor : '#32BA7C',
        },
      ]}>
      <Text style={[styles.info, { color: fontColor ? fontColor : '#32BA7C' }]}>
        {info}
      </Text>
    </View>
  );
};

export default MiniInfoCard;

const styles = StyleSheet.create({
  infoContainer: {
    alignItems: 'center',
    paddingVertical: 5,
    // paddingHorizontal: 12,
    paddingHorizontal: 6,
    backgroundColor: '#D7F4E7',
    borderColor: '#32BA7C',
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 4,
    marginRight: 6,
  },
  emoji: {
    fontSize: 20,
    fontWeight: '300',
    marginHorizontal: 6,
  },
  info: {
    fontSize: 12,
    fontWeight: '500',
    color: '#32BA7C',
  },
});
