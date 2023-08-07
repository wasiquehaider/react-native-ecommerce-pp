import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import CartContextProvider from "../context/CartContext";
import { SafeAreaView } from "react-native";

export function Routes() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#ffd966'}}>
    <CartContextProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </CartContextProvider>
    </SafeAreaView>
  );
}
