import { Routes } from "./src/routes";
import CartContextProvider from "./src/context/CartContext";

export default function App() {
  return (
    <CartContextProvider>
      <Routes />
    </CartContextProvider>
  );
}
