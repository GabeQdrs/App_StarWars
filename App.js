import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import CharactersScreen from './src/screens/CharactersScreen';
import CharactersDetailsScreen from './src/screens/CharactersDetailsScreen';
import StarshipsScreen from './src/screens/StarshipsScreen';
import FilmsScreen from './src/screens/FilmsScreen';
import CreditsScreen from './src/screens/CreditsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Lista de personagens'>
        <Stack.Screen name='Lista de personagens' component={CharactersScreen}/>
        <Stack.Screen name='Personagem' component={CharactersDetailsScreen}/>
        <Stack.Screen name='Naves do personagem' component={StarshipsScreen}/>
        <Stack.Screen name='Filmes' component={FilmsScreen}/>
        <Stack.Screen name='Credito dos desenvolvedores' component={CreditsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
