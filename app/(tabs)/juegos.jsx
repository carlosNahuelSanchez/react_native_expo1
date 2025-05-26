import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import spiderman from '../../assets/spiderman.avif';
import readead from '../../assets/reddead.avif';
import lastofus from '../../assets/lastofus.avif';
import horizon from '../../assets/horizon.avif';
import shadow from '../../assets/shadow.avif';
import minecraft from '../../assets/minecraft.avif';

const juegos = [
  { id: '1', nombre: 'Red Dead Redemption 2', imagen: readead },
  { id: '2', nombre: 'The Last Of Us', imagen: lastofus },
  { id: '3', nombre: 'Horizon Zero Dawn', imagen: horizon },
  { id: '4', nombre: 'Spider-Man (PS4)', imagen: spiderman },
  { id: '5', nombre: 'Middle-Earth | Shadows Of War', imagen: shadow },
  { id: '6', nombre: 'Minecraft', imagen: minecraft },
];

export default function JuegosFavoritos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Juegos Favoritos</Text>
      <FlatList
        data={juegos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.imagen }} style={styles.image} />
            <Text style={styles.name}>{item.nombre}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, 
    padding: 20, backgroundColor: '#121212' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: 'white', textAlign: 'center' },
  list: { alignItems: 'center' },
  item: {
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#1f1f1f',
    padding: 12,
    borderRadius: 8,
    width: '100%',
  },
  image: { width: 100, height: 100, borderRadius: 12, marginBottom: 8 },
  name: { fontSize: 16, color: 'white' },
});
