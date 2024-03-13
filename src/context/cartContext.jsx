import { createContext, useState, useContext } from "react";

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  const addToCart = (book) => {
    setItem([...item, book]);
  };
  const removeCart = (bookId) => {
    setItem(item.filter((book) => book.isbn13 != bookId));
  };

  return (
    <cartContext.Provider value={{ addToCart, removeCart, item }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(cartContext);
};
