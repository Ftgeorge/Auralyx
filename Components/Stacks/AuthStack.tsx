import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import SplashScreen from '../Splashscreen';
import MainStack from './MainStack';
import GetStartedScreen from '../GetStartedScreen';
import MoreOptions from '../Widgets/MoreOptionsCompnent';
import HitMusicMoreOptions from '../Widgets/HitMusicMoreOptionsComponent';
import MoodBoosterMoreOptions from '../Widgets/MoodBoosterMoreOptionComponent';


type RootStackParamList = {
    SplashScreen: undefined;
    MainScreen: undefined;
    GetStarted: undefined;
    MoreOptions: undefined;
    HitMusicMoreOptions: undefined;
    MoodBoosterMoreOptions: undefined;
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
                    <Stack.Screen name='GetStarted' component={GetStartedScreen} />
                    <Stack.Screen name='MainScreen' component={MainStack} />
                    <Stack.Screen name='MoreOptions' component={MoreOptions} />
                    <Stack.Screen name='HitMusicMoreOptions' component={HitMusicMoreOptions} />
                    <Stack.Screen name='MoodBoosterMoreOptions' component={MoodBoosterMoreOptions} />
                </>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
