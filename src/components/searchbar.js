import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';

const PAGE = Dimensions.get('window');


const styles = StyleSheet.create({
  textInput: {
    height: 45,
    backgroundColor: 'white',
    width: PAGE.width - 35,
    borderRadius: 20,
    padding: 10,
    fontSize: 18
  }
});

const SearchBar = (props) => {
  return (
    <View style={{ margin: 50 }}>
      <TextInput
        style={styles.textInput}
        placeholder="Search"
      />
    </View>
  );
};

export default SearchBar;