import { createContext, ReactNode } from 'react';
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
}

export const StoreContext = createContext<ContextValue | null>(null);

const StoreContextProvider = ({ children }: Props) => {
  const contextValue: ContextValue = { food_list };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
