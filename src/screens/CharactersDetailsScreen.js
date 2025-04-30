import { View, Text } from 'react-native'
import React from 'react'

export default function CharactersDetailsScreen({route}) {
    const {character} = route.params;
  return (
    <View>
      <Text>{character.name}</Text>
    </View>
  )
}