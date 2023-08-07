import React, { useState, useEffect, useContext } from "react";
import { View, Text, ListRenderItemInfo, FlatList } from "react-native";
import { Product } from "../../@types/Product";
import api from "../../services/api";
import ProductItem from "../../components/ProductItem/ProductItem";
import { styles } from "./style";
import Button from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../context/CartContext";

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>();
  const { alreadyExist } = useContext(CartContext);
  useEffect(() => {
    api
      .get<Product[]>("products")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderHeader = () => (
    <Text style={styles.title}>Welcome to ECommerce mobile app</Text>
  );

  const renderItem = ({ item }: ListRenderItemInfo<Product>) => {
    const itemExist = alreadyExist(item.id);
    return(
      <View key={item.id}>
      <ProductItem itemExist={itemExist} product={item} />
    </View>
    )
  }

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={renderHeader}
    />
  );
};

export default ProductsList;
