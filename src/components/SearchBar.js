import { TextInput, View, StyleSheet } from 'react-native';
import React from 'react';

export default function SearchBar({ setter, placeholderText }) {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        placeholder={placeholderText}
        style={styles.textInput}
        placeholderTextColor="#3C3C4399"
        onChangeText={term => setter(term)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    width: '100%',
  },
  textInput: {
    fontSize: 18,
    backgroundColor: '#7676801F',
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 15,
    borderRadius: 10,
  },
});
