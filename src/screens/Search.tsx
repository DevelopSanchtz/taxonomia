import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';

    export const Search = () => {

    return (
        <View style={styles.contenedor}>

            <View style = {styles.ContenedorArriba}>

                <View>
                        <Text style={styles.textoPrincipal}>Busca el verbo!</Text>
                        <Text style={styles.textoSecundario}>Busca el verbo!</Text>

                </View>

            </View>

            <LinearGradient 
                colors = {["rgba(194,231,217,1)", "transparent"]}
                style = {styles.gradient}
            >
                <View style = {styles.campoBuscar}>
                    <TextInput
                        placeholder = "Escribe aquí tu verbo"
                        placeholderTextColor = "gray"
                        style = {{
                            fontWeight: "bold",
                            fontSize: 18,
                            width: 260
                        }}
                    />
                    <Image source = {require("../assets/img/busqueda.png")} style = {{height: 20, width: 20, marginLeft: 40}}/>
                </View>

               

            </LinearGradient>

            <View style = {{ height: 440 }}>
                  
                </View>

        </View>
    );
}







const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    ContenedorArriba: {
        backgroundColor: '#C2E7D9',
        height:"20%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 20,
    },
    segundoContenedor: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25,
        width: "100%",
    },
    textoPrincipal: {
        fontSize: 30,
        color: "#000",
        fontFamily: 'berlin-sans-fb-demi-bold',
        marginTop: 30,
        marginLeft: 20
    },
    textoSecundario: {
        fontSize: 27,
        color: "#201D2E",
        fontFamily: 'berlin-sans-fb-demi-bold',
        opacity: 0.3,
        marginLeft: 48,
    },
    gradient: {
        left: 0,
        right: 0,
        height: 90,
        marginTop: -45
    },
    campoBuscar: {
        backgroundColor: '#FFF',
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        borderRadius: 15,
        marginTop: 25,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#000"
    },
});