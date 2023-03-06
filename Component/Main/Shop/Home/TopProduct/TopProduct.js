import React, { useState } from "react";
import { Dimensions, Image, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ItemTopProduct from "./ItemTopProduct";

const { height, width } = Dimensions.get("window");

export default TopProduct = (props) => {
  const { navigation } = props.navigation;

  const [listProduct, setListProduct] = useState([
    {
      id: 1,
      img: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/448832/item/vngoods_69_448832.jpg?width=750",
      nameProduct: "productName",
      price: 80,
    },
    {
      id: 2,
      img: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/448832/item/vngoods_69_448832.jpg?width=750",
      nameProduct: "productName",
      price: 80,
    },
    {
      id: 1,
      img: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/448832/item/vngoods_69_448832.jpg?width=750",
      nameProduct: "productName",
      price: 80,
    },
    {
      id: 2,
      img: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/448832/item/vngoods_69_448832.jpg?width=750",
      nameProduct: "productName",
      price: 80,
    },
    {
      id: 1,
      img: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/448832/item/vngoods_69_448832.jpg?width=750",
      nameProduct: "productName",
      price: 80,
    },
    {
      id: 2,
      img: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/448832/item/vngoods_69_448832.jpg?width=750",
      nameProduct: "productName",
      price: 80,
    },
  ]);
  return (
    <FlatList
      style={{ marginBottom: 53 }}
      data={listProduct}
      numColumns="2"
      renderItem={({ item, index }) => {
        return (
          <ItemTopProduct
            products={item}
            index={index}
            navigation={navigation}
          />
        );
      }}
    />
  );
};
