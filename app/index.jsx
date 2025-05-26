import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  const router = useRouter();

  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLogin = () => {
    if (nombre.trim() === '' || contrasena.trim() === '') {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    router.replace({
      pathname: '/(tabs)/inicio',
      params: { nombreUsuario: nombre },
    });

    Alert.alert('Éxito', `Bienvenido, ${nombre}`);
  };

  return (
    <LinearGradient
      colors={['#0a0f2c', '#000000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>Iniciar Sesión</Text>

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribí tu nombre"
        placeholderTextColor="#ccc"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribí tu contraseña"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={contrasena}
        onChangeText={setContrasena}
      />

      <View style={styles.buttonContainer}>
        <Button title="Iniciar sesión" onPress={handleLogin} color="#3b82f6" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 12,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#999',
    borderRadius: 6,
    padding: 10,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
});
