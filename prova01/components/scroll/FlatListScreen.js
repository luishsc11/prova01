import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
export default function FlatListScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {Array.from({ length: 20 }).map((_, index) => (
                <View key={index} style={styles.item}>
                    <Text style={styles.text}>Item {index + 1}</Text>
                </View>
            ))}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 20,
    },
    item: {
        marginBottom: 10,
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})