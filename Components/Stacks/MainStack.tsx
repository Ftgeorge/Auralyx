import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../MainScreen/HomeScreen';
import ProfileScreen from '../MainScreen/ProfileScreen';
import SearchScreen from '../MainScreen/SearchScreen';
import PlaylistsScreen from '../MainScreen/PlaylistScreen';
import { Dimensions, Text, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const MainStack = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#111',
                borderTopWidth: 1,
                height: height * 0.1,
                paddingVertical: '5%',
                borderTopColor:'#333'
            },
        })}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Octicons name="home" color={focused ? 'white' : '#222'} size={size} />
                            <Text style={{ color: focused ? 'white' : '#222' }}>Home</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Search" component={SearchScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Octicons name="search" color={focused ? 'white' : '#222'} size={size} />
                            <Text style={{ color: focused ? 'white' : '#222' }}>Search</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Playlists" component={PlaylistsScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="music-note" color={focused ? 'white' : '#222'} size={size} />
                            <Text style={{ color: focused ? 'white' : '#222' }}>Playlists</Text>
                        </View>
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
