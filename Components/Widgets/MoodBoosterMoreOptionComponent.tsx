
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';

const MoodBoosterMoreOptions = () => {
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
        <View style={{ height: height, backgroundColor: '#111' }}>
            <View style={styles.headerTextContainer}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Ionicons name="chevron-back" size={18} color="white" />
                </TouchableOpacity>
                <Text style={styles.DescriptionText}>Mood Booster</Text>
            </View>
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
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: '5%',
        paddingHorizontal: '5%',
        gap: 20
    }
});

export default MoodBoosterMoreOptions;
