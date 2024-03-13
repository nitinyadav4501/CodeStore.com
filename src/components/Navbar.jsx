import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSearch } from "../context/searchContext";
import { useCart } from "../context/cartContext";

function Navbar() {
  const { querry, setQuerry } = useSearch();
  const [bookData, setBookData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false)
  const { item } = useCart();
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const url = await fetch(`https://api.itbook.store/1.0/search/${querry}`);
      const response = await url.json();
      setBookData(response.books);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [querry]);
  const handleShow = ()=>{
    if (!showSearch) {
      setShowSearch(true)
    }else{
      setShowSearch(false)
    }
  }
  return (
    <>
      <nav className="flex md:justify-around justify-between px-12 md:px-1 sticky top-0 z-10 bg-sky-700 py-4 items-center text-white">
        <div className="font-bold text-2xl tracking-wide">#CodeStore</div>
        <div className="flex gap-x-8 items-center">
          <div className="md:flex items-center hidden">
            <input
              value={querry}
              onChange={(e) => setQuerry(e.target.value.toLowerCase())}
              className="rounded-l-full text-black px-3 py-1 w-80 outline-none cursor-pointer"
              type="search"
              placeholder="Search your book"
              aria-label="Search your book"
            />
            <Link
              to={"/search-item"}
              state={{ bookData, isLoading }}
              onClick={fetchData}
              className="bg-white px-3 py-2 rounded-r-full text-black cursor-pointer border-l"
            >
              <IoSearch />
            </Link>
          </div>
          <div className="text-2xl md:hidden" onClick={handleShow}>
            <IoSearch />
          </div>
          <Link
            to={"/cart-item"}
            className="flex items-center gap-x-3 relative cursor-pointer"
          >
            <FaCartShopping className="text-2xl" />
            <div className="bg-red-500 absolute left-4 h-5 w-5 flex justify-center items-center bottom-4 rounded-full">
              <span>{item.length}</span>
            </div>
          </Link>
        </div>
      </nav>
      <div>
        <div className={`items-center md:hidden justify-center bg-gray-300 ${showSearch?'flex':'hidden'} transition-all`}>
          <input
            value={querry}
            onChange={(e) => setQuerry(e.target.value.toLowerCase())}
            className=" text-black px-3 py-1 w-80 outline-none cursor-pointer"
            type="search"
            placeholder="Search your book"
            aria-label="Search your book"
          />
          <Link
            to={"/search-item"}
            state={{ bookData, isLoading }}
            onClick={fetchData}
            className="bg-white px-3 py-2 text-black cursor-pointer border-l"
          >
            <IoSearch />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
