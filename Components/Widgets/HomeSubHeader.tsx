
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
const { width, height } = Dimensions.get('window');

const HomeSubHeader = () => {

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

    ];

    return (
        <View style={styles.container}>

            {TrackContainer.map((item, value) => (
                <View key={value} style={styles.trackContainer}>
                    <Image source={item.image} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}>{item.headerText}</Text>
                        <Text style={styles.subHeaderText}>{item.subHeaderText}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: height * 0.1,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:'5%',
        width: width,
        marginTop: '5%',
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 12,
        color: 'white',
    },
    subHeaderText: {
        fontSize: 10,
        color: 'white'
    },
    textContainer: {
        width: width * 0.27,
        height: '100%',
        flexDirection: 'column',
        justifyContent:'center',
        paddingHorizontal:'3%',
        borderRadius:5
    },
    image: {
        width: width * 0.16,
        height: height * 0.08,
    },
    trackContainer: {
        width: width * 0.43,
        height: height * 0.08,
        flexDirection: 'row',
        backgroundColor: '#222'
    }
});

export default HomeSubHeader;
