import { View,Text } from 'react-native'
import Main from './Component/Main/Main'
import Authentication from './Component/Authentication/Authentication';
import ChangeInfo from './Component/ChangeInfo/ChangeInfo'
import OrderHistory from './Component/OrderHistory/OrderHistory';


// import { createNativeStackNavigator } from '@react-navigation/native-stack';



// const Stack = createNativeStackNavigator()
// const Drawer = createDrawerNavigator()

export default function App() {
  return (
    
      <Main/>
  // </NavigationContainer>  
  //  <NavigationContainer >
  //    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Main'>
  //     <Stack.Screen  name="Main" component={Main} />
  //     <Stack.Screen  name="Authentication" component={Authentication} />
  //     <Stack.Screen name='ChangeInfo' component={ChangeInfo}/>
  //     <Stack.Screen name='OrderHistory' component={OrderHistory}/>
  //   </Stack.Navigator>
  //  </NavigationContainer>
  );
}