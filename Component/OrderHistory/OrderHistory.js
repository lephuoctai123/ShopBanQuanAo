import React, { useState } from "react";
import {Text,View,TouchableOpacity} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function OrderHistory({navigation}){
    const[listOrder,setListOrder] = useState([
        {
            orderId:'ord001',
            orderTime:'2017-04-19 09:30:08',
            status:'1',
            total:'100$'
        },
        {
            orderId:'ord001',
            orderTime:'2017-04-19 09:30:08',
            status:'1',
            total:'100$'
        },
        {
            orderId:'ord001',
            orderTime:'2017-04-19 09:30:08',
            status:'1',
            total:'100$'
        }
    ])
    
    const eventGobackMain = ()=>{
        navigation.goBack()
    }
    return(
        <SafeAreaView>
            <View>
            <View style={{height:50,width:'100%',backgroundColor:'red',alignItems:"center",justifyContent:"center",flexDirection:"row",justifyContent:"space-between"}}>
                <Text></Text>
                <Text>Oder History</Text>
                <TouchableOpacity><Ionicons name='arrow-redo'></Ionicons></TouchableOpacity>
            </View>
            
        </View>
        <View style={{backgroundColor:"yellow",width:'100%',height:'100%'}}>
            {listOrder.map(orderItem=>
                <View style={{flexDirection:"row",justifyContent:"space-between",backgroundColor:"white",margin:5}}>
                    <View style={{margin:5}}>
                        <Text style={{marginVertical:5}}>orderId: </Text>
                        <Text style={{marginVertical:5}}>OrderTime: </Text>
                        <Text style={{marginVertical:5}}>Status: </Text>
                        <Text style={{marginVertical:5}}>Total:</Text>
                    </View>
                    <View style={{alignItems:"flex-end"}}>
                    <Text style={{marginVertical:5}}>{orderItem.orderId}</Text>
                        <Text style={{marginVertical:5}}>{orderItem.orderTime}</Text>
                        <Text style={{marginVertical:5}}>{orderItem.status} </Text>
                        <Text style={{marginVertical:5}}>{orderItem.total}</Text>
                    </View>

                       
                    
                </View>
            )}
        </View>
        
        </SafeAreaView>
       
    )
}
