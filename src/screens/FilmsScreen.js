// FilmsScreen.js
import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, View, StyleSheet } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import FilmCard from '../components/FilmCard'; 

export default function FilmsScreen({ route }) {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const { character } = route.params;

  async function fetchFilms() {
    try {
      setLoading(true);
      const responses = await Promise.all(character.films.map(url => axios.get(url)));
      setFilms(responses.map(res => res.data));
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
  fetchFilms();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#000" />;


  return (
    <FlatList
      data={films}
      renderItem={({ item }) => <FilmCard film={item} />}
      keyExtractor={(item) => item.episode_id.toString()}
    />
  );
}

