import { TextInput, View, StyleSheet } from 'react-native';
import React from 'react';

import { SearchIcon } from '../../assets/icons';
import { COLORS } from '../constants/theme';

export default function SearchBar({ setter, placeholderText }) {
  return (
    <View style={styles.searchBarContainer}>
      <SearchIcon />
      <TextInput
        autoCapitalize="true"
        placeholder={placeholderText}
        placeholderTextColor="#3C3C4399"
        style={styles.text}
        onChangeText={setter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#7676801F',
    paddingHorizontal: 12,
    borderRadius: 10,
    marginVertical: 15,
    alignItems: 'center',
  },
  text: { color: COLORS.black, fontSize: 14 },
});
