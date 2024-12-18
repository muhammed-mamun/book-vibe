import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveReadList, saveWishlist } from "../../utility/localstorage";
const Book = () => {
  const book = useLoaderData();
  const { id } = useParams();
  const {
    image,
    title,
    author,
    category,
    review,
    tags,
    totalPage,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const addToReadList = (book) => {
    saveReadList(book);
  };

  const addToWishlist = (book) => {
    saveWishlist(book);
  };

  return (
    <div className="grid grid-cols-2 px-6 gap-12">
      <div className="p-20 ">
        <img className="w-[425px] h-[576px]" src={image} />
      </div>
      <div className="flex-1 justify-center  flex flex-col h-full">
        <h2 className="text-[#131313] play-fair text-4xl mb-4">{title}</h2>
        <p className="text-2xl font-medium work-sans mb-10 text-[#424242]">
          By: {author}
        </p>
        <p className="mb-10 text-[#424242]">{category}</p>
        <p className=" work-sans text-[#424242]">
          <span className="font-bold text-[#131313]">Review: </span> {review}
        </p>
        <div className="flex font-medium work-sans gap-3 mt-7 mb-12">
          <p className="text-[#131313]">Tag</p>
          {tags.map((tag, idx) => (
            <p key={idx} className="text-[#23BE0A] ">
              #<span>{tag}</span>
            </p>
          ))}
        </div>
        <div className="w-96 work-sans grid grid-cols-1 gap-3">
          <div className="grid grid-cols-2">
            <p className="text-[#424242]">Number of Pages:</p>
            <p className="font-semibold">{totalPage}</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="text-[#424242]">Publisher:</p>
            <p className="font-semibold">{publisher}</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="text-[#424242]">Year of Publishing:</p>
            <p className="font-semibold">{yearOfPublishing}</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="text-[#424242]">Rating:</p>
            <p className="font-semibold">{rating}</p>
          </div>
        </div>
        <div className="flex gap-4 font-semibold work-sans mt-8">
          <button
            onClick={() => addToReadList(book)}
            className="btn btn-outline text-black"
          >
            Read
          </button>
          <button
            onClick={() => addToWishlist(book)}
            className="btn bg-[#50B1C9] text-white"
          >
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Book;
