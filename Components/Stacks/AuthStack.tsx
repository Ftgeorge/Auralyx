import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import SplashScreen from '../Splashscreen';
import MainStack from './MainStack';


type RootStackParamList = {
    SplashScreen: undefined;
    MainScreen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AuthStack = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    presentation: 'modal',
                    animationTypeForReplace: 'push',
                    animation: 'slide_from_right',
                }}>
                <>
                    <Stack.Screen name='SplashScreen' component={SplashScreen} />
                    <Stack.Screen name='MainScreen' component={MainStack} />
                </>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
