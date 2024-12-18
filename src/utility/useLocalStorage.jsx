import { useEffect, useState } from "react";
import {
  getFromLocalStorageRead,
  getFromLocalStorageWishlist,
} from "./localstorage";

const useLocalStorage = () => {
  const [reads, setReads] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    setReads(getFromLocalStorageRead);
    setWishlist(getFromLocalStorageWishlist);
  }, []);

  return { reads, wishlist };
};
export default useLocalStorage;
