import React from "react";
import {Text,View,TouchableOpacity} from "react-native"


export default function Details({navigation}){
    
    const eventGobackHome = ()=>{
        navigation.goBack()
    }
    return(
        <View>
            <Text>Details</Text>
            <TouchableOpacity onPress={eventGobackHome}><Text>Go to back Main</Text></TouchableOpacity>
        </View>
    )
}