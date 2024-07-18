
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholderTextColor="#555"
          placeholder='Search here'
          style={styles.searchInput} />
        <TouchableOpacity >
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  searchContainer: {
    width: width * 1,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    gap: 20
  },
  searchButton: {
    width: width * 0.2,
    height: height * 0.08,
    borderRadius: 10,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchInput: {
    width: width * 0.65,
    height: height * 0.08,
    borderRadius: 10,
    backgroundColor: '#222',
    padding: '2%'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 500
  }
});

export default SearchScreen;
