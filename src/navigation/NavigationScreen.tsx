import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Search } from '../screens/Search';
import { Home } from '../screens/Home';
import { Favorite } from '../screens/Favorite';
import  Icon  from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const NavigationScreen = () => {
     return (
           <Tab.Navigator
            tabBarOptions = {{
                showLabel: false,
                style: {
                    position: 'absolute',
                    backgroundColor: '#201D2E',
                    borderTopStartRadius: 25,
                    borderTopRightRadius: 25,
                    height: 65,
                    ...styles.shadow
                }
            }}>

               <Tab.Screen name="Search" component={Search} 
                options={{ title: 'Búsqueda', 
                    tabBarIcon: ({focused}: any) => (
                        <View style = {{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            {focused 
                            ? <Icon 
                                name="search-outline"
                                color = '#EFD645' 
                                size= { 30 }
                            /> 
                            : <Icon 
                                name="search-outline"
                                color = "white" 
                                size= { 30 }
                                /> 
                            }
                        <Text style={{color: focused ? '#EFD645' : '#201D2E', fontSize: 11}}>BÚSQUEDA</Text>
                        </View>
                ),
                }}/>

               <Tab.Screen name="Home" component={Home} 
               options={{ title: 'Inicio',
                    tabBarIcon: ({focused}: any) => (
                        <View style = {{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        {focused 
                        ? <Icon 
                            name="home-outline"
                            color = '#EFD645' 
                            size= { 30 }
                          /> 
                          : <Icon 
                            name="home-outline"
                            color = "white" 
                            size= { 30 }
                            /> 
                        }
                    <Text style={{color: focused ? '#EFD645' : '#201D2E', fontSize: 12}}>INICIO</Text>
                    </View>
               ) 
               }} />
               
               
               <Tab.Screen name="Favorite" component={Favorite} 
               options={{ title: 'Favoritos', 
                    tabBarIcon: ({focused}: any) => (
                        <View style = {{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        {focused 
                        ? <Icon 
                            name="heart-outline"
                            color = '#EFD645' 
                            size= { 30 }
                        /> 
                        : <Icon 
                            name="heart-outline"
                            color = "white" 
                            size= { 30 }
                            /> 
                        }
                    <Text style={{color: focused ? '#EFD645' : '#201D2E', fontSize: 12}}>FAVORITOS</Text>
                    </View>
                ) 
               }} />
           </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'red',
        shadowOffset: {
          width: 100,
          height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
      }
})