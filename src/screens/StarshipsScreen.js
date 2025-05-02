// StarshipsScreen.js
import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import ShipCard from '../components/ShipCard'; 

export default function StarshipsScreen({ route }) {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(false);
  const { character } = route.params;

  async function fetchShips() {
    if (!character.ships || character.ships.lenght === 0) return;
    try {
      setLoading(true);
      const responses = await Promise.all(character.ships.map(url => axios.get(url)));
      setShips(responses.map(res => res.data));
    } catch (error) {
      console.error("Erro ao buscar naves:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
  fetchShips();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#000" />;

  if (!character.ships || character.ships.lenght === 0) {
    return (
      <View style={StyleSheet.center}>
        <Text>Este personagem não possui naves!</Text>
      </View>
    );
  }


  return (
    <FlatList
      data={ships}
      renderItem={({ item }) => <ShipCard ship={item} />}
      keyExtractor={(item) => item.url}
    />
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});