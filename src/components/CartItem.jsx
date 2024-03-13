import React from "react";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";

function CartItem() {
  const { item, removeCart } = useCart();
  const handleRemove = (bookId) => {
    removeCart(bookId);
  };
  return (
    <div
      className={`bg-gray-200 px-12 md:px-52 min-h-[80vh] py-12 ${
        item.length == 0 ? "" : "flex flex-col items-start"
      }`}
    >
      {item.length === 0 ? (
        <div className=" font-bold mt-44  space-y-3 text-center">
          <p className="text-2xl py-4 text-red-600">Your Cart is Empty!</p>
          <Link to={"/"} className="bg-sky-800 text-white px-5 py-1 ">
            Shop Now
          </Link>
        </div>
      ) : (
        <>
          {item.map((item) => {
            return (
              <div key={item.isbn13}>
                <div className="flex justify-center gap-x-10 items-center text-center md:text-start flex-wrap">
                  <img className="h-52" src={item.image} alt="" />
                  <div className="space-y-2 w-52">
                    <p className="text-xl font-medium">{item.title}</p>
                    <p className="text-xl font-bold text-red-700">
                      {item.price}
                    </p>
                    <button
                      onClick={() => handleRemove(item.isbn13)}
                      className="bg-sky-600 font-bold w-fit mx-auto text-white px-4 py-1 hover:bg-sky-800"
                      >
                      Remove
                    </button>
                  </div>
                </div>
                <hr className="h-1 bg-gray-300 my-3" />
              </div>
            );
          })}
          <div className="space-y-3 py-5">
            <p className="text-xl font-bold space-x-10 bg-gray-300 px-12">
              <span className="text-sky-800">Total Books </span>
              <span className="text-red-800">{item.length}</span>
            </p>
            <p className="text-xl font-bold space-x-10 bg-gray-300 px-12">
              <span className="text-sky-800">Total Amount </span>
              <span className="text-red-800">
                ${item.reduce((a, b) => a + Number(b.price.slice(1)), 0)}
              </span>
            </p>
            <div className="text-center bg-sky-800 py-1 font-bold text-white text-xl px-12">
              <button >Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
