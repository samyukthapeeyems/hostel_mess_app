import { TextInput, View, StyleSheet } from 'react-native';
import React from 'react';
import { SearchIcon } from '../../assets/icons';

export default function SearchBar({ setter, placeholderText }) {
  return (
    <View style={styles.searchBarContainer}>
      <SearchIcon />
      <TextInput
        autoCapitalize="true"
        placeholder={placeholderText}
        // style={styles.textInput}
        placeholderTextColor="#3C3C4399"
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
  textInput: {
    fontSize: 18,
    backgroundColor: '#7676801F',
  },
});
