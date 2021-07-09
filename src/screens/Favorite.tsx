import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { VerbosFavoritos } from '../componentes/VerbosFavoritos'
import { useNavigation } from '@react-navigation/native';

    export const Favorite = ({route}: any = "") => {

        const verbo = route.params

        const [verbos, setVerbo] = useState ([
            { id: 1, name: 'Repetir', nivel: '1', definicion: 'Se refiere al hecho al hecho de que sin actitudes y percepciones positivas los estudiantes dificilmente podrán aprender adecuadamente' },
            { id: 2, name: 'Registrar', nivel: '1', definicion: 'Se refiere al hecho al hecho de que sin actitudes y percepciones positivas los estudiantes dificilmente podrán aprender adecuadamente' },
            { id: 3, name: 'Memorizar', nivel: '1', definicion: 'Se refiere al hecho al hecho de que sin actitudes y percepciones positivas los estudiantes dificilmente podrán aprender adecuadamente' },
            { id: 4, name: 'Interpretar', nivel: '2', definicion: 'Se refiere a ayudar a los estudiantes a integrar el conocimiento nuevo con el conocimiento que ya se tiene' },
            
        ])

        const [favoritos, setFavoritos] = useState(null)




    return (
        
        <View style={styles.contenedor}>
 
            <View style = {styles.contenedorTexto}>
                <Text style={styles.textoPrincipal}>¡Mi verbo Favorito!</Text>
            </View>

            <View>
                {   verbo ?
                    <VerbosFavoritos verbo = {verbo.name} /> : null   
                }
            </View>

            <View style = {styles.viewSecundario}>
                <Image source = {require("../assets/img/favoritesLike.png")} style = {{height: 220, width: 240, marginLeft: 220, marginTop: 350}}/>
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
    cards: {
        height: 50,
        width: 130, 
        marginLeft: 20,
        
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
        fontFamily: 'averta-demo-extrabold-italic',
        marginTop: 15,
        marginLeft: 20,
        textAlign: 'center',
        opacity: 0.6
    },
    viewSecundario: {
        marginTop: -70,
    },  
    textoSecundario: {
        fontSize: 30,
        color: "#201D2E",
        fontFamily: 'pacificitalic',
        opacity: 0.6,
        marginLeft: 48,
    },
    contenedorTexto: {
        marginBottom: 60
    }
})
