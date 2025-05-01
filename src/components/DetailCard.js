// components/DetailCard.js
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function DetailCard({ character }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Personagem: <Text style={styles.value}>{character.name}</Text></Text>
      <Text style={styles.label}>Tamanho: <Text style={styles.value}>{character.height}</Text></Text>
      <Text style={styles.label}>Peso: <Text style={styles.value}>{character.mass}</Text></Text>
      <Text style={styles.label}>Cor do cabelo: <Text style={styles.value}>{character.hair_color}</Text></Text>
      <Text style={styles.label}>Cor da pele: <Text style={styles.value}>{character.skin_color}</Text></Text>
      <Text style={styles.label}>Cor dos olhos: <Text style={styles.value}>{character.eye_color}</Text></Text>
      <Text style={styles.label}>Gênero: <Text style={styles.value}>{character.gender}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    width: "100%",
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    marginBottom: 6,
  },
  value: {
    fontWeight: 'normal',
    color: '#666',
  },
});
