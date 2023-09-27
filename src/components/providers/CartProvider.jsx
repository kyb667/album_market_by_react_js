import { createContext, useState } from "react";

export const CartContent = createContext({});

export const CartProvider = (props) => {
  const { children } = props;

  const [cart, setCart] = useState({});

  return (
    <>
      <CartContent.Provider value={{ cart, setCart }}>
        {children}
      </CartContent.Provider>
    </>
  );
};
