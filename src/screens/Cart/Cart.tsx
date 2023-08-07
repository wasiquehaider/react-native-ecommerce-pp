import React, { useContext } from "react";
import {
  Text,
  View,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import Button from "../../components/Button/Button";
import { styles } from "./style";
import CartItemProps from "../../@types/CartItem";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  const renderHeader = () => (
    <View style={styles.button}>
      <Button title="Clear Cart" onPress={() => clearCart()}></Button>
    </View>
  );
  const renderEmpty = () => (
    <View style={styles.empty}>
      <Text>The cart is empty</Text>
    </View>
  );

  const renderItem = ({ item }: ListRenderItemInfo<CartItemProps>) => (
    <View key={item.id}>
      <CartItem item={item} />
    </View>
  );

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={cart}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={renderHeader}
      ListEmptyComponent={renderEmpty}
    />
  );
};

export default Cart;
