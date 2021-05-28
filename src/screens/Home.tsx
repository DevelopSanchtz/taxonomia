import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const Home = () => {
    return (
        <>
            <View style={styles.container}>

            <Text style={styles.mainText}>¡Taxonomía de Marzano!</Text>

                <Image 
                    style = {styles.backgroundImage}
                    source = {require('../assets/img/pantallahome.png')}
                    resizeMode = "contain"
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImage: {
        width: "100%",
        height: 350,
        marginTop: 100
    },
    mainText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center', 
        color: '#707070'  
    },
    secondaryText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#707070',
        textAlign: 'center',
        marginTop: 10
    }
})
