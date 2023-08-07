import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Text, View, Image } from "react-native";
import CartItemProps from "../../@types/CartItem";
import Button from "../Button/Button";
import { styles } from "./style";

interface CartProps {
  item: CartItemProps;
}
const CartItem = ({ item }: CartProps) => {
  const { removeItemCart, increaseItem, decreaseItem } =
    useContext(CartContext);
  const { id, name, img, price, colour, amount } = item;

  return (
    <View accessible={true} accessibilityLabel="Cart Item">
      <View style={styles.container}>
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
          <Button title="Remove" onPress={() => removeItemCart(id)}></Button>
          <View style={styles.buttonContainer}>
            <Button title="-" onPress={() => decreaseItem(item)}></Button>
            <Text style={styles.quantity}>{`${amount}`}</Text>
            <Button title="+" onPress={() => increaseItem(item)}></Button>
          </View>
          
        </View>
      </View>
    </View>
  );
};

export default CartItem;
