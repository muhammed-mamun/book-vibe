import { toast } from "react-toastify";

const getStoredRead = () => {
  const readList = localStorage.getItem("readList");
  if (readList) {
    return JSON.parse(readList);
  }
  return [];
};
const getStoredWishlist = () => {
  const wishList = localStorage.getItem("wishlist");
  if (wishList) {
    return JSON.parse(wishList);
  }
  return [];
};

const saveReadList = (book) => {
  const storedReads = getStoredRead();
  const exists = storedReads.find(
    (storedBook) => storedBook.bookId === book.bookId
  );
  if (!exists) {
    storedReads.push(book);
    localStorage.setItem("readList", JSON.stringify(storedReads));
    toast("Added to read");
  } else {
    toast("Already Added");
  }
};

const saveWishlist = (book) => {
  const storedReads = getStoredRead();
  const storedWishlists = getStoredWishlist();
  const existRead = storedReads.find(
    (storedBook) => storedBook.bookId === book.bookId
  );
  const existWishlist = storedWishlists.find(
    (storedBook) => storedBook.bookId === book.bookId
  );

  if (!existRead && !existWishlist) {
    storedWishlists.push(book);
    localStorage.setItem("wishlist", JSON.stringify(storedWishlists));
    toast("Added to wishlist");
  } else if (existRead) {
    toast("You have already read this book");
  } else {
    toast("Already in wislisht");
  }
};

const getFromLocalStorageRead = () => {
  const data = JSON.parse(localStorage.getItem("readList"));
  return data;
};
const getFromLocalStorageWishlist = () => {
  const data = JSON.parse(localStorage.getItem("wishlist"));
  return data;
};
export {
  getFromLocalStorageRead,
  getFromLocalStorageWishlist,
  getStoredRead,
  getStoredWishlist,
  saveReadList,
  saveWishlist,
};
