// src/screens/SplashScreen.js

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();
    const opacity = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start(() => {
            navigation.navigate('MainScreen' as never);
        });
    }, [opacity, navigation]);

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.text, { opacity }]}>
                auralyx
            </Animated.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default SplashScreen;
