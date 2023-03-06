import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Details from '../Home/Details/Details'
import Search from './Search'



const Stack = createNativeStackNavigator()
export default function SearchNavigation(){
    return (
        <NavigationContainer independent={true} >
            <Stack.Navigator screenOptions={{headerShown:false}}>
               <Stack.Screen name='Search' component={Search} /> 
               <Stack.Screen name='Details' component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}