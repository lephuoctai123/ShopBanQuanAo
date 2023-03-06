import React from "react";
import { View, Text, Button, Dimensions,Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "./Cart/Cart";
import Contact from "./Contact/Contact";
import Search from "./Search/Search";
import Home from "./Home/Home";
import Header from "./Header";
import Ionicons from '@expo/vector-icons/Ionicons';
import Color from "../../src/color/Color";
import HomeNavigation from "./Home/HomeNavigate";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import CartNavigation from "./Cart/CartNavigation";
import SearchNavigation from "./Search/SearchNavigation";

const Tab = createBottomTabNavigator();
export function Shop(props) {
  const { navigation } = props;

  const CustomBtn = () =>{
    return(<View style={{backgroundColor:'red',height:50,width:60,borderRadius:80,justifyContent:"center",alignItems:"center",marginBottom:20,borderWidth:5,borderColor:Color.primary}}>
    <Image style={{width:20,height:20}} source={{uri:'https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design.png'}}></Image>
 </View>)
 }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        onPresOpen={() => {
          navigation.openDrawer();
        }}
      />
      {/* <View style={{height:70,backgroundColor:"red"}}>
        <TouchableOpacity style={{}} onPress={()=>{
          navigation.openDrawer();
        }}>
          <Text>Open menu</Text>
        </TouchableOpacity>
      </View> */}
      <View style={{ flex: 1 }}>
        <NavigationContainer independent={true}>
          <Tab.Navigator screenOptions={{   
            headerShown:false,
            tabBarStyle:{
              position:'absolute',
              height:40,
              left:5,
              right:5,
              elevation:0,
              backgroundColor:Color.primary,
              borderRadius:15,
              bottom:10,
              borderRadius:21,
            }
          }}>
            <Tab.Screen  options={{tabBarIcon:()=>(<Ionicons size={20} name='home'/>)}} name="Home" component={HomeNavigation}  />
            <Tab.Screen options={{tabBarIcon:()=>(<Ionicons size={20} name='search'/>)}} name="Search" component={SearchNavigation} />
            <Tab.Screen options={{tabBarIcon:()=>(<Ionicons size={20} name='contract-sharp' />)}} name="Contact" component={Contact} />
            <Tab.Screen  options={{tabBarIcon:()=><CustomBtn/>, tabBarBadge:3,tabBarBadgeStyle:{color:'white',backgroundColor:'black'}}}  name="Cart" component={CartNavigation}  />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}
