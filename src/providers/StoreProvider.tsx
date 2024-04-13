import { createContext, ReactNode, useEffect, useState } from 'react';
import { food_list } from '../assets/assets';

export interface FoodList {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

interface Props {
  children: ReactNode;
}

export interface ContextValue {
  food_list: FoodList[];
  cartItems: CartItems;
  setCartItems: React.Dispatch<React.SetStateAction<CartItems>>;
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
}

interface CartItems {
  [itemId: string]: number;
}

export const StoreContext = createContext<ContextValue | null>(null);

const StoreContextProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItems>({});

  const addToCart = (itemId: string): void => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeFromCart = (itemId: string): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue: ContextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
