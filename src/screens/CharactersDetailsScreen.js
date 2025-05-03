import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import DetailCard from '../components/DetailCard';

export default function CharactersDetailsScreen({ route }) {
  const { character } = route.params;
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <DetailCard character={character} />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Naves do personagem', { character })}
        >
          <Text style={styles.buttonText}>Ver Naves</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Credito dos desenvolvedores', { character })}
        >
          <Text style={styles.buttonText}>Ver Filmes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  buttonsContainer: {
    gap: 12,
  },
  button: {
    backgroundColor: 'yellow',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
