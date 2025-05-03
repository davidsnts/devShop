import { createContext, ReactNode, useState } from "react";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
}

interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}
interface CartproviderProps {
  children: ReactNode;
}
export const CartContext = createContext({} as CartContextData);
function CartProvider({ children }: CartproviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);
  return (
    <CartContext.Provider value={{ cart, cartAmount: cart.length }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
