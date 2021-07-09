import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const VerbosBuscar = ({verbo}: any) => {

    const navigation = useNavigation()

    return (
        <View style={styles.container} >
            <TouchableOpacity activeOpacity = {0.8} onPress = { () => navigation.navigate('Details', verbo) }>
                
                <Text style={styles.label}>{verbo.nivel}</Text>
                <Text style={styles.label}>{verbo.name}</Text>
                <Text style={styles.labeldefinicion}>{verbo.definicion}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#201D2E',
        marginBottom: 15,
        borderBottomColor: '#E1E1E1',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 7, 
        elevation: 14,
        borderRadius: 40,
        width: 230,
        height: 270,
        marginTop: 80
        
    },
    label: {
        fontWeight: 'bold',
        fontSize: 21,
        marginTop: 35,
        textAlign: 'center',
        color: 'white',
        justifyContent: 'center'
    },
    labeldefinicion: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 35,
        textAlign: 'center',
        color: 'white',
        justifyContent: 'center',
        paddingHorizontal: 5
    },
    cards: {
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 7, 
    
    }
})