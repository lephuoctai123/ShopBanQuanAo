import React from "react";
import { TouchableOpacity } from "react-native";
import {Text,View} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "../src/color/Color";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";

export default function Authentication({navigation}){
    const[isActivityBtn,setIsActivityBtn] = useState(true)
   
    
    const eventGobackMain = ()=>{
        navigation.goBack()
    }
    return(
        <SafeAreaView style={{backgroundColor:'#3FB060',flex:1,padding:10}}>
             <View style={{flexDirection:"row",alignItems:"center",justifyContent:'space-between'}}>
            <TouchableOpacity onPress={eventGobackMain}><Ionicons size={40} color={'white'} name='arrow-back' /></TouchableOpacity>
            <Text style={{fontSize:30}}>Wearing a Dress</Text>
            <Ionicons size={40} name='alarm'></Ionicons>
        </View>
        {isActivityBtn==true ? <View style={{marginTop:130}}>
            <TextInput placeholder="Enter your email ?" style={{width:'100%',height:45,backgroundColor:"white",borderRadius:15,padding:14,marginBottom:10}}/>
            <TextInput placeholder="Enter your password ?" style={{width:'100%',height:45,backgroundColor:"white",borderRadius:15,padding:14}}/>
            <TouchableOpacity style={{width:'100%',height:45,backgroundColor:"white",borderRadius:15,marginTop:30,alignItems:'center',justifyContent:'center'}}><Text>Login</Text></TouchableOpacity>         
        </View> 
        :<View style={{marginTop:130}}>
        <TextInput placeholder="Name ?" style={{width:'100%',height:45,backgroundColor:"white",borderRadius:15,padding:14,marginBottom:10}}/>
            <TextInput placeholder="Email ?" style={{width:'100%',height:45,backgroundColor:"white",borderRadius:15,padding:14,marginBottom:10}}/>
            <TextInput placeholder="Password ?" style={{width:'100%',height:45,backgroundColor:"white",borderRadius:15,padding:14}}/>
            <TextInput placeholder="Confirm password ?" style={{width:'100%',height:45,backgroundColor:"white",borderRadius:15,padding:14,marginTop:10}}/>
            <TouchableOpacity style={{width:'100%',height:45,backgroundColor:"white",borderRadius:15,marginTop:30,alignItems:'center',justifyContent:'center'}}><Text>Register</Text></TouchableOpacity>         
        </View>}
        <View style={{flexDirection:'row',justifyContent:"space-between",bottom:0,position:'absolute',alignSelf:"center",marginBottom:100}}>
        <TouchableOpacity onPress={()=>{setIsActivityBtn(true)}} style={{width:'49.5%',height:50,backgroundColor:"white",borderTopLeftRadius:15,borderBottomLeftRadius:15,marginTop:30,alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:17,color:isActivityBtn===true?'#3FB060':'black',fontWeight:'bold'}}>Sign In</Text></TouchableOpacity> 
        <TouchableOpacity onPress={()=>{setIsActivityBtn(false)}} style={{width:'49.5%',height:50,backgroundColor:"white",borderTopRightRadius:15,borderBottomRightRadius:15,marginTop:30,alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:17,color:isActivityBtn===false?'#3FB060':'black',fontWeight:'bold'}}>Sign Up</Text></TouchableOpacity> 
        </View>
        </SafeAreaView>
       
    )
}