import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export const VerbosFavoritos = ({verbo}: any = "") => {
    console.log(verbo)
    return (
        <ScrollView style={styles.container}>
            <View >
                <Text style={styles.label}>{verbo}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#201D2E',
        marginBottom: 15,
        borderBottomColor: '#E1E1E1',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        paddingVertical: 20,
        paddingHorizontal: 15,
        marginHorizontal: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 7, 
        borderRadius: 40,
        width: 320,
        height: 75,
        
    },
    label: {
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',
        color: 'white',
        justifyContent: 'center'
    },
    cards: {
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 7, 
    
    }
})