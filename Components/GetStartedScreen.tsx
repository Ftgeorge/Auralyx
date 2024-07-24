import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');

const GetStartedScreen = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground
            source={require('../Components/assets/images/getstarted.png')}
            style={styles.backgroundImage}
        >
            <LinearGradient
                colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)']}
                style={styles.overlay}
            >
                <View style={styles.container}>
                    <Text style={styles.productName}>auralyx</Text>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.IntroName}>
                            Unleash Your Inner Musician and Embrace the Rhythm
                        </Text>
                        <Text style={styles.introText}>
                            Discover amazing new artists, craft your perfect playlists, and let the music elevate your soul.
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('MainScreen' as never)} style={styles.button}>
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height
    },
    container: {
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width,
        height: height,
    },
    productName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '5%',
        textAlign: 'center'
    },
    IntroName: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '5%',
        textAlign: 'center'
    },
    introText: {
        fontSize: 16,
        color: '#E0E0E0',
        textAlign: 'center',
        marginBottom: '10%',
    },
    button: {
        backgroundColor: '#E59866',
        width: width * 0.9,
        height: height * 0.07,
        borderRadius: 99,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomContainer: {
        width: width,
        height: height * 0.3,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:'5%'
    }
});

export default GetStartedScreen;
