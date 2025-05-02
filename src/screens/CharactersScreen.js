import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import React, {useEffect, useState  } from 'react'
import CharacterCard from '../components/CharacterCard'
import axios from "axios";
import CharactersDetailsScreen from './CharactersDetailsScreen';

export default function CharactersScreen({ navigation }) {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false)

    async function fecthCharacters() {
        try {
            setLoading(true);
            const response = await axios.get(
                "https://swapi.info/api/people"
            );
            setCharacters(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fecthCharacters();
    }, []);

    if (loading) { 
        return <ActivityIndicator size={"large"}/>
    }


  return (
    <View style={styles.container}>
        <FlatList 
            data={characters}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.name}
            renderItem={({item}) => (
                <CharacterCard 
                    character={item}
                    onPress={ () => 
                        navigation.navigate("Detalhes do personagem", {
                            character: { ...item, id: item}
                        })
                    }

                />
            )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
})
