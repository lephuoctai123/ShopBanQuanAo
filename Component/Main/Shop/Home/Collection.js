import React from "react";
import { Dimensions, Image, TouchableOpacity } from "react-native";
import {Text,View} from "react-native"

const{height} = Dimensions.get('window');
export default Collection = (props) =>{
   const {navigation}=props
    return(
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate('list')
        }}
         style={{height:height*0.3,backgroundColor:'white',shadowColor:'black',shadowOpacity:1,shadowOffset:{width:0,height:3},flexDirection:"column"}}>

            <View style={{marginLeft:7,flex:0.5,justifyContent:'center',margin:7}}>
                <Text style={{fontSize:18,opacity:0.5}}>SPRING COLLECTION</Text>
            </View>
            <Image  style={{flex:4.5,margin:5}} source={{uri:'https://orderquangchau.net/wp-content/uploads/2020/06/say-bang-may-co-khien-quan-ao-bac-mau-khong2.jpg'}}></Image>
        </TouchableOpacity>
    )

}
