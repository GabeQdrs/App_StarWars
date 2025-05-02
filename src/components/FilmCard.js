// FilmCard.js
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function FilmCard({ film }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{film.title}</Text>
      <Text>Diretor: {film.director}</Text>
      <Text>Lançamento: {film.release_date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
});
