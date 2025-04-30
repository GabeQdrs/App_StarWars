import React, { useEffect, useRef,View } from "react";
import { Text,StyleSheet} from "react-native";
import { Audio } from 'expo-av';

export default function CreditsScreen() {
  const sound = useRef(null)

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

  return(
     <Text>
      ggg
     </Text>
        )
}
