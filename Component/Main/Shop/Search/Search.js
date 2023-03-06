import React from "react";
import { TouchableOpacity } from "react-native";
import {Text,View} from "react-native"

function toTitleCase(str){
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase)
}

export default function Search({navigation}){
    
    return(
        <View>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Details')
            }}><Text>go to details</Text></TouchableOpacity>
            <Text>Search</Text>
        </View>
    )
}