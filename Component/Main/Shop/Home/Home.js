import React from "react";
import { Image, TouchableOpacity } from "react-native";
import {Text,View} from "react-native"
import Collection from './Collection'
import Category from './Category'
import TopProduct from "./TopProduct/TopProduct";
import { ScrollView } from "react-native-gesture-handler";


export default function Home(props){
const {navigation} = props
     
    return(
        <ScrollView style={{backgroundColor:'#DCDCDC',padding:10,flex:1}}>
            <Collection />
            <Category navigation={{navigation}}/>
            <TopProduct navigation={{navigation}}/>
        </ScrollView>
    )
}