import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../MainScreen/HomeScreen';
import ProfileScreen from '../MainScreen/ProfileScreen';
import SearchScreen from '../MainScreen/SearchScreen';
import PlaylistsScreen from '../MainScreen/PlaylistScreen';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const MainStack = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#111',
                borderTopWidth: 0,
                height: height * 0.1,
                paddingVertical: '5%'
            },
        })}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="home" color={focused ? 'white' : '#222'} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Search" component={SearchScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="search" color={focused ? 'white' : '#222'} size={size} />
                    )
                }}
            />
            <Tab.Screen name="Playlists" component={PlaylistsScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="music" color={focused ? 'white' : '#222'} size={size} />
                    )
                }} />
            {/* <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="user" color={focused ? 'white' : '#222'} size={size} />
                    )
                }}
            /> */}
        </Tab.Navigator>
    );
};

export default MainStack;
