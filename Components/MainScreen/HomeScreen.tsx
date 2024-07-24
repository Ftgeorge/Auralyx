import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MusicFeaturesCardComponent from '../Widgets/MusicFeaturesCardComponent';
import HomeSubHeader from '../Widgets/HomeSubHeader';
import HitMusicComponent from '../Widgets/HitMusicComponent';
import MoodBoosterComponent from '../Widgets/MoodBoosterComponent';
// import MusicFeaturesCardComponent from './MusicFeaturesCardComponent'; // Adjust the path as necessary

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {

  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      let timeOfDay;
      const hour = new Date().getHours();

      if (hour >= 0 && hour < 5) {
        timeOfDay = "🌙 Late Night Vibes";
      } else if (hour >= 5 && hour < 12) {
        timeOfDay = "☀️ Morning Grooves";
      } else if (hour >= 12 && hour < 17) {
        timeOfDay = "🎵 Afternoon Tunes";
      } else if (hour >= 17 && hour < 20) {
        timeOfDay = "🌇 Evening Chill";
      } else {
        timeOfDay = "🌃 Night Beats";
      }


      setCurrentTime(timeOfDay);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{currentTime}</Text>
        <Icon name="search" size={18} color="white" />
      </View>
      <HomeSubHeader />
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
