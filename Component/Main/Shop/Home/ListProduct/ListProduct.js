import React, { useState } from "react";
import {Text,View,TouchableOpacity, Image} from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList } from "react-native-gesture-handler";
import Category from "../Category";
import Color from "../../../../src/color/Color";


export default function ListProduct({navigation,route}){

    const{id,name}= route.params.categorys
    
    

    const[listProduct,setListProduct] = useState([
        {
            id:1,
            img:'https://cf.shopee.vn/file/41decd7d44dcb5c8cec44c0af6979155',
            name:'LaceSleeve SI',
            price:117,
            material:'leather',
            color:'blue',
            details:'edugdcukgdjcghjcvczhxjvdhdfdhyshjvcxzhjvyfydcfsdsdccd'
        },
        {
            id:1,
            img:'https://cf.shopee.vn/file/41decd7d44dcb5c8cec44c0af6979155',
            name:'LaceSleeve SI',
            price:117,
            material:'silk',
            color:'blue',
            details:'edugdcukgdjcghjcvczhxjvdhdfdhyshjvcxzhjvyfydcfsdsdccdxgyuxg'
        },
        {
            id:2,
            img:'https://bizweb.dktcdn.net/100/106/923/products/1-384b2ef4-65dd-4cb4-b040-3f5c6aa31e29.jpg?v=1531413556520',
            name:'gucci',
            price:130,
            material:'leather',
            color:'black'
        },
        {
            id:2,
            img:'https://bizweb.dktcdn.net/100/106/923/products/1-384b2ef4-65dd-4cb4-b040-3f5c6aa31e29.jpg?v=1531413556520',
            name:'gucci',
            price:130,
            material:'leather',
            color:'black'
        },
        {
            id:3,
            img:'https://thesneakerhouse.com/wp-content/uploads/2021/12/Nike-Sportswear-19.jpg',
            name:'Nike',
            price:130,
            material:'leather',
            color:'red'
        },
        {
            id:3,
            img:'https://thesneakerhouse.com/wp-content/uploads/2021/12/Nike-Sportswear-19.jpg',
            name:'nike',
            price:130,
            material:'leather',
            color:'red'
        },
    ])
    
    const eventGobackHome = ()=>{
        navigation.goBack()
    }
    return(
        <View style={{margin:5,flex:1}}>
            <View style={{height:40,width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <TouchableOpacity onPress={eventGobackHome}><Ionicons size={30} name='arrow-back-sharp' /></TouchableOpacity>
                <Text style={{textAlign:"center",fontSize:18,flex:1,marginStart:-15,fontSize:23,color:Color.primary,fontWeight:"bold"}}>{name}</Text>
            </View>
           
            <View>
               <FlatList 
                style={{marginBottom:90,paddingVertical:2}}
                data={listProduct}
                renderItem={({item})=> ( 
                item.id == id && <View style={{flex:1,flexDirection:'row',borderTopWidth:1,borderBottomWidth:1,borderColor:'black',paddingVertical:5}}>
                        <Image style={{width:100,height:100,marginEnd:10}} source={{uri:item.img}}></Image>
                        <View>
                            <Text style={{fontWeight:"bold",fontSize:17}}>{item.name}</Text>
                            <Text>{item.price}$</Text>
                            <Text>material: {item.material}</Text>
                            <View style={{flexDirection:'row'}}>
                            <Text>color: {item.color}</Text>
                            <View style={{width:15,height:15,borderRadius:7.5,backgroundColor:item.color,marginHorizontal:10}}></View>
                            <TouchableOpacity onPress={()=>{navigation.navigate('Details')}}><Text style={{color:'red'}}>ShowDetails</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>)}/> 
            </View>
            
           
            {/* <TouchableOpacity onPress={()=>{
                navigation.navigate('Details')
            }}><Text>product Details</Text></TouchableOpacity> */}
        </View>
    )
}