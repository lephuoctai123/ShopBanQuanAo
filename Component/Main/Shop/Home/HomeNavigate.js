import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ListProduct from "./ListProduct/ListProduct";
import Home from "./Home";
import Details from './Details/Details';
import Cart from "../Cart/Cart";

const Stack = createNativeStackNavigator();
export default function HomeNavigation({ navigation }) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart}/>
        <Stack.Screen name="ListProduct" component={ListProduct}/>
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
