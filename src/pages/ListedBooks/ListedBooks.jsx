import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import ReadBook from "../../components/ReadBook/ReadBook";
import WishlistBook from "../../components/WishlistBook/WishlistBook";
import useLocalStorage from "../../utility/useLocalStorage";
const ListedBooks = () => {
  const [isActive, setIsActive] = useState("read");
  const { reads, wishlist } = useLocalStorage();
  const [sortedReads, setSortedReads] = useState([]);
  const [sortedWishlists, setSortedWishlists] = useState([]);

  const sortBooks = (sortBy) => {
    const sortedR = [...reads];
    const sortedW = [...wishlist];
    sortedR.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "totalPage":
          return b.totalPage - a.totalPage;
        case "yearOfPublishing":
          return b.yearOfPublishing - a.yearOfPublishing;
        default:
          return 0;
      }
    });
    sortedW.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "totalPage":
          return b.totalPage - a.totalPage;
        case "yearOfPublishing":
          return b.yearOfPublishing - a.yearOfPublishing;
        default:
          return 0;
      }
    });
    setSortedReads(sortedR);
    setSortedWishlists(sortedW);
  };
  const handleActive = (tab) => {
    setIsActive(tab);
  };
  useEffect(() => {
    sortBooks("rating");
  }, [sortedReads, sortedWishlists]);

  return (
    <div className="px-6">
      <h2 className="text-[#131313] text-3xl font-bold py-4 shadow-md text-center mb-6">
        Books
      </h2>

      <div className="flex-1 justify-center text-center">
        <details className="dropdown mb-28">
          <summary className="m-1  btn bg-green-500 w-40 hover:bg-green-600 text-white">
            <p> sort by</p>
            <ChevronDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content text-black bg-white border-2 z-[1]  rounded-box w-40">
            <li>
              <a onClick={() => sortBooks("rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => sortBooks("totalPage")}>No Of Pages</a>
            </li>
            <li>
              <a onClick={() => sortBooks("yearOfPublishing")}>
                Published Year
              </a>
            </li>
          </ul>
        </details>
      </div>
      <div className="bg-slate-100 rounded-lg">
        <div role="tablist" className="tabs tabs-lifted ">
          <div>
            <button
              onClick={() => handleActive("read")}
              role="tab"
              className={`tab ${
                isActive === "read" &&
                "tab-active  border border-b-0 bg-slate-100 rounded-lg rounded-b-none"
              }`}
            >
              Read Books
            </button>

            <button
              onClick={() => handleActive("wishlist")}
              role="tab"
              className={`tab ${
                isActive === "wishlist" &&
                "tab-active  border border-b-0 rounded-lg rounded-b-none bg-slate-100"
              }`}
            >
              Wishlist Books
            </button>
          </div>
        </div>
        {isActive === "read" ? (
          <div className="pt-8 flex-1 gap-6">
            {sortedReads.map((read, idx) => (
              <ReadBook key={idx} read={read}></ReadBook>
            ))}
          </div>
        ) : (
          <div className="pt-8 flex-1 gap-6">
            {sortedWishlists?.map((wish, idx) => (
              <WishlistBook key={idx} wishlist={wish}></WishlistBook>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListedBooks;
