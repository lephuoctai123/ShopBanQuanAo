import React from 'react'
import {View,Text, Dimensions, Image, TouchableOpacity } from 'react-native'

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import Color from '../../src/color/Color';

const {height} = Dimensions.get('window')
export default function Header(props){
    const{onPresOpen}= props
    

    return(
        <View style={{width:'100%',height:height/7,backgroundColor:Color.primary,justifyContent:"center",alignItems:"center"}}>
        <View style={{width:'90%',height:'100%'}}>
        <View style={{flexDirection:'row',justifyContent:"space-between",marginStart:-7,marginEnd:-7}}>
               <TouchableOpacity onPress={onPresOpen}>
               <Ionicons color={'white'} size={40} name='menu'/>
               </TouchableOpacity> 
                <Text style={{color:'white',fontSize:25,fontWeight:"300",marginTop:10,marginBottom:5}}>Wearing a Dress</Text>
                <Ionicons color={'white'} size={40} name='ios-school-sharp'/>
            </View>
            <View>
                <TextInput placeholder='What do you want to buy ?' style={{height:40,width:"100%",backgroundColor:"white",paddingLeft:20}}/>
            </View>
        </View>
            
            
        </View>
    )
}
