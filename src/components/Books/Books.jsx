import { useLoaderData } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import BookCard from "../BookCard/BookCard";

const Books = () => {
  const books = useLoaderData();

  return (
    <div className="px-6">
      <h2 className="text-center play-fair text-[40px] font-bold text-[#131313] pb-9">
        Books
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard book={book} key={book.bookId}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
