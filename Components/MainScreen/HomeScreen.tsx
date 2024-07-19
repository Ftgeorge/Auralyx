import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MusicFeaturesCardComponent from '../Widgets/MusicFeaturesCardComponent';
import HomeSubHeader from '../Widgets/HomeSubHeader';
import HitMusicComponent from '../Widgets/HitMusicComponent';
import MoodBoosterComponent from '../Widgets/MoodBoosterComponent';
// import MusicFeaturesCardComponent from './MusicFeaturesCardComponent'; // Adjust the path as necessary

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Good morning moods</Text>
        <Icon name="search" size={18} color="white" />
      </View>
      <HomeSubHeader />
      <View style={styles.MusicFeatureCardContainer}>
        <MusicFeaturesCardComponent />
      </View>
      <HitMusicComponent />
      <MoodBoosterComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#111',
    height: height,
    width: width,
    paddingVertical: '5%',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  headerContainer: {
    width: width,
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
    width: width,
    paddingLeft: '5%',
    paddingRight: '1%',
    height: height * 0.1,
  },
  PlayListsCardsContainer: {
    width: width,
    paddingLeft: '5%',
    height: height * 0.15,
    backgroundColor: 'blue',
  },
  TextContainer: {
    width: width,
    paddingHorizontal: '5%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export default HomeScreen;
