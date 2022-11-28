import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

export default function _Button({
  onPress = () => {},
  children,
  style,
  textStyle,
}) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
}
