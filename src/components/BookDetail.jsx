import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useApi } from "../context/booksContext";
import { useCart } from "../context/cartContext";
import Loader from "./Loader";

function BookDetail() {
  const { state } = useLocation();
  const [data, setData] = useState([]);
  const { item, addToCart, removeCart } = useCart();
  const { isLoading, setIsLoading } = useApi();
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const url = await fetch(
        `https://api.itbook.store/1.0/books/${state.isbn13}`
      );
      const response = await url.json();
      setData(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [state]);
  const IsProductAvailable = item.some((item) => item.isbn13 === data.isbn13);
  const handleAddToCart = () => {
    if (IsProductAvailable) {
      removeCart(data.isbn13);
    } else {
      addToCart(data);
    }
  };
  return (
    <>
      {isLoading ? (
        <div className="h-[80vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="bg-gray-200 min-h-[90vh]">
          <div className="bg-gray-300   py-3 space-y-3 px-12 md:px-52">
            <p className="text-sky-900 text-3xl font-medium font-serif">
              {data.title}
            </p>
            <p className=" text-red-700 text-2xl font-medium font-serif">
              {data.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center py-20 gap-x-28">
            <img src={data.image} alt="" />
            <div className=" space-y-3 max-w-[35rem] px-12">
              <div className="bg-gray-300 px-12 py-1 flex justify-between gap-x-52">
                <p>Price</p>
                <p className="font-bold text-red-700">{data.price}</p>
              </div>
              <div className="bg-sky-100 px-12 py-1 flex justify-between gap-x-10">
                <p>Authors</p>
                <p className="font-bold">{data.authors}</p>
              </div>
              <div className="bg-gray-300 px-12 py-1 flex justify-between gap-x-10">
                <p>Publisher</p>
                <p className="font-bold">{data.publisher}</p>
              </div>
              <div className="bg-sky-100 px-12 py-1 flex justify-between gap-x-10">
                <p>Published</p>
                <p className="font-bold">{data.year}</p>
              </div>
              <div className="bg-gray-300 px-12 py-1 flex justify-between gap-x-10">
                <p>Pages</p>
                <p className="font-bold">{data.pages}</p>
              </div>
              <div className="bg-sky-100 px-12 py-1 flex justify-between gap-x-10">
                <p>Language</p>
                <p className="font-bold">{data.language}</p>
              </div>
              <div className="bg-gray-300 px-12 py-1 flex justify-between gap-x-10">
                <p>ISBN-13</p>
                <p className="font-bold">{data.isbn13}</p>
              </div>
              <div className="bg-sky-100 px-12 py-1 flex justify-between gap-x-10">
                <p>ISBN-10</p>
                <p className="font-bold">{data.isbn10}</p>
              </div>
              <div className="space-x-10 py-2">
                <button
                  onClick={handleAddToCart}
                  className="bg-sky-600 rounded-full w-fit mx-auto text-white px-4 py-1 hover:bg-sky-800"
                >
                  {IsProductAvailable ? "Remove" : "Add to Cart"}
                </button>
                <button className="bg-sky-600 rounded-full w-fit mx-auto text-white px-4 py-1 hover:bg-sky-800">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="md:px-52 px-12 pb-12 space-y-3">
            <h2 className="text-sky-800 text-2xl">Description</h2>
            <hr className="h-[2px] bg-gray-300" />
            <p>{data.desc}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default BookDetail;
