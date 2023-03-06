import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ListProduct from "../Home/ListProduct/ListProduct";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Cart({ navigation }) {
  const [listCart, setListCart] = useState([
    {
      id: 1,
      img: "https://thesneakerhouse.com/wp-content/uploads/2021/12/Nike-Sportswear-19.jpg",
      name: "nike",
      quantity: 1,
      price: 129,
    },
    {
      id: 1,
      img: "https://thesneakerhouse.com/wp-content/uploads/2021/12/Nike-Sportswear-19.jpg",
      name: "nike",
      quantity: 1,
      price: 129,
    },
    {
      id: 1,
      img: "https://thesneakerhouse.com/wp-content/uploads/2021/12/Nike-Sportswear-19.jpg",
      name: "nike",
      quantity: 1,
      price: 129,
    },
    {
        id: 1,
        img: "https://thesneakerhouse.com/wp-content/uploads/2021/12/Nike-Sportswear-19.jpg",
        name: "nike",
        quantity: 1,
        price: 129,
      },
      {
        id: 1,
        img: "https://thesneakerhouse.com/wp-content/uploads/2021/12/Nike-Sportswear-19.jpg",
        name: "nike",
        quantity: 1,
        price: 129,
      },
      {
        id: 1,
        img: "https://thesneakerhouse.com/wp-content/uploads/2021/12/Nike-Sportswear-19.jpg",
        name: "nike",
        quantity: 1,
        price: 129,
      },
      
  ]);

  const hanleTang = (id_item) => {
    return;
  };

  return (
    <View style={{ height:'80%', padding: 10 }}>
    <View>
    <FlatList
    
        data={listCart}
        renderItem={({item}) => (
          <View style={{ flexDirection: "row",marginBottom:5,backgroundColor:"white",alignItems:"center",height:120}}>
            <Image
              style={{ width: 70, height: 100,marginHorizontal:10 }}
              source={{ uri: item.img }}
            />
            <View style={{flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',flex:1}}>
            <Text style={{fontSize:20}}>{item.name}</Text>
            <TouchableOpacity><Ionicons size={25} name='remove-circle'></Ionicons></TouchableOpacity>
            </View>
              <Text style={{marginVertical:15,fontSize:15,color:'red'}}>{item.price}$</Text>
              <View style={{ flexDirection: "row",marginBottom:10,alignItems:"center"}}>
                <Text style={{fontSize:20}}>+</Text>
                <Text  style={{marginHorizontal:30}}>3</Text>
                <Text style={{fontSize:20}}>-</Text>
              </View>
            </View>
            
          </View>
          
        )}
      />
    </View>
    <View>
        <TouchableOpacity style={{width:'100%',height:60,backgroundColor:"black",marginTop:28,alignItems:"center",justifyContent:'center'}}>
            <Text style={{color:'white'}}>TOTAL ...1000$ CheckOut Now</Text>
        </TouchableOpacity>
    </View>
      
      
    </View>
    
  );
}
