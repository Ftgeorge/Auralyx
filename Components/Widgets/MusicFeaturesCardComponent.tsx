import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
// import { getGenres } from './spotifyService'; // Adjust the path as necessary
import axios from 'axios';

type Genre = {
    id: string;
    name: string;
};

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const MusicFeaturesCardComponent = () => {
    const API_URL = 'https://spotify23.p.rapidapi.com/genre_view/';
    const API_KEY = 'c3d9f7accamsh07cfaeab959bc81p1b3dadjsnf0a25d581467';

    const headers = {
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
        'x-rapidapi-key': API_KEY,
    };

    const getGenres = async () => {
        try {
            const response = await axios.get(`${API_URL}`, {
                headers,
            });
            return response.data.genres.items; // Adjust according to the actual API response structure
        } catch (error) {
            console.error('Error fetching genres:', error);
            throw error;
        }
    };
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const genresData = await getGenres();
                setGenres(genresData);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };
        fetchGenres();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={genres}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.card, { backgroundColor: getRandomColor() }]}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                )}
                horizontal
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        margin: 10,
        padding: 20,
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        color: '#fff',
    },
});

export default MusicFeaturesCardComponent;
