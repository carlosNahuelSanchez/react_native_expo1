import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'inicio') {
                        iconName = 'home-outline';
                    } else if (route.name === 'perfil') {
                        iconName = 'person-outline';
                    } else if (route.name === 'juegos') {
                        iconName = 'game-controller-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#3b82f6',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
        />
    );
}
