import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

function BookCard({ bookData }) {
  const { item, addToCart, removeCart } = useCart();
  const IsProductAvailable = item.some(
    (item) => item.isbn13 === bookData.isbn13
  );

  const handleAddToCart = ()=>{
    if (IsProductAvailable) {
      removeCart(bookData.isbn13);
    }else{
      addToCart(bookData);
    }
  }
  return (
    <>
      <div className="w-60 cursor-pointer border-gray-400 rounded-2xl border shadow-md px-3 text-center hover:shadow-xl hover:scale-105 transition-all min-h-[25rem]">
        <Link to={`/book-deatil/${bookData.title}`} state={bookData}>
          <img className="h-60 w-full" src={bookData.image} alt="" />
        </Link>
        <div className="font-bold flex flex-col gap-y-3 pb-7">
          <p className="text-sky-600">
            {bookData.title.length > 20
              ? bookData.title.substring(0, 20) + "..."
              : bookData.title}
          </p>
          <p className="font-bold text-red-700">{bookData.price}</p>
          <button onClick={handleAddToCart}  className="bg-sky-600 rounded-full w-fit mx-auto text-white px-4 py-1 hover:bg-sky-800">
            {IsProductAvailable?'Remove':'Add to Cart'}
          </button>
          <Link to={`/book-deatil/${bookData.title}`} state={bookData}>
            <button className="bg-sky-600 rounded-full w-fit mx-auto text-white px-4 py-1 hover:bg-sky-800">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BookCard;
