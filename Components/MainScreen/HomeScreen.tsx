
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Featured</Text>
        <Icon name="search" size={20} color="white" />
      </View>
      <View style={styles.MusicFeatureCardContainer}></View>
      <View style={styles.TextContainer}>
        <Text style={[styles.headerText, { marginTop: '10%' , marginBottom:'5%'}]}>Playlists for you</Text>
      </View>
      <View style={styles.PlayListsCardsContainer}></View>
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
    height: height * 0.05,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
  },
  MusicFeatureCardContainer: {
    width: width * 1,
    paddingLeft: '5%',
    paddingRight: '1%',
    height: height * 0.4,
    backgroundColor: 'red'
  },
  PlayListsCardsContainer: {
    width: width * 1,
    paddingLeft: '5%',
    height: height * 0.15,
    backgroundColor: 'blue'
  },
  TextContainer: {
    width: width * 1,
    paddingHorizontal: '5%',
    justifyContent:'flex-start',
    alignItems: 'flex-start'
  }
});

export default HomeScreen;
