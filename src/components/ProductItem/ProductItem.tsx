import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Text, View, Image } from "react-native";
import { styles } from "./style";
import Button from "../Button/Button";
import { Product } from "../../@types/Product";

interface ProductProps {
  product: Product;
  itemExist: boolean
}

const ProductItem = ({ product, itemExist }: ProductProps) => {
  const { id, name, img, price, colour } = product;
  const { addItemCart, removeItemCart} = useContext(CartContext);
  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityLabel="Product Item!"
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: img,
          }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>{`Price: $${price}`}</Text>
        <Text style={styles.color}>{`Color: ${colour}`}</Text>
        <Button
          title={itemExist ? "Remove from Cart" : "Add to cart"}
          onPress={() => {
            itemExist ? removeItemCart(id) : addItemCart(product, id);
          }}
        ></Button>
      </View>
    </View>
  );
};

export default ProductItem;
