// FilmsScreen.js
import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import FilmCard from '../components/FilmCard'; // Remova as chaves aqui

export default function FilmsScreen() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const { character } = route.params;

  useEffect(() => {
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
