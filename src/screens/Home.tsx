import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import * as eva from '@eva-design/eva'
import { Onboard } from '../componentes/Onboard';
import AppIntroSlider from 'react-native-app-intro-slider';

const data = [
    {
      title: '¡Taxonomía de Marzano!',
      text: '',
      image: require('../assets/img/pantallahome.png'),
      bg: '#59b2ab', 
    },
    {
      title: '¿Cuál es el objetivo de la aplicación?',
      text: 'Facilitarte a ti como maestro, la clasificación y verbos dentro de la taxonomía',
      image: require('../assets/img/facilidad.png'),
      bg: '#febe29',
    },
    {
      title: 'Pantalla de Búsqueda',
      text: "Aquí podrás buscar el verbo que contendrá el nivel y un ejemplo de uso",
      image: require('../assets/img/elegir.png'),
      bg: '#22bcb5',
    },
    {
      title: 'Pantalla de Favoritos',
      text: "En esta pantalla encontrarás todos tus verbos una vez guardados",
      image: require('../assets/img/favoritos.png'),
      bg: '#59b2ab',
    }
  ];

export const Home = () => {

    const renderItem = ({item}: any) => {
        return (
            <View style={styles.slide}>

                <Image 
                    style = {styles.image}
                    source = {item.image}
                    resizeMode = "contain"
                />

                <Text style={styles.title}>{item.title}</Text>

                <Text style={styles.text}>{item.text}</Text>
            </View>
        )
    }

    const keyExtractor = (item: any) => item.title
    
    return (
        <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          data={data}
        />
      </View>
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
        textAlign: 'center', 
        color: '#707070',
        fontFamily: 'averta-demo-extrabold-italic',

    },
    secondaryText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#707070',
        textAlign: 'center',
        marginTop: 10
    },
    slide: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF"
    },
    image: {
        marginVertical: 60,
        width: "100%",
        height: 350,
        marginTop: 0
    },
    title: {
        fontSize: 30,
        color: "#000",
        textAlign: "center",
        fontFamily: "averta-demo-extrabold-italic",
        marginHorizontal: 60,
    },
    text: {
        fontSize: 20,
        color: "#666666",
        textAlign: "center",
        fontFamily: "pacificitalic",
        marginHorizontal: 60,
        marginTop: 20
    }
})
