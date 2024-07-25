
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');

const PlaylistsScreen = () => {
  const navigation = useNavigation();
  const TrackContainer = [
    {
      image: require('../../Components/assets/images/getstarted.png'),
      headerText: 'Japanese Street',
      subHeaderText: 'Pop 00'
    },
    {
      image: require('../../Components/assets/images/getstarted.png'),
      headerText: 'Throwback Rock',
      subHeaderText: 'Music 90'
    },
    {
      image: require('../../Components/assets/images/getstarted.png'),
      headerText: 'Japanese Street',
      subHeaderText: 'Pop 00'
    },
    {
      image: require('../../Components/assets/images/getstarted.png'),
      headerText: 'Throwback Rock',
      subHeaderText: 'Music 90'
    },
    {
      image: require('../../Components/assets/images/getstarted.png'),
      headerText: 'Japanese Street',
      subHeaderText: 'Pop 00'
    },
    {
      image: require('../../Components/assets/images/getstarted.png'),
      headerText: 'Throwback Rock',
      subHeaderText: 'Music 90'
    },

  ];
  return (
    <View style={styles.container}>
      <View style={[styles.headerTextContainer, { backgroundColor: 'rgba(0,0,0,0.7)', width: width * 1, paddingHorizontal: '5%', justifyContent: 'space-evenly' }]}>
        <View>
          <Text style={[styles.DescriptionText, { color: '#999', fontSize: 15 }]}>Hit Music</Text>
          <Text style={[styles.DescriptionText, { fontSize: 35 }]}>Playlists</Text>
          <Text style={[styles.DescriptionText, { fontSize: 15, color: '#999' }]}>{TrackContainer.length} playlists</Text>
        </View>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end', bottom: -10 }}>
          <View style={{ width: width * 0.05, height: height * 0.05, borderRadius: 99, backgroundColor: 'red' }} />
        </View>
      </View>
      <View style={styles.playlistSection}>
        {TrackContainer.map((item, index) => (
          <View key={index} style={styles.playlistContainer}>
            <View style={styles.playlistImageContainer}>
              <Image source={item.image} style={styles.playlistImage} />
            </View>
            <Text style={styles.playlistText}>{item.headerText}</Text>
          </View>
        ))}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#111',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
  },
  subHeaderText: {
    fontSize: 17,
    color: '#555'
  },
  textContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: '3%'
  },
  image: {
    width: width * 0.16,
    height: height * 0.08,
  },
  trackContainer: {
    width: '100%',
    height: height * 0.08,
    flexDirection: 'row',
    backgroundColor: '#111',
    marginVertical: '2.5%'
  },
  DescriptionText: {
    fontSize: 15,
    color: 'white',
  },
  moreOptions: {
    color: '#555',
    fontSize: 17,
    fontWeight: 'bold'
  },
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: height * 0.3
  },
  playlistSection: {
    width: width,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: '5%'
  },
  playlistContainer: {
    flexDirection: 'column',
    width: width * 0.27,
    height: height * 0.2,
    gap: 5,
    marginBottom:'2.5%'
  },
  playlistImageContainer: {
    width: width * 0.27,
    height: height * 0.135
  },
  playlistImage: {
    width: '100%',
    height: '100%'
  },
  playlistText: {
    fontSize: 15,
    color: 'white'
  }
});

export default PlaylistsScreen;
