import React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Dimensions, Image, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { color, sin } from "react-native-reanimated";
import Color from "../../../src/color/Color";

const { height, width } = Dimensions.get("window");





export default Category = (props) => {
  const{navigation} = props.navigation
  const[category,setCategory] = useState([
    {
      id:1,
      img:"https://toplist.vn/images/800px/emas-shop-761412.jpg",
      name:"Nhan hang"
    },
    {
      id:2,
      img:"https://toplist.vn/images/800px/unicus-744545.jpg",
      name:'Gucci'
    },
    {
      id:3,
      img:"https://toplist.vn/images/800px/4men-shop-917832.jpg",
      name:"Nike"
    },
  ])
  
  const [imgActive, setImgActive] = useState(0);
  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };
  return (
    <View 
    
      style={{
        height: height * 0.35,
        backgroundColor: "white",
        marginVertical: 5,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{ fontSize: 18, margin: 5 }}>List of Category</Text>
      <ScrollView
        onScroll={({ nativeEvent }) => onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={{ height: height * 0.3, width: width }}>
        {category.map((e, index) => (
          <TouchableOpacity
            onPress={()=>navigation.navigate('ListProduct',{
              categorys:e
            })}
             style={{ width: width - 30, marginRight: 15, marginLeft: 15 }}
          >
             <Image
            key={e.img}
            resizeMode="stretch"
            style={{width:'100%',height:"100%"}}
            source={{ uri: e.img }}
          />
          </TouchableOpacity>
          
         
        ))}
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        {category.map((e, index) => (
          <Text
            key={e}
            style={imgActive == index ? styles.dotActive : styles.dot}
          >●</Text>))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  dotActive: {
    margin: 4,
    fontSize: 25,
    color: "white",
  },
  dot: {
    margin: 3,
    fontSize: 25,
    color: "blue",
  },
});
