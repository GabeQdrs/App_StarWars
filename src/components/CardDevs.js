import { View, Text, StyleSheet, Image } from "react-native";
import { mockDev } from "../data/devs";

export default function CardDevs() {
    return (
        <View>
            {mockDev.map((dev) => (
                <View key={dev.ra} style={styles.card}>
                    
                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>RA:</Text>
                        <Text style={styles.value}>{dev.ra}</Text>
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>Nome completo:</Text>
                        <Text style={styles.value}>{dev.name}</Text>
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.value}>{dev.email}</Text>
                    </View>
                </View>
                  ))}
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginBottom: 20,
    },
    card: {
        backgroundColor: "#ffffff",
        borderRadius: 16,
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        width: "100%",
    },
    infoContainer: {
        width: "100%",
        marginBottom: 10,
    },
    label: {
        fontSize: 15,
        color: "#666",
    },
    value: {
        fontSize: 18,
        fontWeight: "bold",
    },
});