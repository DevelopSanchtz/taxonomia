import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Details = ({route}: any) => {

    const verbo = route.params;
    const navigation = useNavigation()
    const [isFavorite, setIsFavorite] = useState(false)

    const addFavorite = () => {
        navigation.navigate("Favorite", verbo)
        setIsFavorite(true)
    }

    const removeFavorite = () => {
        setIsFavorite(false)
        navigation.navigate("Favorite", verbo)
    }
    
    return (
        <View style = { styles.container }>

            <ScrollView style = { styles.informacionPrincipal }>
                <Text style = {styles.textoDimension}>{verbo.nombreNivel}</Text>
                <Text style = {styles.textoNombreDimension}>{verbo.definicion}</Text>
                <Text style = {styles.textoDescripcion}>
                    {verbo.descripcion} 
                </Text>

                    <TouchableOpacity style = {{position: "relative"}} onPress = {isFavorite ? removeFavorite : addFavorite}>
                        <Icon name = "heart-outline" color = {isFavorite ? "#EFD645" : "#fff"} size = {50} style = {styles.favoritos}/>
                    </TouchableOpacity>
                
            </ScrollView>

            <ScrollView>
                <Text style = {styles.nombreVerbo}>{verbo.name}</Text>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 1150,
    },
    informacionPrincipal: {
        flex: 1,
        backgroundColor: "#201D2E",
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 0,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.46,
shadowRadius: 11.14,

elevation: 17,
    },
    textoDimension: {
        fontSize: 26,
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 10
    },
    textoNombreDimension: {
        fontSize: 30,
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 25
    },
    textoDescripcionDimension: {
        fontSize: 22,
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 25
    },
    textoDescripcion: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        marginTop: 35,
        marginHorizontal: 5
    },
    favoritos: {
        textAlign: "right",
        marginTop: 20,
        marginRight: 25
    },
    nombreVerbo: {
        alignItems: "center", 
        textAlign: "center", 
        marginTop: 50, 
        fontSize: 50, 
        fontWeight: "bold",
        color: "#201D2E"
    }
})