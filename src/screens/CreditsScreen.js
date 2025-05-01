import React, { useEffect, useRef,View } from "react";
import { Text,StyleSheet} from "react-native";
import { Audio } from 'expo-av';
import CardDevs from "../components/CardDevs";
import { ScrollView } from "react-native";

export default function AboutScreen() {
    const sound = useRef(null); 
 

  useEffect(() => {
    async function loadAndPlaySound() {
        try {
            const { sound: loadedSound } = await Audio.Sound.createAsync(
                require("../../assets/StarWarstheme.mp3")
            );
            sound.current = loadedSound;
            await sound.current.playAsync();
        } catch (error) {
            console.log(error);}}
    loadAndPlaySound();
    return () => {
        if (sound.current) {
            sound.current.unloadAsync();
        }
    };
}, []); 

return (
    <ScrollView contentContainerStyle={styles.cardContainer}>
        <Text style={styles.title}>Desenvolvedores</Text>
        <CardDevs />
    </ScrollView>
);
}

const styles = StyleSheet.create({
cardContainer: {
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 10,
    paddingTop: 20,
    margin: 8,
},
title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
},
});

