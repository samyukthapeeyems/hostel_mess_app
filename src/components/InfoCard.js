import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const InfoCard = ({ emoji, info, color, borderColor, fontColor }) => {
  return (
    <View
      style={[
        styles.infoContainer,
        {
          backgroundColor: color ? color : '#D7F4E7',
          borderColor: borderColor ? borderColor : '#32BA7C',
        },
      ]}>
      <Text style={styles.emoji}>{emoji}</Text>
      <View style={styles.textContainer}>
        <Text
          style={[styles.info, { color: fontColor ? fontColor : '#32BA7C' }]}>
          {info}
        </Text>
      </View>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#D7F4E7',
    borderColor: '#32BA7C',
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 15,
  },
  emoji: {
    fontSize: 20,
    fontWeight: '300',
    marginRight: 10,
  },
  info: {
    fontSize: 13,
    fontWeight: '500',
    color: '#32BA7C',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginHorizontal: 10,
  },
});
