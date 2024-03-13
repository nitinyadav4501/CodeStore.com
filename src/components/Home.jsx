import React from "react";
import { useApi } from "../context/booksContext";
import BookCard from "./BookCard";
import Footer from "./Footer";
import Loader from "./Loader";

function Home() {
  const { bookData,isLoading } = useApi();
  return (
    <div className="bg-gray-200">
      <div className="text-center bg-gray-300 py-5 space-y-3">
        <h1 className="text-3xl font-medium tracking-wide">
          Welcome to CodeStore
        </h1>
        <p className="text-2xl font-bold tracking-wider font-serif text-red-700">
          IT, Programming and Computer Science Books
        </p>
      </div>
      <div className="md:px-32 px-12 py-12 space-y-2">
        <h1 className="text-2xl text-gray-500 ">New Releases Books</h1>
        <hr className="h-[2px] bg-gray-300" />
        <div
          className={`min-h-[60vh] flex justify-center gap-x-10 items-center ${
            isLoading ? "flex-nowrap" : "flex-wrap"
          }  gap-y-8 py-12`}
        >
          {isLoading ? (
            <Loader />
          ) : (
            bookData.map((book, idx) => {
              return (
                <div key={idx}>
                  <BookCard bookData={book} />
                </div>
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
