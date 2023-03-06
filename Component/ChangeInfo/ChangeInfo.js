import React from "react";
import {Text,View,TouchableOpacity, SafeAreaView, SafeAreaViewBase} from "react-native"
import { TextInput } from "react-native-gesture-handler";


export default function ChangeInfo({navigation}){
    
    
    const eventGobackMain = ()=>{
        navigation.goBack()
    }
    return(
       <SafeAreaView>
        <View style={{width:'100%',height:50,backgroundColor:"yellow"}}>
            <Text>User Information</Text>
        </View>
            <View style={{alignItems:"center",marginTop:"30%",margin:10}}>
            <TextInput style={{marginVertical:5,width:"100%",height:50,borderWidth:1,paddingLeft:5}} placeholder="Enter your name"/>
            <TextInput style={{marginVertical:5,width:"100%",height:50,borderWidth:1,paddingLeft:5}} placeholder="Enter your address"/>
            <TextInput style={{marginVertical:5,width:"100%",height:50,borderWidth:1,paddingLeft:5}} placeholder="Enter your phone number"/>
            <TouchableOpacity style={{marginVertical:5,width:"100%",height:50,borderWidth:1,alignItems:'center',justifyContent:'center'}}><Text>Change you phone number</Text></TouchableOpacity>
        </View>
       
        </SafeAreaView>
    )
}