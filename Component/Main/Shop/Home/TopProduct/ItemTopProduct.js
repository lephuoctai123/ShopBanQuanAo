import React, { useState } from "react";
import { Dimensions, Image, TouchableOpacity } from "react-native";
import {Text,View} from "react-native"
import { FlatList } from "react-native-gesture-handler";

const{height,width} = Dimensions.get('window');

export default ItemProduct = (props) =>{
   const{img,nameProduct, price} = props.products
   const{navigation} = props
   
    return(
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate('Details')
        }}
         style={{width:"50%", alignItems:'center',height:300,marginBottom:-67,maxHeight:300}}>
            <View style={{width:'97%',height:'75%',borderWidth:1,alignItems:'center',backgroundColor:'white'}}>
                <Image style={{width:150,height:150}} source={{uri:img}}></Image>
                <Text style={{marginTop:10}}>{nameProduct}</Text>
                <Text style={{marginTop:10}}>{price}$</Text>
            </View>
        </TouchableOpacity>
    )

}
