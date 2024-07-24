
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
const { width, height } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';

const HitMusicMoreOptions = () => {
    const navigation = useNavigation();
    const [currentTime, setCurrentTime] = useState<string>("");

    useEffect(() => {
        const interval = setInterval(() => {
            let timeOfDay;
            const hour = new Date().getHours();

            if (hour >= 0 && hour < 5) {
                timeOfDay = "late night vibes";
            } else if (hour >= 5 && hour < 12) {
                timeOfDay = "morning grooves";
            } else if (hour >= 12 && hour < 17) {
                timeOfDay = "afternoon tunes";
            } else if (hour >= 17 && hour < 20) {
                timeOfDay = "evening chill";
            } else {
                timeOfDay = "night beats";
            }


            setCurrentTime(timeOfDay);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
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
        <View style={{ height: height, backgroundColor: '#111' }}>
            <ImageBackground source={require('../../Components/assets/images/getstarted.png')} style={styles.headerTextContainer}>
                <View style={[styles.headerTextContainer, { backgroundColor: 'rgba(0,0,0,0.7)', width: width * 1, paddingHorizontal: '5%', justifyContent: 'space-evenly' }]}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back" size={20} color="white" style={{ marginBottom: '8%' }} />
                    </TouchableOpacity>

                    <View>
                        <Text style={[styles.DescriptionText, { color: '#999', fontSize: 15 }]}>Hit Music</Text>
                        <Text style={[styles.DescriptionText, { fontSize: 35 }]}>Songs</Text>
                        <Text style={[styles.DescriptionText, { fontSize: 15, color: '#999' }]}>{currentTime} - {TrackContainer.length} songs</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end', bottom: -10 }}>
                        <View style={{ width: width * 0.05, height: height * 0.05, borderRadius: 99, backgroundColor: 'red' }} />
                    </View>
                </View>
            </ImageBackground>
            <ScrollView contentContainerStyle={styles.container}>
                {TrackContainer.map((item, value) => (
                    <View key={value} style={styles.trackContainer}>
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.headerText}>{item.headerText}</Text>
                            <Text style={styles.subHeaderText}>{item.subHeaderText}</Text>
                        </View>
                    </View>

                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: '5%',
        width: width,
        // justifyContent:'space-evenly'
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
        fontSize: 24,
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
    }
});

export default HitMusicMoreOptions;
