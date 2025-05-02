import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CharacterCard({character, onPress}) {
  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={onPress}>
      <Text style={styles.text}>{character.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      margin: 8,
      alignItems: 'center',
      paddingVertical: 10,
      borderRadius: 10,
      elevation: 2,
    },
    text: {
      fontSize: 18,
      fontWeight: '400',
    }
})