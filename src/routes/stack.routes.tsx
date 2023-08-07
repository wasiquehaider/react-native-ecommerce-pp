import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, Image, View, StyleSheet } from "react-native";
const { Screen, Navigator } = createNativeStackNavigator();
import { useNavigation } from "@react-navigation/native";
import ProductsList from "../screens/Products/Products";
import Cart from "../screens/Cart/Cart";
import Icon from "../assets/cart-icon.png";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export function StackRoutes() {
  const navigation = useNavigation();
  const { cart } = useContext(CartContext);
  return (
    <Navigator>
      <Screen
        name="Products"
        component={ProductsList}
        options={{
          headerStyle: {
            backgroundColor: '#ffd966', // Set your desired header color
          },
          headerTitle: "Products",
          headerTintColor: '#fff',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Image
                style={styles.image}
                source={Icon}
                tintColor="#fff"
              />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cart.length}</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  image:{
    width: 35,
    height: 35,
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#f34",
  },
  badgeText: { fontSize: 12, color: "#fff" },
});
