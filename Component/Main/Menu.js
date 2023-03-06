import React, { useState } from 'react'
import { Image } from 'react-native'
import { View,Text, SafeAreaView, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Color from '../src/color/Color'

export function Menu({navigation}){
    const[checkUser,setCheckUser] = useState(true)
   
    
    
    const HandlerGotoAuthentication =()=>{
       
        navigation.navigate('Authentication')
    }
    const HandlerGotoChangeInfo = () => {
     
        navigation.navigate('ChangeInfo')
    }
    const HandlerGotoOrderhistory = () => {
        
        navigation.navigate('OrderHistory')
    }
    return (
        <SafeAreaView>
          {checkUser===false?<View style={{height:220,backgroundColor:Color.primary}}>
                <Image source={{uri:'https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg'}} style={{width:100,height:100,backgroundColor:'red',borderRadius:50,alignItems:"center",alignSelf:'center',marginTop:30}}></Image>
                <TouchableOpacity onPress={HandlerGotoAuthentication} style={{justifyContent:"center"}} >
                <Text style={{padding:20,backgroundColor:"black",color:'white',width:'100%',marginTop:60,fontSize:20}}>Sign IN</Text>
            </TouchableOpacity>
            </View>:
            <View>
            <Image source={{uri:'https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg'}} style={{width:100,height:100,backgroundColor:'red',borderRadius:50,alignItems:"center",alignSelf:'center',marginTop:30}}></Image>
            <Text style={{alignSelf:'center'}}>Ten user</Text>
            <TouchableOpacity onPress={HandlerGotoOrderhistory} >
                <Text style={{padding:20,backgroundColor:"black",color:'white',marginVertical:5,width:'100%'}}>OrderHistory</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={HandlerGotoChangeInfo}>
                <Text style={{padding:20,backgroundColor:"black",color:'white',marginVertical:5,width:'100%'}}>ChangeInfo</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{padding:20,backgroundColor:"black",color:'white',marginVertical:5,width:'100%'}}>Sign out</Text>
            </TouchableOpacity>
            </View>}
        </SafeAreaView>
        
    )
}
