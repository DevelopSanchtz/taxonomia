import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationScreen } from './NavigationScreen'
import { Details } from '../screens/Details'
import { Favorite } from '../screens/Favorite'

const Stack = createStackNavigator()

export const StackNavigation = () => {
    return (
        <Stack.Navigator 
            screenOptions = {{
                headerShown: false
            }}
        >

            <Stack.Screen name = "NavigationScreen" component = { NavigationScreen } />
            <Stack.Screen name = "Details" component = { Details } />
            <Stack.Screen name = "Favorite" component = { Favorite } />

        </Stack.Navigator>
    )
}