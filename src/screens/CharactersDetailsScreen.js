import { View, Text} from 'react-native'
import React from 'react'

export default function CharactersDetailsScreen({route,onPress}) {
    const {character} = route.params;
  return (
    <View>
          <Text>CharactersDetailsScreen</Text>
    </View>
  )
}
