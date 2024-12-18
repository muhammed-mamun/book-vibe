import { MapPin, StickyNote, Users } from "lucide-react";
import { Link } from "react-router-dom";
const WishlistBook = ({ wishlist }) => {
  const {
    title,
    image,
    author,
    tags,
    publisher,
    totalPage,
    yearOfPublishing,
    category,
    rating,
    bookId,
  } = wishlist;

  return (
    <div className="p-6 flex gap-6">
      <img src={image} alt="" className="w-32 h-44 my-7 mx-12" />

      <div className="">
        <h2 className="play-fair text-[#131313] text-2xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-[#424242] font-medium work-sans mb-4">
          By: {author}
        </p>
        <div className="flex gap-4 work-sans">
          <p className="text-[#131313] font-bold">Tag</p>
          <div className="text-[#23BE0A] work-sans font-medium flex gap-3">
            {tags.map((tag, index) => (
              <p key={index}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
          <div className="flex gap-2">
            <MapPin />
            <p className="text-[#424242] ">
              Year of Publishing: {yearOfPublishing}
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-4 mb-8">
          <div className="flex gap-2">
            <Users />
            <p className="work-sans text-[#424242] ">Publisher: {publisher}</p>
          </div>
          <div className="flex gap-2">
            <StickyNote />
            <p className="work-sans text-[#424242] ">Page {totalPage}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <p className="text-[#328EFF] font-medium work-sans bg-teal-200 rounded-full px-5 py-3">
            Category: {category}
          </p>
          <p className="font-medium work-sans text-[#FFAC33] bg-slate-100 rounded-full px-5 py-3">
            Rating: {rating}
          </p>
          <Link to={`/books/${bookId}`}>
            <button className="text-white text-lg font-bold work-sans bg-[#23BE0A] rounded-full px-5 py-3">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishlistBook;
