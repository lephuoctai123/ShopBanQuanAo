import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {Menu} from './Menu'
import { Shop } from "./Shop/Shop";
import ChangeInfo from "../ChangeInfo/ChangeInfo";
import Authentication from "../Authentication/Authentication";
import OrderHistory from "../OrderHistory/OrderHistory";


const Drawer = createDrawerNavigator();

export default function Main(props) {
  const {navigation} = props
  // const HandlerGotoAuthentication =()=>{
  //     navigation.push('Authentication')
  // }
  // const HandlerGotoChangeInfo = () => {
  //     navigation.push('ChangeInfo')
  // }
  // const HandlerGotoOrderhistory = () => {
  //     navigation.push('OrderHistory')
  // }
  return (
    // <View style={{flex:1,backgroundColor:'red'}}>
    //     <Text>Main</Text>
    //     <Button title="Authentication" onPress={HandlerGotoAuthentication}>

    //     </Button>
    //     <Button title="Go to ChangeInfo" onPress={HandlerGotoChangeInfo}>
    //                     </Button>
    //     <Button title="Go to OrderHjstory" onPress={HandlerGotoOrderhistory}>

    //     </Button>
    // </View>


<NavigationContainer independent={true}>
 
      <Drawer.Navigator
      drawerContent={({navigation})=>
      {return <Menu navigation={navigation}/>}}
        screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Shop" component={Shop} />
        <Drawer.Screen name="Menu" component={Menu} />
        <Drawer.Screen name="ChangeInfo" component={ChangeInfo}/>
        <Drawer.Screen name="Authentication" component={Authentication}/>
        <Drawer.Screen name="OrderHistory" component={OrderHistory}/>
      </Drawer.Navigator>
    </NavigationContainer>

    
  )
}
