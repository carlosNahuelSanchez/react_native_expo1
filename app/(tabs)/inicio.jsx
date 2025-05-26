import { useRouter } from 'expo-router';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function inicio() {
    const router = useRouter();

    const handleGoToJuegos = () => {
        router.push('/(tabs)/juegos');
    };
    const handleLogout = () => {
        router.push('/');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tus Juegos Favoritos</Text>
            <Text style={styles.welcome}>Bienvenido a tu lista de juegos favoritos 🎮</Text>

            <View style={styles.buttonContainer}>
                <Button title="Mis Juegos Favoritos" onPress={handleGoToJuegos} color="#3b82f6" />
                <Button title="Cerrar sesión" onPress={handleLogout} color="#ef4444" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#0a0f2c',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 16,
    },
    welcome: {
        fontSize: 18,
        color: 'white',
        marginBottom: 40,
        textAlign: 'center',
    },
    buttonContainer: {
        gap: 12,
        width: '60%',
    },
});
