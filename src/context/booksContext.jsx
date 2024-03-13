import { createContext, useState, useEffect, useContext } from "react";

export const booksContext = createContext();

export const ContextProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const url = await fetch(`https://api.itbook.store/1.0/new`);
      const response = await url.json();
      setBookData(response.books);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <booksContext.Provider value={{bookData,isLoading,setIsLoading}}>{children}</booksContext.Provider>;
};

export const useApi = ()=>{
  return useContext(booksContext)
}