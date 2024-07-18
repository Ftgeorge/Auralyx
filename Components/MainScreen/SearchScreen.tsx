
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');

const SearchScreen = () => {

  const initiateSearch = () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholderTextColor="#555"
          placeholder='Search here'
          style={styles.searchInput} />
        <TouchableOpacity onPress={initiateSearch} style={styles.searchButton}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#111',
    paddingVertical: '5%',
    height: height * 1,
    width: width * 1
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  searchContainer: {
    width: width * 1,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    gap: 15
  },
  searchButton: {
    width: width * 0.2,
    height: height * 0.06,
    borderRadius: 10,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchInput: {
    width: width * 0.66,
    height: height * 0.06,
    borderRadius: 10,
    backgroundColor: '#222',
    paddingHorizontal: '5%',
    fontSize: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    // fontWeight: 500
  }
});

export default SearchScreen;
