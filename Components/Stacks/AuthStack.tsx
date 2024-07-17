
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Splashscreen';
import MainStack from './MainStack';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="MainScreen" component={MainStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AuthStack;
