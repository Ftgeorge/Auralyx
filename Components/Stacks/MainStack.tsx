import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../MainScreen/HomeScreen';
import ProfileScreen from '../MainScreen/ProfileScreen';
import SearchScreen from '../MainScreen/SearchScreen';
import PlaylistsScreen from '../MainScreen/PlaylistScreen';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const MainStack = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle:{
                backgroundColor:'#111',
                borderTopWidth:0,
                height: height * 0.1,
                paddingVertical:'5%'
            }
        })}>
            <Tab.Screen name="Home"  component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="PLaylists" component={PlaylistsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default MainStack;
