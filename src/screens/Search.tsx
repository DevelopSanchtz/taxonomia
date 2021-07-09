import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, TextInput, Image, FlatList, ScrollView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import { VerbosBuscar } from '../componentes/VerbosBuscar';
import { VerbosFavoritos } from '../componentes/VerbosFavoritos';
import { ListaVerbos } from '../Hooks/ListaVerbos';
import { useDebouncedValue } from '../Hooks/useDebouncedValue';

interface Props {
    onDebounce: ( value: string ) => void;
}

const {width: windowWidth} = Dimensions.get('window')

    export const Search = ( {onDebounce}: Props ) => {

        const [textValue, setTextValue] = useState('')

        const [ term, setTerm] = useState('')

        const navigation = useNavigation()

        const { verbos } = ListaVerbos()

        const [verbosFiltered, setVerbosFiltered] = useState([])

        const debouncedValue = useDebouncedValue(textValue, 1500)

        useEffect(() => {
              if(textValue.length === 0){
                  return setVerbosFiltered([])
              }

              const nuevoArray = verbos.filter(poke => true)

        }, [textValue])

    return (
        <ScrollView style={styles.contenedor}>

                <View>
                        <Text style={styles.textoPrincipal}>Busca el verbo!</Text>
                        <Text style={styles.textoSecundario}>Busca el verbo!</Text>

                </View>

        
                <View style = {styles.campoBuscar}>

                    <TextInput
                        placeholder = "Escribe aquí tu verbo"
                        placeholderTextColor = "gray"
                        style = {{
                            fontWeight: "bold",
                            fontSize: 18,
                            width: 260,
                        }}
                        value = { textValue }
                        onChangeText = { setTextValue }
                        
                    />
                    
                    <Image source = {require("../assets/img/busqueda.png")} style = {{height: 20, width: 20, marginLeft: 40}}/>
                </View>


            {/* CAROUSEL */}

            <View >
                <View>
                    {
                        textValue.length > 0 ? <Carousel 
                        data = {verbos.filter(verb => verb.name.includes( textValue ))} //Aqui va verbosFiltered
                        renderItem= { ({item}: any) =>
                            <VerbosBuscar verbo = {item} />
                        }
                        sliderWidth= {400}
                        itemWidth = {250}
                    /> : <Image source = {require('../assets/img/pantallabuscar.png')} style = {{width: 400, height: 300, marginTop: 100}} />
                    }
                    
                </View>
            </View>
            
            {/*<View>
            <TouchableOpacity style = {styles.botonEjemplos}>
                <Text style = {styles.textoBoton}>Ejemplos</Text>
            </TouchableOpacity>
            </View> */}

        </ScrollView>
    );
}


const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    botonEjemplos: {
        marginHorizontal: 110,
        marginTop: 50,
        height: 50,
        width: 190,
        backgroundColor: '#201D2E',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        justifyContent: "center",
        alignItems: "center"
    },
    textoBoton: {
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
    },
    ContenedorArriba: {
        backgroundColor: '#C2E7D9',
        height:"25%",
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
        fontFamily: 'cooper-black',
        marginTop: 40,
        marginLeft: 20,
    },
    textoSecundario: {
        fontSize: 28,
        color: "#201D2E",
        fontFamily: 'cooper-black',
        opacity: 0.3,
        marginLeft: 60,
        marginBottom: 15
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
        borderColor: "#000",
        elevation: 10
    },
});