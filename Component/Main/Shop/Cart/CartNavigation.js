import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Details from '../Home/Details/Details'
import Cart from './Cart'


const Stack = createNativeStackNavigator()
export default function CartNavigation(){
    return (
        <NavigationContainer independent={true} >
            <Stack.Navigator screenOptions={{headerShown:false}}>
               <Stack.Screen name='Cart' component={Cart} /> 
               <Stack.Screen name='Details' component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}