import { Star } from "lucide-react";
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
  const { image, tags, bookName, author, category, rating, bookId } = book;
  return (
    <Link
      to={`/books/${bookId}`}
      className="card w-96 bg-base-100 shadow-xl p-6 rounded-2xl"
    >
      <div className="rounded-2xl mb-6">
        <figure className="px-10 py-10">
          <img src={image} alt="Shoes" className="w-36 h-44" />
        </figure>
      </div>
      <div>
        <div className="flex gap-3 mb-4">
          {tags.map((tag, idx) => (
            <p key={idx} className="px-4 text-[#23BE0A] work-sans">
              {tag}
            </p>
          ))}
        </div>
        <h2 className="text-[#131313] play-fair text-2xl font-bold mb-4">
          {bookName}
        </h2>
        <p className="text-[#131313cc] font-medium work-sans mb-10">
          By: {author}
        </p>
        <div className="flex justify-between work-sans font-medium text-[#131313cc]">
          <p className=" ">{category}</p>
          <div>
            <p className="flex gap-2">
              {rating}
              <span>
                <Star />
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
