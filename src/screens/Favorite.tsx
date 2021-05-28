import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

    export const Favorite = () => {
    return (
        
        <View style={styles.contenedor}>

            <View style = {styles.ContenedorArriba}>

                <View>
                    <Text style={styles.textoPrincipal}>¡Mi verbo Favorito!</Text>
                </View>

            </View>

            <LinearGradient 
            colors = {["rgba(194,231,217,1)", "transparent"]}
            style = {styles.gradient}
            >

            </LinearGradient>

            <View style = {styles.viewSecundario}>
                <Text style={styles.textoSecundario}>Comienza a guardar tus verbos favoritos!</Text>
            </View>

            <View style = {styles.viewSecundario}>
                <Image source = {require("../assets/img/favoritesLike.png")} style = {{height: 280, width: 300, marginLeft: 180, marginTop: 80}}/>
            </View>

        </View>
        
    );
}

const styles = StyleSheet.create({
    gradient: {
        left: 0,
        right: 0,
        height: 90,
        marginTop: -45
    },
    contenedor: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    ContenedorArriba: {
        backgroundColor: '#C2E7D9',
        height:"15%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 20,
    },
    textoPrincipal: {
        fontSize: 35,
        color: "#000",
        fontFamily: 'berlin-sans-fb-demi-bold',
        marginTop: 15,
        marginLeft: 20,
        textAlign: 'center'
    },
    viewSecundario: {
        marginTop: 50,
        marginLeft: -15
    },  
    textoSecundario: {
        fontSize: 30,
        color: "#201D2E",
        fontFamily: 'berlin-sans-fb-demi-bold',
        opacity: 0.6,
        marginLeft: 48,
    },
})
