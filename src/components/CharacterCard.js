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
        backgroundColor: 'yellow',
        margin: 8,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
    },
    text: {
        fontSize: 18,
    }
})