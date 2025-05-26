import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Perfil() {
    const avatarUrl = 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tu Perfil</Text>
            <Image
                source={{ uri: avatarUrl }}
                style={styles.avatar}
                resizeMode="contain"
            />
            <Text style={styles.username}>Fulanito</Text>
            <Text style={styles.info}>Me llamo fulanito, y en este sitio se encuentran mis videojuegos favoritos 😁</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#121212'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
        color: 'white',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 16,
        borderWidth: 2,
        borderColor: '#3b82f6',
        backgroundColor: '#222',
    },
    username: {
        fontSize: 22,
        fontWeight: '600',
        color: 'white',
        marginBottom: 8,
    },
    info: {
        fontSize: 16,
        color: '#ccc',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
});
