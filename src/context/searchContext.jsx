import { createContext, useState, useContext } from "react";

export const booksContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [querry, setQuerry] = useState('')

  return (
    <booksContext.Provider value={{querry,setQuerry}}>
      {children}
    </booksContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(booksContext);
};
