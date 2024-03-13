import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SearchItem from "./components/SearchItem";
import Footer from "./components/Footer";
import BookDetail from "./components/BookDetail";
import CartItem from "./components/CartItem";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/search-item",
      element: (
        <>
          <Navbar />
          <SearchItem />
          <Footer />
        </>
      ),
    },
    {
      path: "/book-deatil/:bookTitle",
      element: (
        <>
          <Navbar />
          <BookDetail />
          <Footer />
        </>
      ),
    },
    {
      path: "/cart-item",
      element: (
        <>
          <Navbar />
          <CartItem />
          <Footer />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
