import BookCard from "./BookCard";
import Loader from "./Loader";
import { useLocation } from "react-router-dom";
function SearchItem() {
  const { state } = useLocation();
  if (!state || state.isLoading === undefined || state.bookData === undefined) {
    return (
      <div className="text-center text-2xl text-red-500 font-bold mt-10">
        <h1>Book not found!</h1>
      </div>
    );
  }

  return (
    <div className=" bg-gray-200">
      <div
        className={`${
          state.isLoading
            ? "flex justify-center items-center"
            : "grid grid-cols-4 place-items-center gap-y-8 py-12 px-32"
        } min-h-[90vh]`}
      >
        {state.isLoading ? (
          <Loader />
        ) : (
          state.bookData.map((book, idx) => {
            return (
              <div key={idx}>
                <BookCard bookData={book} />
              </div>
            );
          })
        )}
      </div>
      
    </div>
  );
}

export default SearchItem;
