
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Featured</Text>
        <Icon name="search" size={20} color="white"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#111',
    height: height * 1,
    width: width * 1,
    paddingVertical: '5%'
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  headerContainer: {
    width: width * 1,
    height: height * 0.1,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'flex-start',
  },
  headerText: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold'
  }
});

export default HomeScreen;
