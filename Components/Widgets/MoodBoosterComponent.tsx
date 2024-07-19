
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
const { width, height } = Dimensions.get('window');

const MoodBoosterComponent = () => {

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
        <View>
            <View style={styles.headerTextContainer}>
                <Text style={styles.DescriptionText}>Hit Music</Text>
                <Text style={styles.moreOptions}>See all</Text>
            </View>
            <ScrollView horizontal contentContainerStyle={styles.container}>
                {TrackContainer.map((item, value) => (
                    <View key={value} style={styles.trackContainer}>
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.headerText}>{item.headerText}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: height * 0.25,
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        paddingHorizontal: '5%',
        flexDirection: 'row',
        gap:20
    },
    headerText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    subHeaderText: {
        fontSize: 10,
        color: 'white'
    },
    textContainer: {
        width: width * 0.4,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingVertical: '5%'
    },
    image: {
        width: width * 0.4,
        height: height * 0.2,
    },
    trackContainer: {
        width: width * 0.4,
        height: height * 0.2,
        flexDirection: 'column',
        backgroundColor: '#222'
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: '5%',
        paddingHorizontal: '5%'
    }
});

export default MoodBoosterComponent;
